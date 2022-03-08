import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meal/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() { 
  const [cartItemShown, setCartIsShown]=useState(false);

  const showCartHandler =()=>{ 
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartItemShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}  />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;