import React, { useContext } from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../Store/CartContext'

const Cart = (props) => {
  const ctx = useContext(CartContext)
  // ctx.items.map
  let total = 0
  ctx.items.forEach((item) => {
    total = total + Number(item.price) * Number(item.quantity)
  })
  total = total.toFixed(2)

  const cartItems = (
    <ul className={`${classes['cart-items']} ${ctx.items.length === 0 ? classes['empty-cart'] : ''}`}>
      {ctx.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        ctx.items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price}  ({item.quantity}x)</p>
            <div className={classes.actions}>
              <button className={classes['button--add']} onClick={() => ctx.addItem(item)}>+</button>
              <button className={classes['button--remove']} onClick={() => ctx.deleteItem(item.id)}>-</button>
            </div>
            <hr />
          </li>
        ))
      )}

    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      <div>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{total}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;