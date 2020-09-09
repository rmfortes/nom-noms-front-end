import React, { useState } from 'react';
import './style.css';
const backendurl = "https://www.whoknows.com";


//this function will hit a path that brings up a random recipe.
/*
It should be async so that it will say loading until it produces the recipe.
Speed is essential, so that after a short loopable animation the recipe should come up.
All methods to potentially speed up the button results should be explored.
*/



const HomeGenerator = () => {
    const [content, setContent] = useState("content not set");
    const generateRandomRecipe = () => {
        setContent("random recipe")
    }

    const generateWeekMenu = () => {
        setContent("random weeks recipe")
    }

    const printShoppingList = () => {
        setContent("recipe shopping list")
    }

    return (
        <div className="generator-div">
            <div className="generator-input-div">
                <h2>What would you like to do today?</h2>
                <ul>
                    <li>
                        <button onClick={generateRandomRecipe}>Generate Random Recipe</button>
                    </li>
                    <li>
                        <button onClick={generateWeekMenu}>Generate Week Menu</button>
                    </li>
                    <li>
                        <button onClick={printShoppingList}>Print Shopping List</button>
                    </li>
                </ul>



            </div>
            <div className="generator-output-div">
                <p className="content">{content}</p>
            </div>
        </div>
    )
}

export default HomeGenerator;