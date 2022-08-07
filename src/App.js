import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CollectionPage from './pages/collection-page/collection-page.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { GlobalStyle } from './global.styles';

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState(null);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartHidden, setCartHidden] = React.useState(true);

  const toggleCartHidden = () => {
      setCartHidden(!cartHidden);
  }

  const handleChangeUser = (user) => {
    if (user === null) {
      setCartHidden(true);
      setCartItems([]);
    }
    setCurrentUser(user);
    navigate('/');
  }

  const handleAddItem = (item) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === item.id
    )

    let tempCartItems;

    if(existingCartItem){
      tempCartItems = cartItems.map(cartItem =>
        cartItem.id === item.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem)
    }
    else
    {
      tempCartItems = [...cartItems, {...item, quantity: 1}];
    }

    setCartItems(tempCartItems);
  }

  const handleRemoveItem = (item) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === item.id
    )

    let tempCartItems;

    if(existingCartItem.quantity === 1){
      tempCartItems = cartItems.filter(cartItem => cartItem.id !== item.id)
    }
    else
    {
      tempCartItems = cartItems.map(cartItem =>
        cartItem.id === item.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem)
    }

    setCartItems(tempCartItems);
  }

  const handleClearItem = (item) => {
      let tempCartItems = cartItems.filter(cartItem => cartItem.id !== item.id)
      setCartItems(tempCartItems);
    }

  return(
    <div>
      <GlobalStyle />
      <Header currentUser={currentUser} cartItems={cartItems} 
        cartHidden={cartHidden} toggleCartHidden={toggleCartHidden}
        handleChangeUser={handleChangeUser}
      />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="shop" element={<ShopPage handleAddItem={handleAddItem} />} />
        <Route path="shop/:categoryId" element={<CollectionPage handleAddItem={handleAddItem} />} />
        <Route path="signin" element={<SignInAndSignUp handleChangeUser={handleChangeUser} />} />
        <Route 
          path="checkout" 
          element=
          {
            <CheckoutPage 
              cartItems={cartItems} 
              handleClearItem={handleClearItem}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem} 
            />
          } 
        />
      </Routes>
    </div>
  )
}

export default App;
