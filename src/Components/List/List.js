import React from 'react';
import ListItem from '../ListItem/ListItem';

const List = ({item}) => {
    return ( 
        <ul className="sidebar__list">
            {item.map((i, index)=> {
                return (
                <ListItem item={i.task} key={index} index={index} i={i.value} />
            )})}
        </ul> 
    );
}
 
export default List;