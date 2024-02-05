import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState([]);

  const handleDelete = (itemId) => {
    const updateItems = items.filter(item => item.id !== itemId);
    setItems(updateItems);
  };

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList />
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <item key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default App;
