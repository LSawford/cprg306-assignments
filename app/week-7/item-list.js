"use client"; 

import React, { useState } from 'react';
import Item from './item'; 
import items from './items.json'; 

const YourComponent = () => {
    const [itemList, setItemList] = useState(items); 
    const [sortBy, setSortBy] = useState("name"); 
    const [grouped, setGrouped] = useState(false); 
    
    const sortedItems = () => {
        return [...itemList].sort((a, b) => {
            if (sortBy === "name") {
                return a.name.localeCompare(b.name); 
            } else if (sortBy === "category") {
                return a.category.localeCompare(b.category); 
            }
            return 0; 
        });
    };

    // Function to group items by category
    const groupedItems = () => {
        const grouped = sortedItems().reduce((acc, item) => {
            const category = item.category.charAt(0).toUpperCase() + item.category.slice(1); 
            if (!acc[category]) {
                acc[category] = []; 
            }
            acc[category].push(item);
            return acc;
        }, {});

        return Object.entries(grouped).sort((a, b) => a[0].localeCompare(b[0])); 
    };

    return (
        <div>
            <div className="mb-4 flex space-x-2">
                <button 
                    onClick={() => { setSortBy("name"); setGrouped(false); }} 
                    className={`px-4 py-2 rounded ${sortBy === "name" ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-800'} transition-colors duration-300`}
                >
                    Name
                </button>
                <button 
                    onClick={() => { setSortBy("category"); setGrouped(false); }} 
                    className={`px-4 py-2 rounded ${sortBy === "category" ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-800'} transition-colors duration-300`}
                >
                    Category
                </button>
                <button 
                    onClick={() => { setGrouped(true); setSortBy(null); }} 
                    className={`px-4 py-2 rounded ${grouped ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-800'} transition-colors duration-300`}
                >
                    Grouped Category
                </button>
            </div>

            
            {grouped ? (
                groupedItems().map(([category, items]) => (
                    <div key={category} className="mb-4">
                        <h3 className="font-bold text-lg capitalize">{category}</h3>
                        {items.map(item => (
                            <Item key={item.id} {...item} /> 
                        ))}
                    </div>
                ))
            ) : (
                sortedItems().map(item => (
                    <Item key={item.id} {...item} /> 
                ))
            )}
        </div>
    );
};

export default YourComponent;
