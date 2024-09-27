"use client";

import { useState } from "react";
import NewItem from './new-item';

export default function QuantityPage() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if(quantity < 20){
            setQuantity(quantity + 1);}
        
    }
    
    const decrement = () => {
        if(quantity >= 1){
        setQuantity(quantity - 1);}
    }
    
    return (
        <NewItem quantity={quantity} decrement={decrement} increment={increment}/>
    );
}   