import React from 'react';
import './App.css';
import {Category} from "./Components/category";

function App() {
    const PRODUCTS_DATA = [
        {
            name: "drank",
            products: [
                {name: "cola", price: 2.0},
                {name: "water", price: 1.5},
                {name: "bier", price: 2.5, size: 25},
                {name: "bier", price: 2.5, size: 33},
                {name: "wijn", price: 2.0}]
        },
        {
            name: "eten",
            note: "een klein hapje voor de snelle honger",
            products: [
                {name: "chips", price: 7.0, note: "paprika of zout"},
                {name: "olijven", price: 12.0, note: "zwart en groen"},
                {name: "kaas", price: 12.0, note: "mix jonge en oude blokjes"},
                {name: "salami", price: 12.0},
                {name: "hamburger", price: 12.0, note: "niet na 22:00"},
                {name: "pizza", price: 12.0, note: "niet na 22:00"}
            ]
        }
    ];
    return (
        <div>
            <h1>Menu</h1>
            <div>{PRODUCTS_DATA.map((c) => <Category key={c.name} category={c}/>)}</div>
        </div>
    );
}


export default App;
