"use client";

import { useState } from "react";
import data from "./items.json";
import Item from "./item";

export default function ItemList(){
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...data].sort((a,b) => {
        if (sortBy === "name") {
            return a.name < b.name ? -1 : 1
        } else if (sortBy === "category") {
            return a.category < b.category ? -1 : 1
        } else
        return 0;
    })

    return(
    <main>
        <div>
            <h2>Sort By</h2>
            <button value="name" onClick={(e) => setSortBy(e.target.value)}>Name</button>
            <button value="category" onClick={(e) => setSortBy(e.target.value)}>Category</button>
        </div>
        <ul>
           {sortedItems.map((item) => (<li key={item.id}><Item name={item.name} quantity={item.quantity} category={item.category}/></li>))} 
        </ul>
    </main>)  
}

//array.map(function) return <li key={item.id}></li>