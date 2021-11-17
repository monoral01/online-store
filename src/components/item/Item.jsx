import React from 'react';
import { Button, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import cl from './Item.module.css';
export const Item = ({ createCartItem, item }) => {
  const pushItemToCart = () => {
    createCartItem(item);
  };
  return (
    <div className={cl.item}>
      <Grid>
        <Typography>{item.title}</Typography>
        <Typography>Цена: {item.cost} ₽</Typography>
      </Grid>
      <Grid>
        <Button variant="outlined" onClick={pushItemToCart}>
          Добавить в корзину
        </Button>
      </Grid>
    </div>
  );
};
