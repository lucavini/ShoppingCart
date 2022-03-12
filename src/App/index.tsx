/* eslint-disable no-return-await */
import React from 'react';
import { useQuery } from 'react-query';

// Components
import { LinearProgress, Grid } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import Item from '../Components/Item';

// Styles
import { Wrapper } from './styles';

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

async function getProducts(): Promise<CartItemType[]> {
  return await (await fetch('https://fakestoreapi.com/products')).json();
}

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts,
  );

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
