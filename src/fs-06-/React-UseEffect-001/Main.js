import React from "react";
import { useEffect, useState } from "react";
import "./Main.css";
import Recipe from "./Recipe";

function Main() {
  const id = "bd51c388";
  const key = "7781e30e86d61a0706ba99513a57012a";
  const [apiData, setapiData] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState("");

  useEffect(() => {
    getrecipe();
  }, [query]);
  const getrecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`
    );
    const data = await response.json();
    setapiData(data.hits);
  };

  const updateresult = (e) => {
    setsearch(e.target.value);
  };

  const getresult = (e) => {
    e.preventDefault();
    setquery(search);
    setsearch("");
  };

  return (
    <div className="App">
      <div className="heading">
        <h1>Lazeez</h1>
      </div>
      <form className="form" onSubmit={getresult}>
        <input
          className="bar"
          type="text"
          value={search}
          onChange={updateresult}
          placeholder="Look up for something delicious.."
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="tagline-main">
        <p className="tagline">Recipes</p>
      </div>
      <div className="result">
        {apiData.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;