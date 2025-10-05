import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Confirmation(){
  const loc = useLocation()
  const order = loc.state || {}
  return (
    <div style={{background:'white',padding:20,borderRadius:8}}>
      <h2>Thank You! Your Order is Confirmed</h2>
      <p>We've sent order details to your email.</p>
      <div style={{marginTop:12}}><strong>Order number: </strong>{order.number || '—'}</div>
      <div><strong>Estimate delivery date: </strong>{new Date(Date.now()+5*24*3600*1000).toLocaleDateString()}</div>
      <div style={{marginTop:12}}><Link to='/' className='btn'>Continue shopping</Link></div>
    </div>
  )
}
