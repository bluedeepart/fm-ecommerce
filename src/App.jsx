import Products from './components/Product/Products';
import { CartContentProvider } from './context/CartContext';
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <CartContentProvider>
      <main className="container">
        <Header key='header' />
        <Products key='products' />
        <Footer key='footer' />
      </main>
    </CartContentProvider>
  );
}

export default App;
