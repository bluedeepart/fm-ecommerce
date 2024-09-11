import { useContext } from 'react';
import ProductDescription from './ProductDescription';
import CartContext from '../../context/CartContext';

function Products() {
  const { products } = useContext(CartContext);

  return (
    <section className='flex flex-col gap-10 md:gap-20'>
      {products.map((product) => (
        <ProductDescription key={product.id} data={product} />
      ))}
    </section>
  );
}

export default Products;
