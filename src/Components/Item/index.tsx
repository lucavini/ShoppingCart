/* eslint-disable react/jsx-one-expression-per-line */
import React, { ReactNode } from 'react';

// Components
import { Button } from '@mui/material';

// Types
import { CartItemType } from '../../App';

// Styles
import { Wrapper } from './styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

function Item({ item, handleAddToCart }: Props) {
  const handleClick = () => {
    handleAddToCart(item);
  };

  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={handleClick}>Add to Cart</Button>
    </Wrapper>
  );
}

export default Item;
