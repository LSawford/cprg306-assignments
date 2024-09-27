"use client";

import { useState } from "react";

export default function SimpleCounter() {

  
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    
    const decrement = () => {
        setCount(count - 1);
    }
    
    return (
        <main>
        <h1>Simple Counter</h1>
        <p>Count: {count} </p>
        <button onClick={increment}>Increment </button>
        <button onClick={decrement}>Decrement</button>
        </main>
    );
}