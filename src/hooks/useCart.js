import { useState, useEffect } from 'react'

const KEY = 'glowcart_cart_v1'

export default function useCart(){ 
  const [cart,setCart] = useState(()=>{
    try{ const raw = localStorage.getItem(KEY); return raw? JSON.parse(raw):[] }catch(e){return []}
  })
  useEffect(()=>{ localStorage.setItem(KEY, JSON.stringify(cart)) },[cart])
  const add = (p)=> setCart(prev=>{
    const exists = prev.find(x=>x.id===p.id)
    if(exists) return prev.map(x=> x.id===p.id? {...x, qty: x.qty+1}:x)
    return [...prev, {...p, qty:1}]
  })
  const remove = (id)=> setCart(prev=> prev.filter(x=> x.id!==id))
  const clear = ()=> setCart([])
  const updateQty = (id,qty)=> setCart(prev=> prev.map(x=> x.id===id? {...x,qty}:x))
  return {cart, add, remove, clear, updateQty}
}
