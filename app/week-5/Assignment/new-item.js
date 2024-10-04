import { useState } from 'react';

export default function NewItem({ quantity, increment, decrement }) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form's default submission behavior
        
        // Create an item object
        const item = {
            name,
            quantity,
            category
        };
        
        // Log the item object to the console
        console.log(item);
        
        // Display an alert with the current state of name, quantity, and category
        alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);
        
        // Reset the form state variables to initial values
        setName("");
        setCategory("Produce");
    };

    let btnStyles = "bg-blue-600 text-white rounded px-4 py-1 hover:bg-blue-500 active:bg-green-700 disabled:bg-gray-400";

    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center w-full bg-slate-800 p-5 text-black space-x-4">
            {/* Item name input */}
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Update name state
                    placeholder="Item name"
                    className="w-full p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
                />
            </div>

            {/* Quantity controls */}
            <div className="flex items-center bg-slate-600 p-2 rounded-lg">
                <span className="text-white mr-4">{quantity}</span>
                <button type="button" className={btnStyles + " bg-gray-300 text-black"} onClick={decrement}>-</button>
                <button type="button" className={btnStyles + " ml-2"} onClick={increment}>+</button>
            </div>

            {/* Category dropdown */}
            <div>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)} // Update category state
                    className="border border-gray-300 rounded-lg p-2 bg-white focus:ring focus:ring-blue-200 focus:border-blue-500"
                >
                    <option>Produce</option>
                    <option>Meat</option>
                    <option>Dairy</option>
                    <option>Grains</option>
                    <option>Snacks</option>
                    <option>Beverages</option>
                    <option>Household</option>
                    <option>Bakery</option>
                    <option>Other</option>
                </select>
            </div>

            {/* Add button */}
            <div>
                <button type="submit" className={btnStyles + " w-full px-8"}>+</button>
            </div>
        </form>
    );
}
