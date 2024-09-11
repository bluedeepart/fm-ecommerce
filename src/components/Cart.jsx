import { forwardRef, useContext } from 'react';
import Button from '../UI/Button';
import CartItem from './CartItem';
import CartContext from '../context/CartContext';

const Cart = forwardRef((props, ref) => {
  const { cartItems } = useContext(CartContext);
  const message = 'Your cart is empty.';

  return (
    <div className='absolute top-full right-0 flex flex-col bg-white md:-mt-2 mt-2 shadow-2xl rounded-lg md:w-96 w-full gap-0 xll:-me-20 z-30' ref={ref}>
      <div className='card-header'>
        <h3 className='font-bold'>Cart</h3>
      </div>
      {cartItems.length === 0
        ?
        <div className='min-h-44 md:min-h-48 text-blue-700 font-bold flex justify-center items-center'>{message}</div>
        :
        <>
          <div className='card-body pb-0 max-h-80 overflow-y-auto'>
            {cartItems.map((cartItem, index) => (
              <CartItem key={`cart-item-${index}`} productInCart={cartItem} />
            ))}
          </div>
          <div className="card-footer pt-3">
            <Button type='primary'>Checkout</Button>
          </div>
        </>
      }
    </div>
  );
});

Cart.displayName = 'Cart';

export default Cart;
