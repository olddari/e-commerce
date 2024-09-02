import React from 'react'
import './Cart.css'
import { navigate, useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />

        <div className="cart-items-title cart-items-item">
          <img src="./images/product2.png" alt="" />
          <p>adidas</p>
          <p>Price</p>
          <p>item.id</p>
          <p>Total Price</p>
          <p className='x'>x</p>
        </div>

        <hr />

        <div className="cart-items-title cart-items-item">
          <img src="./images/product2.png" alt="" />
          <p>adidas</p>
          <p>4.799 TL</p>
          <p>item.id</p>
          <p>4.799 TL</p>
          <p className='x'>x</p>
        </div>

        <hr />

      </div>
    </div>
    <div className="cart-bottom">
      <div className="cart-total">
        <h2>Cart Totals</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotaş</p>
            <p>{1}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>{1}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>{1}</b>
          </div>
        </div>
        <button onClick={()=>navigate('/PlaceOrder')}>PROCEED TO CHECKOUT</button>
      </div>
    </div>
    </div>
  )
}

export default PlaceOrder
