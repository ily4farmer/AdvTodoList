import React, { Fragment, useContext, useState } from 'react';
import { Context } from '../Context/Context';

const Form = ({index}) => {
    const {addTaskItem, contentInput, contentValue} = useContext(Context);
    const [modal, setModal] = useState(false);
    return (
        <Fragment>
        <button onClick={() => setModal(true)} className="content__btn btn">+ Новая задача</button>
        {modal && 
        <form onSubmit={(e) => addTaskItem(index, e)} action="#" className="form content-form">
            <input value={contentValue} onChange={(e) =>contentInput(e)} type="text" placeholder="Текст задачи" className="form__text content-form__text"/>
            <input type="submit" className="form__btn content-form__btn"/>
            <button onClick={(e) => setModal(false, e)} className="btn content-form__close">Отмена</button>
        </form>
        }
        </Fragment> 
     );
}
 
export default Form;