import React, { useState } from "react";
import Cards from "./Cards";


const products = [
  {
    name: "Azure Comfort Sofa",
    price: "R 4,000.00",
    dimensions: "220 cm (L) x 90 cm (W) x 80 cm (H)",
    bestSelling: 4,
  },
  {
    name: "Rustic Charm Coffee Table",
    price: "R 2,300.00",
    dimensions: "120 cm (L) x 60 cm (W) x 40 cm (H)",
    bestSelling: 3,
  },
  {
    name: "Lunar Glow Nightstand",
    price: "R 2,200.00",
    dimensions: "50 cm (L) x 40 cm (W) x 55 cm (H)",
    bestSelling: 2,
  },
  {
    name: "Willow Breeze Bookshelf",
    price: "R 4,200.00",
    dimensions: "180 cm (H) x 80 cm (W) x 35 cm (D)",
    bestSelling: 4,
  },
  {
    name: "Pebble Grove Dining Table",
    price: "R 2,800.00",
    dimensions: "10 cm (Diameter) x 75 cm (H)",
    bestSelling: 5,
  },
  {
    name: "Celeste Wingback Chair",
    price: "R 2,000.00",
    dimensions: "180 cm (L) x 45 cm (W) x 50 cm (H)",
    bestSelling: 3,
  },
  {
    name: "Golden Ember Media Console",
    price: "R 2,000.00",
    dimensions: "180 cm (L) x 45 cm (W) x 50 cm (H)",
    bestSelling: 2,
  },
  {
    name: "Harbor Light Desk",
    price: "R 9,000.00",
    dimensions: "120 cm (L) x 60 cm (W) x 75 cm (H)",
    bestSelling: 1,
  },
  {
    name: "Aurora Velvet Ottoman",
    price: "R 9,700.00",
    dimensions: "50 cm (Diameter) x 40 cm (H)",
    bestSelling: 5,
  },
  {
    name: "Seaside Drift Dining Bench",
    price: "R 8,200.00",
    dimensions: "140 cm (L) x 35 cm (W) x 45 cm (H)",
    bestSelling: 4,
  },
  {
    name: "Eclipse Glass Console Table",
    price: "R 9,000.00",
    dimensions: "120 cm (L) x 40 cm (W) x 75 cm (H)",
    bestSelling: 3,
  },
  {
    name: "Frosted Pearl Bed Frame",
    price: "R 6,000.00",
    dimensions: "210 cm (L) x 160 cm (W) x 120 cm (H)",
    bestSelling: 2,
  },
  {
    name: "Velvet Serenity",
    price: "R 2,000.00",
    dimensions: "220 cm (L) x 90 cm (W) x 80 cm (H)",
    bestSelling: 3,
  },
  {
    name: "Oakwood Haven",
    price: "R 2,400.00",
    dimensions: "220 cm (L) x 90 cm (W) x 80 cm (H)",
    bestSelling: 4,
  },
  {
    name: "Skyline Lounge",
    price: "R 6,400.00",
    dimensions: "220 cm (L) x 90 cm (W) x 80 cm (H)",
    bestSelling: 5,
  },
  {
    name: "Driftwood Recliner",
    price: "R 2,330.00",
    dimensions: "220 cm (L) x 90 cm (W) x 80 cm (H)",
    bestSelling: 1,
  },
  {
    name: "Horizon Sway",
    price: "R 1,200.00",
    dimensions: "220 cm (L) x 90 cm (W) x 80 cm (H)",
    bestSelling: 2,
  },
  {
    name: "Emberstone Throne",
    price: "R 5,700.00",
    dimensions: "220 cm (L) x 90 cm (W) x 80 cm (H)",
    bestSelling: 3,
  },
];

export default function Filter() {
  const [sortProduct, setSortProduct] = useState(products);

  const handleSort = (criteria) => {
    const sortedProducts = [...sortProduct];
    if (criteria === "price") {
      sortedProducts.sort(
        (a, b) =>
          parseFloat(a.price.replace(/[^0-9.-]+/g, "")) -
          parseFloat(b.price.replace(/[^0-9.-]+/g, ""))
      );
    } else if (criteria === "name") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    setSortProduct(sortedProducts);
  };

  return (
    <div className="filter">
      <button onClick={() => handleSort("price")}>Sort by Price</button>
      <button onClick={() => handleSort("name")}>Sort by Name</button>
      <div className="products-list">
        {sortProduct.map((product, index) => (
          <Cards
            key={index}
            name={product.name}
            dimensions={product.dimensions}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

/*

import React from "react";

export default function Filter({ onFilterChange }) {
  return (
    <div className="filter">
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" onChange={(e) => onFilterChange(e.target.value)}>
        <option value="default">Default</option>
        <option value="price">Price (Low to High)</option>
        <option value="name">Name (A-Z)</option>
      </select>
    </div>
  );
}

import React, { useState } from "react";
import "../Components/Cards.css";
import "../Components/Store.css";
import Filter from "./Filter";
import Cards from "./Cards";
import pic1 from "../img/store/pic1.jpg";
import pic2 from "../img/store/pic2.jpg";
// Import other images...

const productList = [
  { name: "Azure Comfort Sofa", picture: pic1, price: 4000 },
  { name: "Rustic Charm Coffee Table", picture: pic2, price: 2300 },
  // Add other products...
];

export default function Store() {
  const [filter, setFilter] = useState("default");
  const [products, setProducts] = useState(productList);

  const handleFilterChange = (value) => {
    setFilter(value);
    let sortedProducts = [...products];

    if (value === "price") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "name") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sortedProducts = productList; // Reset to default order
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="products">
      <h2>PRODUCTS</h2>
      <Filter onFilterChange={handleFilterChange} />
      <div className="cards-product-row">
        {products.map((product, index) => (
          <Cards
            key={index}
            name={product.name}
            picture={product.picture}
            description={product.description}
            dimensions={product.dimensions}
            price={`R ${product.price.toLocaleString()}`}
          />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import "./Cards.css";

export default function Cards({ name, picture, description, dimensions, price }) {
  return (
    <div className="card">
      <img src={picture} alt={name} className="card-image" />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{dimensions}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
*/