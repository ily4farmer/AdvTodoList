import {  useEffect, useReducer } from 'react';
import './App.sass';
import Content from './Components/Content/Content';
import { Context } from './Components/Context/Context';
import SideBar from './Components/SideBar/SideBar';

function init(state) {
  return {...state};
}

function reducer(state, action) {
  switch (action.type) {
    case "item":
      return  {...state, item: action.payload}
    case "value":
      return  {...state, value: action.payload}
    case "contentTask":
      return  {...state, contentTask: action.payload}
    case "contentValue":
      return  {...state, contentValue: action.payload}
    case "a":
      return  {...state, a: action.payload}
    case "reset":
      return  init(action.payload)
  
    default:
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, 
    { item: [], 
      value: '', 
      contentValue: '',
      a: ''
    }, init);


  function AddA(i, index, task) {
    const data = {
      item: i,
      index, 
      task
    }
    dispatch({type: "a", payload: data});
  
  }

  //Content

  const taskCheckedHendler = (elem, index, ident) => {
    const item = [...data.item];
    const task = item[ident].task[index]
    task.checked = !task.checked
    dispatch({type: "item", payload: [...item]});
  }

  function contentInput(e) {
    dispatch({type: "contentValue", payload: e.target.value});
  }

  const addTaskItem = (indexs, e) => {
    e.preventDefault();
    const a  = [...data.item];
    let item = a[indexs];
    if (data.contentValue !== '') {
      item.task = [...item.task ,{value: data.contentValue, checked: false}];
      //Новый
      const content = {
        index: indexs,
        item: item.value,
        task: item.task
      }
      
        dispatch({type: "item", payload: [...a]});
        dispatch({type: "a", payload: content});
        dispatch({type: "contentValue", payload: ''}); 
    }
  }
  
  //////

  //Sidebar
  // Считывание value из input формы 
  const inputHandler = (e) => {
    dispatch({type: "value", payload: e.target.value});
  }
  // Добавление элемента в item
  const addItem = (e) => {
    e.preventDefault();
    if (data.value !== '') {
      const value = {value: data.value, task: []};
      dispatch({type: "item", payload: [...data.item, value]});
      dispatch({type: "value", payload: ''}); 
    }
  }
  // Удаление элемента из item sidebar
  const deleteItem = (index) => {
    const newArr = [...data.item];
    newArr.splice(index, 1);
    dispatch({type: "item", payload: [...newArr]});
  }

  // Получение данных из localStorage
  useEffect(()=> {
    //getItem надо использовать раньше, т.к. данный из localStorage не сохраняются
    const arr = localStorage.getItem('item');
    const arr2 = localStorage.getItem('a');
    dispatch({type: "item", payload: JSON.parse(arr)});
    dispatch({type: "a", payload: JSON.parse(arr2)});
  }, []);

  //Сохранение элементов item в localStorage
  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(data.item));
    localStorage.setItem('a', JSON.stringify(data.a));
  }, [data.item, data.a]);

  if (condition) {
    
  }
  
  return (
    <Context.Provider value={
      {deleteItem: deleteItem,  
      addTaskItem:addTaskItem,
      contentInput:contentInput,
      contentValue: data.contentValue,
      AddA: AddA,
      a: data.a,
      taskCheckedHendler:taskCheckedHendler}}>
          <div className="App">
            <SideBar item={data.item} addItem={addItem} inputHandler={inputHandler} value={data.value}/> 
            {/* <Content item={data.item} content={data.content}/> */}
            <div className="content">
              {/* <Route path="/content/:id" component={Content}/> */}
              <Content/>
            </div>
          </div>
    </Context.Provider>
  );
}

export default App;
