import React, { Fragment, useContext } from 'react';
import { Context } from '../Context/Context';
import Form from '../Form/Form';
import "./Content.sass"

const Content = ({item}) => {
    const {route, taskCheckedHendler} = useContext(Context);

    return ( 
        item === 0 || route === "" ?
            <div className="content__none">Здесь пока нет задач</div>
        :
        <Fragment>
            <h3 className="content__title">{route.item}</h3>
            <ul className="content__list">
                { route.task === [] || route.task === "" || route.task === undefined ? null :
                    route.task.map((item, index) => {
                        return (
                        <li key={index} onClick={() => taskCheckedHendler(item, index, route.index)} className="content__item">
                            <div style={item.checked ? {backgroundColor: "#4DD599"} : {backgroundColor: "white"}} className="content__checked"></div>
                            <p className="content__text">{item.value}</p>
                        </li>
                        )
                    })
                }
            </ul>
            <Form index={route.index}/>
        </Fragment>
    );
}
 
export default Content;