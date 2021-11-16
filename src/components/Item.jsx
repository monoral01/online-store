import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { blue } from '@mui/material/colors';
export const Item = ({ createCartItem, item, increaseCartItem }) => {
  const pushItemToCart = () => {
    createCartItem(item);
  };
  return (
    <Box border={1} borderColor={blue} p={2}>
      <Grid>
        <Typography>{item.title}</Typography>
        <Typography>Цена: {item.cost} ₽</Typography>
      </Grid>
      <Grid>
        <Button variant="outlined" onClick={pushItemToCart}>
          Добавить в корзину
        </Button>
      </Grid>
    </Box>
  );
};
