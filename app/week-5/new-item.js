"use client";

import { useState } from "react";


export default function NewItem(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    
    const increment = () => {
        if(quantity+1 < 21 ){
            setQuantity(quantity + 1);
        };
    };

    const decrement = () => {
        if(quantity-1 > 0){
            setQuantity(quantity - 1);
        };
    };

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

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
                className="border p-2 w-72 rounded-md mt-3 ml-7"
                ></input>
            </div>
            
            <div className="ml-4 mt-2 mb-2 flex">
                <div className="w-30 bg-white flex">
                    <p className="p-3 text-black text-2xl text-center font-bold">{quantity}</p>
                    <button type="button" className="font-bold text-lg w-12 m-2 rounded bg-red-500 disabled:bg-gray-300" disabled={quantity === 1 ? true : false} onClick={decrement}>-</button>    
                    <button type="button" className="font-bold text-lg w-12 m-2 rounded bg-green-500 disabled:bg-gray-300" disabled={quantity === 20 ? true : false} onClick={increment}>+</button>    
                </div>
                <select value={category} onChange={(e) => setCategory(e.target.value)}
                    className="ml-2 border rounded-md w-32">
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <button type="submit" className="bg-blue-400 text-white ml-7 p-2 rounded-md w-72">Add Item</button>
            </div>
        </form>
    )
}
