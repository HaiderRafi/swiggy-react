import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from './EmptyCart'
import { clearCart } from '../utils/redux/cartSlice'

const Cart = () => {
    let cartItems=useSelector((store)=>store.cart.items)
    let dispatch=useDispatch();

    function clearCartSlice(){
        dispatch(clearCart())
    }

    if(cartItems.length===0){
        return <EmptyCart/>
    }
  return (
    <div className=' flex w-full h-full'>
        <div>
            {
                cartItems.map((data)=>{
                    return <h1>{data.name}- RS {data.defaultPrice||data.price / 100}</h1>
                })
            }

            <button className='p-2 m-2 bg-gray-800 text-white' onClick={()=>clearCartSlice()} >Clear Cart</button>
            


        </div>
        
    </div>
  )
}

export default Cart