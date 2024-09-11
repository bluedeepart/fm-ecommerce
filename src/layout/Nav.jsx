import { useContext } from 'react';
import Button from '../UI/Button';
import { CloseIcon } from '../utils/Icons';
import CartContext from '../context/CartContext';

const menuItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

function Nav() {
  const { showMenu, onMenuToggle } = useContext(CartContext);

  return (
    <nav className={`fixed md:static top-0 bg-white w-60 md:w-full h-screen md:h-auto z-30 md:z-0 md:block transition-all duration-300 ease-in-out  ${showMenu ? 'left-0' : '-left-full'}`}>
      <Button ariaLabel='Close menu' cssClasses='text-blue-700 pt-5 mb-10 md:hidden' onClick={onMenuToggle}>
        <CloseIcon />
      </Button>
      <ul className='flex-col md:flex-row pl-6'>
        {menuItems.map((menu, index) => (
          <li key={index} className='text-blue-900 text-xl md:text-base md:text-blue-700 md:hover:text-blue-900 cursor-pointer md:pb-10 border-b-4 border-[transparent] transition-all hover:border-primary'>{menu}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
