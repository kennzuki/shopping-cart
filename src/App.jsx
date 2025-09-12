import { useEffect, useState } from 'react';
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";


function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:8000/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='max-w h-screen p-16 space-y-6'>
      <h1 className='text-3xl font-bold'>Kenki shoppng cart</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error} No data was fetched</p>}
     <ProductList products={products} />
    </div>
  );
}

export default App;
