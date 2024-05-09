import React, { useState } from 'react'

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';



function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  
  const showCartHandler = () => {
    setCartIsShown(true)
  }
  
  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onClick={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
