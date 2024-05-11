import React,{ useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = (props) => {
    const [items, setUpdatedItems] = useState([])

    const addItemHandler = item => {
        const existingItem = items.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
          const updatedItems = items.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: Number(cartItem.quantity) + 1 } : cartItem
          );
          setUpdatedItems(updatedItems);
        } else {
            setUpdatedItems([...items, item]);
        }
          console.log('inside app.js',items)
    }
  
    const removeItemHandler = id => {
        const existingItem = items.find((item) => item.id === id);
        if (existingItem && existingItem.quantity > 1) {
          const updatedItems = items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
          setUpdatedItems(updatedItems);
        } else if (existingItem) {
          // Remove the item from the cart if its quantity is 1
          const updatedItems = items.filter((item) => item.id !== id);
          setUpdatedItems(updatedItems);
        }
    }

    const Cart = {
        items: items,
        addItem: addItemHandler,
        deleteItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={Cart}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartContextProvider