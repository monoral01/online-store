import React from 'react';
import { CartItem } from '../cartitem/CartItem';
import { Button, Grid, Typography } from '@mui/material';
import cl from './Cart.module.css';
export const Cart = ({
  removeCartItem,
  clearCart,
  cartItems,
  increaseCartItem,
  decreaseCartItem,
}) => {
  const getItemsTotalCost = () => {
    return cartItems.reduce((sum, el) => sum + el.count * el.cost, 0);
  };
  const printPurchaseMessage = () => {
    clearCart();
    alert(`Вы совершили покупку на ${getItemsTotalCost()} ₽!`);
  };
  if (cartItems.length === 0) {
    return (
      <div className={cl.cart}>
        <Typography variant="h6" className={cl.text}>
          Корзина пуста. Для покупки добавьте элементы из каталога.
        </Typography>
      </div>
    );
  }
  return (
    <div className={cl.cart}>
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
            <Typography className={cl.total_cost}>
              Всего: {getItemsTotalCost()} ₽
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={() => printPurchaseMessage()} variant="contained">
              Купить
            </Button>

            <Button onClick={() => clearCart()} variant="text">
              Очистить корзину
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
