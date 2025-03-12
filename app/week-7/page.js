"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page(){

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    return (<main><h1 className="text-2xl font-bold p-2">Shopping List</h1><NewItem onAddItem={handleAddItem}/><ItemList items={items}
    /></main>);
}