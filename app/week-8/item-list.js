"use client";

import React from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
    return (
        <div>
            <h3 className="font-bold text-lg">Shopping List</h3>
            {items.map(item => (
                <Item key={item.id} {...item} onSelect={onItemSelect} />
            ))}
        </div>
    );
};

export default ItemList;
