import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// 👇added spread operater and set method here
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log("====================================");
console.log(allCategories);
console.log("====================================");
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    let newItems = items.filter((item) => item.category === category);
    return setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          filterItems={filterItems}
          categories={categories}
        ></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
