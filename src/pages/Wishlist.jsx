import React from "react";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import useCart from "../hooks/useCart";

export default function Wishlist() {
  const { wishlist } = useWishlist();
  const { add } = useCart();

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="products-container">
          <div className="products">
            {wishlist.map((p) => (
              <ProductCard key={p.id} p={p} onAdd={add} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
