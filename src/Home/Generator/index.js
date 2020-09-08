import React from 'react';
import './style.css';
const backendurl = "https://www.whoknows.com";

function generateRandomRecipe () {

}

function generateWeekMenu () {

}

function printShoppingList () {

}

const HomeGenerator = () => {
    return(
        <div className = "generator-div">
            <div>
                <h2>What would you like to do today?</h2>
                <button onClick={generateRandomRecipe}>Generate Random Recipe</button>
                <button onClick={generateWeekMenu}>Generate Week Menu</button>
                <button onClick={printShoppingList}>Print Shopping List</button>
                <input type="text" disabled></input>
            </div>      
        </div>
    )
}

export default HomeGenerator;