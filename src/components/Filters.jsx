import React, { useState } from "react";

export default function Filters({ onFilterChange, onReset }) {
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState("");

  // handle category selection (multiple)
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCategories([...categories, value]);
    } else {
      setCategories(categories.filter((c) => c !== value));
    }
  };

  // apply filters
  const handleApply = () => {
    onFilterChange({ categories, priceRange, rating });
  };

  return (
    <div style={{ padding: "1rem", borderLeft: "1px solid #ddd" }}>
      <div className="filter-group">
        <h4>Categories</h4>
        <label>
          <input type="checkbox" value="Lipsticks" onChange={handleCategoryChange} /> Lipsticks
        </label>
        <br />
        <label>
          <input type="checkbox" value="Foundations" onChange={handleCategoryChange} /> Foundations
        </label>
        <br />
        <label>
          <input type="checkbox" value="Eyeliner" onChange={handleCategoryChange} /> Eyeliner
        </label>
        <br />
        <label>
          <input type="checkbox" value="Skincare" onChange={handleCategoryChange} /> Skincare
        </label>
      </div>

      <div className="filter-group">
        <h4>Price Range</h4>
        <label>
          <input type="radio" name="pr" value="100-500" onChange={(e) => setPriceRange(e.target.value)} /> 100-500
        </label>
        <br />
        <label>
          <input type="radio" name="pr" value="500-1000" onChange={(e) => setPriceRange(e.target.value)} /> 500-1000
        </label>
        <br />
        <label>
          <input type="radio" name="pr" value="above-1000" onChange={(e) => setPriceRange(e.target.value)} /> above 1000
        </label>
      </div>

      <div className="filter-group">
        <h4>Ratings</h4>
        <label>
          <input type="radio" name="rating" value="4" onChange={(e) => setRating(e.target.value)} /> 4★ & above
        </label>
        <br />
        <label>
          <input type="radio" name="rating" value="3" onChange={(e) => setRating(e.target.value)} /> 3★ & above
        </label>
      </div>

      <div style={{ marginTop: 10 }}>
        <button className="btn" onClick={handleApply}>Apply</button>
        <button className="btn ghost" style={{ marginLeft: 8 }} onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
