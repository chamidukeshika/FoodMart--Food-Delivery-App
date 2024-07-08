import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItem, food_list, removeCartItem, getTotalCartAmount,url } = useContext(StoreContext);
  
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();

  return (
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
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <img onClick={() => removeCartItem(item._id)} src={assets.cross_icon} className='cross' alt="" />

                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} disabled={totalAmount === 0}>PROCEED TO CHECKOUT</button>
          {totalAmount === 0 && <p className="error-message">Your cart is empty. Add items to proceed to checkout.</p>}
        </div>
        <div className="cart-promocode">
          <div>
            <p>Enter your promo-code here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Enter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
