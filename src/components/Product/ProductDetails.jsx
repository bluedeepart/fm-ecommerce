/* eslint-disable react/prop-types */
import CartIcon, { MinusIcon, PlusIcon } from '../../utils/Icons';
import { currencyFormatter } from '../../utils/currencyFormatter';
import Button from '../../UI/Button';
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';

function ProductDetails({ data }) {
  const { onAddToCart } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const { id, type, title, description, discount, price } = data;
  const discountAmount = price * (discount / 100);

  function counterIncrement() {
    setCount(prevCount => prevCount < 10 ? prevCount + 1 : prevCount);
  }

  function counterDecrement() {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
  }

  return (
    <div id={id} className='md:max-w-[450px]'>
      <h2 className='uppercase text-blue-700 font-bold font-serif text-sm tracking-widest mb-4'>{type}</h2>
      <h1 className='font-bold md:text-5xl text-3xl md:mb-12 mb-4'>{title}</h1>
      <p className='text-blue-700 mb-6'>{description}</p>
      <div className='md:block flex items-center justify-between md:mb-0'>
        <div className='md:mb-6 flex gap-4 items-center'>
          <p className='text-3xl font-bold'>
            {currencyFormatter(discountAmount)}
          </p>
          <p className='bg-blue-900 px-2 py-1 rounded text-white text-base font-bold'>{discount}%</p>
        </div>
        <p className='line-through text-blue-700 font-bold'>{currencyFormatter(price)}</p>
      </div>

      <div className='flex md:flex-row flex-col items-center gap-6 md:mt-10 mt-5'>
        <div className='md:flex grid grid-cols-3 items-center md:justify-start w-full'>
          <Button ariaLabel='Decrement Counter' cssClasses={`bg-blue-200 min-h-12 flex items-center px-5 rounded-r-none text-primary hover:text-secondary ${count === 0 ? 'pointer-events-none text-secondary' : ''}`} onClick={counterDecrement}>
            <MinusIcon />
          </Button>
          <p className='bg-blue-200 min-h-12 flex items-center px-5 font-bold justify-center'>{count}</p>
          <Button ariaLabel='Increment Counter' cssClasses={`bg-blue-200 min-h-12 flex items-center px-5 rounded-l-none text-primary hover:text-secondary ${count === 10 ? 'pointer-events-none text-secondary' : ''}`} onClick={counterIncrement}>
            <PlusIcon />
          </Button>
        </div>
        <Button ariaLabel='Add to cart' type='primary' onClick={() => onAddToCart(data, count)}><CartIcon fillColor='currentColor' /> Add to cart</Button>
      </div>
    </div>
  );
}

export default ProductDetails;
