import React from 'react';
import ItemList from './item-list';

function Item({name,quantity,category}) {
    return (
        <ul className='p-2 m-4 bg-slate-900 max-w-sm'>  
        <li>  
            <h2 className='text-xl font-bold'>{name}</h2>
            <p> Buy {quantity} in {category}</p>
        </li>
            
        </ul>
    );
}   

export default Item;