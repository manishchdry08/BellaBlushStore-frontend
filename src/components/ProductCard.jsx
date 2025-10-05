import React from "react";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({ p, onAdd }) {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const inWishlist = wishlist.some((item) => item.id === p.id);

  return (
    <div className="product">
      {/* ✅ Fixed Image Wrapper */}
      <div className="img-wrapper">
        <img src={p.img} alt={p.title} />
      </div>

      {/* ✅ Content */}
      <div className="product-content">
        <div className="title">{p.title}</div>
        <div style={{ fontSize: 13, color: "#666" }}>{p.reviews} reviews</div>
      </div>

      {/* ✅ Footer always at bottom */}
      <div className="product-footer">
        <div className="price">₹ {p.price}</div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button className="btn" onClick={() => onAdd(p)}>Add to cart</button>
          <button
            className={`btn ghost ${inWishlist ? "active" : ""}`}
            onClick={() =>
              inWishlist ? removeFromWishlist(p.id) : addToWishlist(p)
            }
          >
            {inWishlist ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
}
