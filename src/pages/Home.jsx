import React, { useState, useEffect } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import useCart from "../hooks/useCart";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Home({ search }) {
  const { add } = useCart();
  const [filteredProducts, setFilteredProducts] = useState(shuffle(products));
  const [activeFilters, setActiveFilters] = useState({});

  const applyFilters = (filters, searchText) => {
    let result = products;

    // Category filter
    if (filters.categories && filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    // Price filter
    if (filters.priceRange) {
      if (filters.priceRange === "100-500") {
        result = result.filter((p) => p.price >= 100 && p.price <= 500);
      } else if (filters.priceRange === "500-1000") {
        result = result.filter((p) => p.price >= 500 && p.price <= 1000);
      } else if (filters.priceRange === "above-1000") {
        result = result.filter((p) => p.price > 1000);
      }
    }

    // Rating filter
    if (filters.rating) {
      if (filters.rating === "4") {
        result = result.filter((p) => p.reviews >= 100);
      } else if (filters.rating === "3") {
        result = result.filter((p) => p.reviews >= 50);
      }
    }

    // Search filter
    if (searchText && searchText.trim() !== "") {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchText.toLowerCase()) ||
          p.category.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredProducts(result);
  };

  // Run when search or filters change
  useEffect(() => {
    applyFilters(activeFilters, search);
  }, [search, activeFilters]);

  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
  };

  const handleReset = () => {
    setActiveFilters({});
    setFilteredProducts(shuffle(products));
  };

  return (
    <div className="container">
      {/* Products Section */}
      <section className="products-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <h2>Products</h2>
          <div>Showing {filteredProducts.length} items</div>
        </div>

        <div className="products">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} p={p} onAdd={add} />
          ))}
        </div>
      </section>

      {/* Filters on Right */}
      <aside className="sidebar">
        <Filters onFilterChange={handleFilterChange} onReset={handleReset} />
      </aside>
    </div>
  );
}
