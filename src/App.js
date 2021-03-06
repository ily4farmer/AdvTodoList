import {  useEffect, useReducer } from 'react';
import './App.sass';
import Content from './Components/Content/Content';
import { Context } from './Components/Context/Context';
import SideBar from './Components/SideBar/SideBar';
import { init, reducer } from './Reducer';

function App() {
  const [data, dispatch] = useReducer(reducer, 
    { item: [], 
      value: '', 
      contentValue: '',
      route: ''
    }, init);


  function AddRoute(i, index, task) {
    const data = {
      item: i,
      index, 
      task
    }
    dispatch({type: "route", payload: data});
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
    const items  = [...data.item];
    let item = items[indexs];
    if (data.contentValue !== '') {
      item.task = [...item.task ,{value: data.contentValue, checked: false}];
      //Новый content
      const content = {
        index: indexs,
        item: item.value,
        task: item.task
      }
      
        dispatch({type: "item", payload: [...items]});
        dispatch({type: "route", payload: content});
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
      dispatch({type: "route", payload: ''});
    }
  }
  // Удаление элемента из item sidebar
  const deleteItem = (index) => {
    const newArr = [...data.item];
    newArr.splice(index, 1);
    dispatch({type: "item", payload: [...newArr]});
    dispatch({type: "route", payload: ''});
  }

  // Получение данных из localStorage
  useEffect(()=> {
    //getItem надо использовать раньше, т.к. данный из localStorage не сохраняются
    const arr = localStorage.getItem('item');
    const arr2 = localStorage.getItem('route');
    dispatch({type: "item", payload: JSON.parse(arr)});
    dispatch({type: "route", payload: JSON.parse(arr2)});
  }, []);

  //Сохранение элементов item в localStorage
  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(data.item));
    localStorage.setItem('route', JSON.stringify(data.route));
  }, [data.item, data.route]);
  
  return (
    <Context.Provider value={
      {deleteItem: deleteItem,  
      addTaskItem:addTaskItem,
      contentInput:contentInput,
      contentValue: data.contentValue,
      AddRoute: AddRoute,
      route: data.route,
      visible: data.visible,
      taskCheckedHendler:taskCheckedHendler}}>
          <div className="App">
            <SideBar item={data.item}  addItem={addItem} inputHandler={inputHandler} value={data.value}/> 
            <div className="content">
              <Content item={data.item}/>
            </div>
          </div>
    </Context.Provider>
  );
}

export default App;
