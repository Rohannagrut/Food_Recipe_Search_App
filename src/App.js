import React, { useEffect, useState } from 'react'
import './App.css';
import Recipie from './Recipe';

const App = () => {
  const APP_ID = '98971ae6';
  const APP_KEY = "70e016dc774c9d69b8339f4284881240"


  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState(' ');
  const [query, setQuery] = useState('chicken');


  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);

  }


  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch(' ');
  }


  return (
    <div className='App'>

     <title className='tic'>This a Food Recipe Searching App </title>
      <form onSubmit={getSearch} className='search-form'> 
      <h4>Search Recipe </h4>

        <input className='search-bar' type="text" value={search} onChange={updateSearch} />
        <button
          className='search-button'
          type='submit'>
          Search
        </button>
      </form>
      <div className='recipies'>


        {recipies.map(recipe => (
          <Recipie
            key={recipe.recipe.label}
            title={recipe.recipe.label} calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
