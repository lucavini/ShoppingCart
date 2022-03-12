/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-body-style */
import React from 'react';

// components
import CartItem from '../CartItem';

// styles
import { Wrapper } from './styles';

// types
import { CartItemType } from '../../App';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const CalculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0).toFixed(2);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && <p>No Items in the Cart</p>}
      {cartItems?.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${CalculateTotal(cartItems)}</h2>
    </Wrapper>
  );
};

export default Cart;
