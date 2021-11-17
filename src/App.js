import React, { useState } from 'react';
import { Item } from './components/item/Item';
import { Cart } from './components/cart/Cart';
import { items } from './constants/items';
import { Grid, AppBar, Typography } from '@mui/material';
import cl from './styles/App.module.css';
import Divider from '@mui/material/Divider';
function App() {
  const [cartItems, setCartItems] = useState([]);

  const removeCartItem = (cartItemIndex) => {
    const cartItemsCopy = [...cartItems];
    cartItemsCopy.splice(cartItemIndex, 1);
    setCartItems(cartItemsCopy);
  };

  const clearCart = () => {
    const cartItemsCopy = [...cartItems];
    cartItemsCopy.splice(0, cartItems.length);
    setCartItems(cartItemsCopy);
  };

  const createCartItem = (newCartItem) => {
    const newElement = { ...newCartItem, count: 1 };
    setCartItems([...cartItems, newElement]);
  };

  const increaseCartItem = (cartItemIndex) => {
    setCartItems(
      cartItems.map((el, index) => {
        if (cartItemIndex !== index) {
          return el;
        }
        return { ...el, count: el.count + 1 };
      })
    );
  };

  const decreaseCartItem = (cartItemIndex) => {
    setCartItems(
      cartItems.map((el, index) => {
        if (cartItemIndex !== index) {
          return el;
        }
        return { ...el, count: el.count - 1 };
      })
    );
  };

  return (
    <div className={cl.store}>
      <div className={cl.catalog}>
        <AppBar position="static" p={2}>
          <Typography variant="h6" className={cl.text}>
            Каталог
          </Typography>
        </AppBar>
        <Grid container spacing={2} xs={12} mt={2}>
          {items.map((item, index) => (
            <Grid item xs={3} m={2}>
              <Item key={index} createCartItem={createCartItem} item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Divider mr={2} ml={2} orientation="vertical" flexItem />
      <div className={cl.cart}>
        <AppBar position="static" p={2}>
          <Typography variant="h6" className={cl.text}>
            Корзина
          </Typography>
        </AppBar>
        <Cart
          removeCartItem={removeCartItem}
          clearCart={clearCart}
          cartItems={cartItems}
          increaseCartItem={increaseCartItem}
          decreaseCartItem={decreaseCartItem}
        />
      </div>
    </div>
  );
}

export default App;
