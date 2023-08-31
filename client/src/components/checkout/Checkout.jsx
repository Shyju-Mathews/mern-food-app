import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './checkout.module.css'
import { emptyCart } from '../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const {products} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCheckout = () => {
    dispatch(emptyCart())
    navigate('/home')
  }

  let totalPrice = 0
  products.map((product) => totalPrice += (product.quantity * product.price))
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Your order is successful</h2>
        <p>Expect it in 1 hour</p>
        <span>Total Price: ${totalPrice}</span>
        <button onClick={handleCheckout}>Return to Home</button>
      </div>
    </div>
  )
}

export default Checkout