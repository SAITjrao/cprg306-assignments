"use client";

import { useState } from "react";


export default function NewItem(){
    const [quantity, setQuantity] = useState(1);

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

    return (
        <div className="m-6 w-30 bg-white flex">
            <p className="p-3 text-black text-2xl text-center font-bold">{quantity}</p>
            <button className="font-bold text-lg w-12 m-2 rounded bg-red-500 disabled:bg-gray-300" disabled={quantity === 1 ? true : false} onClick={decrement}>-</button>    
            <button className="font-bold text-lg w-12 m-2 rounded bg-green-500 disabled:bg-gray-300" disabled={quantity === 20 ? true : false} onClick={increment}>+</button>    
        </div>
    )
}
