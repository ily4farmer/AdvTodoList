import React, { Fragment, useContext } from 'react';
import { Context } from '../Context/Context';
import Form from '../Form/Form';
import "./Content.sass"

const Content = () => {
    const {a, taskCheckedHendler} = useContext(Context);
    return ( 
        <Fragment>
            
            <h3 className="content__title">{a.item}</h3>
            <ul className="content__list">
                { a.task === [] || a.task === "" || a.task === undefined ? null :
                    a.task.map((item, index) => {
                        return (
                        <li key={index} onClick={() => taskCheckedHendler(item, index, a.index)} className="content__item">
                            <div style={item.checked ? {backgroundColor: "#4DD599"} : {backgroundColor: "white"}} className="content__checked"></div>
                            <p className="content__text">{item.value}</p>
                        </li>
                        )
                    })
                }
            </ul>
            <Form index={a.index}/>
        </Fragment>
    );
}
 
export default Content;