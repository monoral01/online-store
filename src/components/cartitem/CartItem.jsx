import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import cl from './CartItem.module.css';
export function CartItem({
  index,
  removeCartItem,
  decreaseCartItem,
  increaseCartItem,
  item,
}) {
  const setNewItemState = () => {
    if (item.count === 1) {
      return removeCartItem(index);
    }
    return decreaseCartItem(index);
  };
  return (
    <Grid container p={1}>
      <Grid item>
        {item.title} : {item.cost * item.count} ₽
        <div className={cl.cart_item}>
          <Grid container spacing={1}>
            <Button variant="outlined" onClick={() => setNewItemState()}>
              -
            </Button>
            <Typography>{item.count}</Typography>
            <Button variant="outlined" onClick={() => increaseCartItem(index)}>
              +
            </Button>
            <Button variant="text" onClick={() => removeCartItem(index)}>
              Убрать
            </Button>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
