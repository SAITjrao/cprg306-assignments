"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
    const data = await response.json();
    return data.meals;
    } catch (error) {
        console.error("Error fetching meal ideas: ", error);
        return [];
    }
}

export default function MealIdeas(ingredient) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async() => {
        if (ingredient) {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        } else {
            setMeals([]);  
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2>Meal ideas with {ingredient}</h2>
            {meals.length > 0 ? (
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <img
                              src={meal.strMealThumb}
                              alt={meal.strMeal}
                              style={{width: "100px", height: "auto"}}
                            />
                        <p>{meal.strMeal}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No meal ideas found for {ingredient}.</p>
            )}
        </div>
    )

}