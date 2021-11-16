import React, { useState } from 'react';
import { Item } from './components/Item';
import { Cart } from './components/Cart';
import { items } from './data/items';
import { Grid, Paper, AppBar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
const StyledItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
}));
function App() {
  const [cartItems, setCartItems] = useState([]);
  // удаление из корзины
  const removeCartItem = (cartItemBegin, numberOfCartItems) => {
    const cartItemsCopy = [...cartItems];
    cartItemsCopy.splice(cartItemBegin, numberOfCartItems);
    setCartItems(cartItemsCopy);
  };
  const createCartItem = (newCartItem) =>
    setCartItems([...cartItems, { ...newCartItem, count: 1 }]);
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
    <Box display={'flex'} flexGrow={1} spacing={2}>
      <Box width={'75%'}>
        <AppBar position="static" p={2}>
          <Typography variant="h6" textAlign={'center'} flexGrow={1}>
            Каталог
          </Typography>
        </AppBar>
        <Grid containter spacing={2} xs={12} mt={2}>
          {items.map((item, index) => (
            <Grid item xs={3}>
              <StyledItem>
                <Item
                  key={index}
                  createCartItem={createCartItem}
                  increaseCartItem={increaseCartItem}
                  item={item}
                />
              </StyledItem>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider mr={2} ml={2} orientation="vertical" flexItem></Divider>
      <Box width={'25%'}>
        <AppBar position="static" p={2}>
          <Typography variant="h6" textAlign={'center'} flexGrow={1}>
            Корзина
          </Typography>
        </AppBar>
        <Cart
          removeCartItem={removeCartItem}
          cartItems={cartItems}
          increaseCartItem={increaseCartItem}
          decreaseCartItem={decreaseCartItem}
        />
      </Box>
    </Box>
  );
}

export default App;
