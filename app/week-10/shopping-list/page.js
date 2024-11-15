"use client";

import React, { useState, useEffect } from "react";
import NewItem from "../_utils/new-item";
import ItemList from "../_utils/item-list";
import MealIdeas from "../_utils/meal-ideas"; // Assuming a MealIdeas component exists
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

const ShoppingListPage = () => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    };
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      const id = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { id, ...newItem }]);
    }
  };

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  return (
    <main className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Shopping List</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Shopping List Form */}
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <div className="flex items-center mt-4 space-x-4">
            <span>Sort by:</span>
            <button className="px-4 py-2 bg-orange-500 text-white rounded">Name</button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded">Category</button>
          </div>
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right Column: Meal Ideas */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
          {selectedItemName ? (
            <MealIdeas ingredient={selectedItemName} />
          ) : (
            <p>Select an item to view meal ideas</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default ShoppingListPage;
