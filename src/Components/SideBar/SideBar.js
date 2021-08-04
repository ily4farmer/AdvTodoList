import React, { Fragment, useState } from 'react';
import "./SideBar.sass";
import List from '../List/List';

const SideBar = ({item, addItem, value , inputHandler}) => {
    // Показ и срытие можального окна
    const [modal, setModal] = useState(false);
    const [show, setShow] = useState(false);
    
    // Функция отвечающая за закрытие и открытие модального окна
    const modalHendler = (i, e) => {
        // event добавлен т.к. возникает предупреждение в консоли, что форма отключена
        e.preventDefault();
        setModal(() => {
            return i
        });
    }

    return ( 
        <Fragment>
            <div onClick={() => setShow(!show)} className="btn__show">
                <span/>
            </div>
            <div style={{display: !show ? "block" : 'none'}} className="sidebar">
                {/* Вывод спизка задач из массива item */}
                <List item={item}/>
                {/* Открытие модального окна */}
                <button onClick={(e) => modalHendler(true, e)} style={{}} className="sidebar__btn btn">+ Добавить папку</button>
                <div className="sidebar-form__wrapper">
                    {modal && 
                        <form onSubmit={(e) => addItem(e)} action="#" className="form sidebar-form">
                            {/* Поле input из которого получаю значение для списка задач(item) */}
                            <input value={value} onChange={inputHandler} name="name" type="text" className="form__text sidebar-form__text" placeholder="Название папки"/>
                            {/* закрытие модального окна */}
                            <button onClick={(e) => modalHendler(false, e)} className="sidebar-form__close">X</button>
                            <input type="submit" className="form__btn sidebar-form__btn"/>
                        </form>
                    }
                </div>
            </div> 
        </Fragment>
    );
}
 
export default SideBar;