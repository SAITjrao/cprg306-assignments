"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({items, onItemSelect}){
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a,b) => {
        if (sortBy === "name") {
            return a.name < b.name ? -1 : 1
        } else if (sortBy === "category") {
            return a.category < b.category ? -1 : 1
        } else
        return 0;
    })

    return (
        <main>
          <div className="flex flex-row items-center mb-5 ml-1">
            <h2 className="pl-3">Sort By: </h2>
            <button
              className={`border rounded-sm ml-2 p-2 ${
                sortBy === "name" ? "bg-blue-500 text-white" : ""
              }`}
              value="name"
              onClick={(e) => setSortBy(e.target.value)}
            >
              Name
            </button>
            <button
              className={`border rounded-sm ml-2 p-2 ${
                sortBy === "category" ? "bg-blue-500 text-white" : ""
              }`}
              value="category"
              onClick={(e) => setSortBy(e.target.value)}
            >
              Category
            </button>
          </div>
          <ul>
            {sortedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)}
              />
            ))}
          </ul>
        </main>
      ); 
}