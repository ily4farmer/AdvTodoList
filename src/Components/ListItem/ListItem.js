import React, { useContext } from 'react';
import close from "../../image/close.svg";
import { Context } from '../Context/Context';

const ListItem = ({item, i, index}) => {
    // console.log(item.task);
    const {deleteItem, AddA} = useContext(Context);
    
    return ( 
            <li className="sidebar__item" onClick={() => AddA(i, index, item)}>
                <div className="sidebar__item-color"></div>
                <p className="sidebar__item-text">{i}</p>
                <img onClick={() => deleteItem(index)} src={close} alt="close" className="sidebar__item-img"/>
            </li>
    );
}
 
export default ListItem;