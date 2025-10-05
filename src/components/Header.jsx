import React from 'react'
import { Link } from 'react-router-dom'
import useCart from '../hooks/useCart'

export default function Header(){
  const {cart} = useCart()
  return (
    <header className='header'>
      <div className='brand'>
        <div className='logo'>Bella Blush</div>
        <div style={{fontSize:13,color:'#666'}}>Your Beauty, Our Passion</div>
      </div>
      <div className='search'><input placeholder='Search products, brands...' /></div>
      <div className='actions'>
        <Link to='/' className='btn ghost'>Categories</Link>
        <Link to='/cart' className='btn'>Cart ({cart.length})</Link>
      </div>
    </header>
  )
}
