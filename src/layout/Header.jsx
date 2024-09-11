import { useContext } from 'react';
import Brand from './Brand';
import Nav from './Nav';
import Button from '../UI/Button';
import Avatar from '../assets/image-avatar.png';
import Cart from '../components/Cart';
import CartIcon, { MenuIcon } from '../utils/Icons';
import Overlay from '../UI/Overlay';
import CartContext from '../context/CartContext';

function Header() {
  const { showMenu, showCart, cartItems, cartRef, cartTogglerRef, onCartToggle, onMenuToggle } = useContext(CartContext);

  return (
    <>
      <header className='md:pt-10 pt-4 md:pb-0 pb-4 border-b md:mb-20 border-border relative flex flex-wrap justify-between items-baseline -mx-2 px-2'>
        <div className='flex justify-start items-baseline'>
          {/* NAV TOGGLER */}
          <Button cssClasses='ps-2 pe-0 text-blue-700 hover:text-blue-900 md:hidden' onClick={onMenuToggle}>
            <MenuIcon />
          </Button>
          {/* BRAND */}
          <Brand />
          {/* NAVIGATION */}
          <Nav />
        </div>

        {/* CART & PROFILE */}
        <div className='flex items-center'>
          {/* CART BUTTON */}
          <div ref={cartTogglerRef}>
            <Button cssClasses='btn-icon relative text-blue-700 hover:text-blue-900' onClick={onCartToggle}>
              {cartItems.length > 0 && <span className='absolute -top-2 -right-1 text-[9px] w-5 bg-primary text-center rounded-full text-white'>{cartItems.length}</span>}
              <CartIcon />
            </Button>
          </div>
          {/* AVATAR */}
          <Button cssClasses='btn-icon border-2 border-border hover:border-primary rounded-full'>
            <img src={Avatar} alt="Avatar" className='md:w-12 w-8' />
          </Button>
        </div>

        {/* CART CARD */}
        {showCart && (
          <Cart ref={cartRef} />
        )}
      </header>
      {/* OVERLAY */}
      {showMenu && <Overlay onClose={onMenuToggle} key='menu overlay' />}
    </>
  );
}

export default Header;
