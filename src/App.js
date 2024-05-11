import React, { useState, useContext } from 'react'

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartContextProvider from './Store/CartContextProvider';
import CartContext from './Store/CartContext';



function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const ctx=useContext(CartContext)
  
  const showCartHandler = () => {
    setCartIsShown(true)
  }
  
  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onClick={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartContextProvider>
  );
}

export default App;
