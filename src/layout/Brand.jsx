import Logo from '../assets/logo.svg';

function Brand() {
  return (
    <a href="#" className='flex items-center'>
      <img src={Logo} alt="Sneakers" className='-mt-1' />
    </a>
  );
}

export default Brand;
