import React from 'react';

function Item({ name, quantity, category, onSelect }) {
    return (
        <ul className='p-2 m-4 bg-slate-900 max-w-sm' onClick={() => onSelect(name)} style={{ cursor: "pointer" }}>
            <li>
                <h2 className='text-xl font-bold'>{name}</h2>
                <p> Buy {quantity} in {category}</p>
            </li>
        </ul>
    );
}

export default Item;
