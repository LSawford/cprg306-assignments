"use client";

import React, { useState } from 'react';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import MealIdeas from './meal-ideas.js';
import itemsData from './items.json';

function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleItemSelect = (itemName) => {
        const cleanName = itemName
            .split(",")[0]
            .trim()
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "");
        setSelectedItemName(cleanName);
    };

    return (
        <main className="flex flex-col md:flex-row">
            <div className="flex-1 p-4">
                <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="flex-1 p-4">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}

export default Page;
