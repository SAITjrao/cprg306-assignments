"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page(){

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    const handleItemSelect = (item) => {
        // Clean up the item name by removing size, emojis, etc.
        const cleanedName = item.name
          .split(",")[0]
          .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '') 
          .trim();
        setSelectedItemName(cleanedName);
      };

      return (
        <main className="p-4">
          <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
          <div className="flex">
            <div className="flex-1 mr-4">
              <NewItem onAddItem={handleAddItem} />
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="flex-1">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
        </main>
      );
    
}