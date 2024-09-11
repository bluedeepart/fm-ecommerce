/* eslint-disable react/prop-types */
import { useContext } from 'react';
import Button from '../UI/Button';
import { currencyFormatter } from '../utils/currencyFormatter';
import { DeleteIcon } from '../utils/Icons';
import CartContext from '../context/CartContext';

function CartItem({ productInCart }) {
  const { onRemoveCart } = useContext(CartContext);
  const thumbImg = productInCart.sliderImages[0];
  const { id, title, price, discount, itemCount } = productInCart;
  const discountAmount = price * (discount / 100);

  return (
    <div className='flex flex-1 items-start pb-4 w-full'>
      <img src={thumbImg} alt={title} className='w-14 rounded-md block mr-4' />
      <div className='flex justify-between w-full'>
        <div className='text-blue-700'>
          <h3>{title}</h3>
          <p>
            <span>{currencyFormatter(discountAmount)}</span>
            <span> x {itemCount} </span>
            <span className='text-blue-900'><strong>{currencyFormatter(discountAmount * itemCount)}</strong></span>
          </p>
        </div>
        <Button cssClasses='text-blue-400 hover:text-primary px-0' ariaLabel='Delete Item' onClick={() => onRemoveCart(id)}>
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
