"use client";

import { useState } from "react";
import NewItem from "./new-item";

export default function Page(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    
    function handleSubmit(e){
        e.preventDefault;
        
        const item = {
            name,
            quantity,
            category
        }
    
        console.log(item);
        alert(`Item added: 
            \nName: ${name}
            \nQuantity: ${quantity}
            \nCategory: ${category}`);
    
        setName("");
        setQuantity(1);
        setCategory("produce");
    }
    

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
            <NewItem />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen Foods</option>
                <option value="canned">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>
            <button type="submit" onSubmit={handleSubmit}>Add Item</button>
    </form>
    )
}

