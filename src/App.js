import logo from './logo.svg';
import './App.css';
import React from 'react';
import FilteredList from './FilteredList.js'


function App() {

    const RecipeList = [
        {name: "Avocado Toast", difficultlevel: "Easy", cooktime: 15, image: 'https://i.ibb.co/Z8jrDfH/avotoast.jpg', type: "Breakfast"},
        {name: "Bagel", difficultlevel: "Medium", cooktime: 45, image: 'https://i.ibb.co/qjVNShq/IMG-8785.jpg', type: "Breakfast"},
{name: "Donuts", difficultlevel:"Hard", cooktime: 55, image: 'https://i.ibb.co/fvMgNWm/IMG-8786.jpg', type: "Dessert"},
{name: "French Toast", difficultlevel:"Easy", cooktime: 20, image: 'https://i.ibb.co/kDyk1LN/IMG-8788.jpg', type: "Breakfast"},
{name: "Gnocchi", difficultlevel:"Hard", cooktime:120, image: 'https://i.ibb.co/4gXH6c8/IMG-8783.jpg', type: "Dinner"},
{name: "Pancakes", difficultlevel:"Easy", cooktime:20, image: 'https://i.ibb.co/254V6QL/IMG-8787.jpg', type: "Breakfast"},
{name: "Pizza", difficultlevel:"Medium", cooktime:45, image:'https://i.ibb.co/ByN92X6/IMG-8782.jpg', type: "Dinner"},
{name: "Chocolate Cake", difficultlevel:"Hard", cooktime:60, image: 'https://i.ibb.co/3FBdjvF/IMG-8798.jpg', type:"Dessert"},
{name: "Spinach Salad", difficultlevel:"Easy", cooktime:15, image: 'https://i.ibb.co/bKG4M5y/IMG-8800.jpg', type: "Dinner"},
{name: "Berry Oatmeal", difficultlevel:"Easy", cooktime:15, image: 'https://i.ibb.co/ZSSG9pq/IMG-8801.jpg', type: "Breakfast"},
{name: "Carrot Cake", difficultlevel:"Hard", cooktime:65, image: 'https://i.ibb.co/HH4nF35/IMG-8799.jpg', type:"Dessert"},
{name: "Sugar Waffles", difficultlevel:"Medium", cooktime:35, image: 'https://i.ibb.co/HFhVRK6/IMG-8802.jpg', type: "Breakfast"},
{name: "Grilled Salmon", difficultlevel:"Medium", cooktime:40, image: 'https://i.ibb.co/Rcpnkjk/IMG-8803.jpg', type: "Dinner"}

    ]



    return (

        <FilteredList list= {RecipeList} />
    );
}

export default App;
