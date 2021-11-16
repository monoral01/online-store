import React from 'react';
import { CartItem } from './CartItem';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
export const Cart = ({
  removeCartItem,
  cartItems,
  increaseCartItem,
  decreaseCartItem,
}) => {
  const getItemsTotalCost = () => {
    return cartItems.reduce((sum, el) => sum + el.count * el.cost, 0);
  };
  if (cartItems.length === 0) {
    return (
      <Box width={'100%'} mt={2}>
        <Typography variant="h6" textAlign={'center'} flexGrow={1}>
          Корзина пуста. Для покупки добавьте элементы из каталога.
        </Typography>
      </Box>
    );
  }
  return (
    <Box width={'100%'} ml={4}>
      <Grid container>
        <Grid item>
          {cartItems.map((item, index) => (
            <CartItem
              index={index}
              removeCartItem={removeCartItem}
              decreaseCartItem={decreaseCartItem}
              increaseCartItem={increaseCartItem}
              item={item}
              key={index}
            />
          ))}
        </Grid>
        <Grid container>
          <Grid item>
            <Typography mt={1} mr={4}>
              Всего: {getItemsTotalCost()} ₽
            </Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                removeCartItem(0, cartItems.length);
                alert(`Вы совершили покупку на ${getItemsTotalCost()} ₽!`);
              }}
              variant="contained"
            >
              Купить
            </Button>

            <Button
              onClick={() => removeCartItem(0, cartItems.length)}
              variant="text"
            >
              Очистить корзину
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
