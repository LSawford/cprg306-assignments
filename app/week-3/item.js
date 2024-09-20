import React from 'react';
import ItemList from './item-list';

function Item({name,quantity,category}) {
    return (
        <li>    
            {name}
            <p> Buy {quantity} in {category}</p>
            
        </li>
    );
}   

export default Item;