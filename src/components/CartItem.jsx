import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
export function CartItem({
  index,
  removeCartItem,
  decreaseCartItem,
  increaseCartItem,
  item,
}) {
  return (
    <Grid container display={'flex'} p={1}>
      <Grid item>
        {item.title} : {item.cost * item.count} ₽
        <Box mt={1} mb={1}>
          <Grid container spacing={1}>
            <Button
              variant="outlined"
              onClick={() => {
                if (item.count === 1) {
                  return removeCartItem(index, 1);
                }
                return decreaseCartItem(index);
              }}
            >
              -
            </Button>
            <Typography ml={2} mr={2}>
              {item.count}
            </Typography>
            <Button variant="outlined" onClick={() => increaseCartItem(index)}>
              +
            </Button>
            <Button variant="text" onClick={() => removeCartItem(index, 1)}>
              Убрать
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
