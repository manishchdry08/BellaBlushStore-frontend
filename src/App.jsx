import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";   // ✅ new
import Profile from "./pages/Profile";     // ✅ new
import AdminDashboard from "./pages/AdminDashboard"; // ✅ admin dashboard

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar onSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/wishlist" element={<Wishlist />} />   {/* ✅ new */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/profile" element={<Profile />} />     {/* ✅ new */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* ✅ admin dashboard */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
