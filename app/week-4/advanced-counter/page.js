"use client";

import { useState } from "react";
import AdvCounter from "./advanced-counter";


export default function AdvCounterPage() {

    const [count, setCount] = useState(0);

    const increment = () => {
        if(count < 10){
            setCount(count + 1);}
        
    }
    
    const decrement = () => {
        setCount(count - 1);
    }

    const resetCounter = () => {
        setCount(0);
    }

    return (
        <main className="p-5">
            <AdvCounter currentCount={count} increment={increment} decrement={decrement} resetCounter={resetCounter}/>
        </main>
    );
}