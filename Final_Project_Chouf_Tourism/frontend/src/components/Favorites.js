// Favorites.js
import React from "react";

function Favorites({ favoriteCategories }) {
  return (
    <div>
      <h2>Favorite Categories</h2>
      <ul>
        {favoriteCategories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
