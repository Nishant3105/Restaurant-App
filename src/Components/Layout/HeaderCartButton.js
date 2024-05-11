import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../Store/CartContext'

const HeaderCartButton = (props) => {
  const ctx=useContext(CartContext)
  const noOfCartItems = ctx.items.reduce((acc,curr)=>{return acc+Number(curr.quantity)},0)
  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton