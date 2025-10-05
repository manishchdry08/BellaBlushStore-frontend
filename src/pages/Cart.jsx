import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

export default function Cart() {
  const { cart, remove, updateQty } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  if (cart.length === 0)
    return (
      <div className="cart-panel">
        <h3>Your cart is empty</h3>
        <Link to="/" className="btn ghost">
          Continue shopping
        </Link>
      </div>
    );

  return (
    <div className="cart-container">
      <h2>Shopping cart</h2>

      {/* ✅ Cart Items */}
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
  <img src={item.img} alt={item.title} />
  <div className="cart-item-details">
    <div className="title">{item.title}</div>
    <div className="price">₹ {item.price} x {item.qty}</div>
    <div className="cart-actions">
      <button onClick={()=>updateQty(item.id, Math.max(1,item.qty-1))} className="btn ghost">-</button>
      <button onClick={()=>updateQty(item.id, item.qty+1)} className="btn">+</button>
      <button onClick={()=>remove(item.id)} className="btn ghost">Remove</button>
    </div>
  </div>
</div>

        ))}
      </div>

      {/* ✅ Order Summary */}
      <div className="order-summary">
        <h3>Order summary</h3>
        <div>
          <span>Subtotal:</span>
          <span>₹ {subtotal}</span>
        </div>
        <div>
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="total">
          <span>Total:</span>
          <span>₹ {subtotal}</span>
        </div>
        <button className="btn" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        <Link to="/" className="btn ghost" style={{ marginTop: "8px" }}>
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
