import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import useCart from '../hooks/useCart'

export default function Checkout(){
  const {cart, clear} = useCart()
  const [form, setForm] = useState({name:'',email:'',phone:'',address:'',city:'',state:'',pincode:''})
  const navigate = useNavigate()
  const subtotal = cart.reduce((s,i)=> s + i.price*i.qty,0)
  const handlePlace = ()=>{
    // in a full app we'd send order to backend. For now, clear cart and go to confirmation with state
    const order = {number: 'ORD'+Math.floor(Math.random()*90000+10000), subtotal}
    clear()
    navigate('/confirmation',{state:order})
  }
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:16}}>
      <div style={{background:'white',padding:12,borderRadius:8}}>
        <h3>Customer details</h3>
        <div style={{display:'grid',gap:8}}>
          <input placeholder='Full name' value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          <input placeholder='Email' value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          <input placeholder='Contact number' value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
          <input placeholder='Street address' value={form.address} onChange={e=>setForm({...form,address:e.target.value})} />
          <div style={{display:'flex',gap:8}}>
            <input placeholder='City' value={form.city} onChange={e=>setForm({...form,city:e.target.value})} />
            <input placeholder='State' value={form.state} onChange={e=>setForm({...form,state:e.target.value})} />
            <input placeholder='Pincode' value={form.pincode} onChange={e=>setForm({...form,pincode:e.target.value})} />
          </div>
        </div>
      </div>
      <aside className='cart-panel'>
        <h3>Order summary</h3>
        <div>Items: {cart.length}</div>
        <div style={{marginTop:8,display:'flex',justifyContent:'space-between'}}>
          <div>Subtotal</div><div>₹ {subtotal}</div>
        </div>
        <div style={{marginTop:12}}>
          <h4>Payment method</h4>
          <label><input type='radio' name='pay'/> UPI</label><br/>
          <label><input type='radio' name='pay'/> Credit/Debit card</label><br/>
          <label><input type='radio' name='pay'/> Cash on delivery</label>
        </div>
        <button className='btn' style={{marginTop:12}} onClick={handlePlace}>Place order</button>
      </aside>
    </div>
  )
}
