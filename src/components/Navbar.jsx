import { NavLink } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import useCart from "../hooks/useCart";

export default function Navbar({ onSearch }) {
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="brand brand-column">
        <NavLink to="/" className="logo">
          Bella Blush
        </NavLink>
        {/* ✅ New tagline below logo */}
        <span className="tagline">Your Beauty, Our Passion</span>
      </div>

      {/* Search */}
      <div className="search">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Actions with active highlight */}
      <div className="actions">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Home
        </NavLink>
        <NavLink to="/wishlist" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Wishlist ({wishlist.length})
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Cart ({cart.length})
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Profile
        </NavLink>
      </div>
    </header>
  );
}

Navbar.defaultProps = {
  onSearch: () => {}
};
