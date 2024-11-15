import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim()) {
      const item = {
        id: uuidv4(),
        name,
        quantity,
        category,
      };

      onAddItem(item);
      setName("");
      setCategory("Produce");
      setQuantity(1);
    } else {
      alert("Item name is required.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-lg shadow-md max-w-md"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        className="w-full px-4 py-2 border rounded-lg text-gray-800 bg-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg">
        <button
          type="button"
          onClick={handleDecrement}
          className="px-2 py-1 bg-gray-300 rounded-full hover:bg-gray-400 active:bg-gray-500"
        >
          -
        </button>
        <span className="px-2 text-lg font-semibold text-gray-800">{quantity}</span>
        <button
          type="button"
          onClick={handleIncrement}
          className="px-2 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 active:bg-blue-700"
        >
          +
        </button>
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 w-full border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        +
      </button>
    </form>
  );
}
