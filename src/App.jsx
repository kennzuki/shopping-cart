import {  useEffect, useState } from 'react';

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
      <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 shadow-2xl p-4'>
        {products.map((product) => {
          return (
            <div
              className='bg-white rounded-lg shadow p-4 flex flex-col'
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.name}
                className='h-40 object-cover rounded mb-4'
              />

              <h2 className='text-xl font-semibold'>{product.name}</h2>
              <p className='text-gray-500 text-sm mb-2'>
                {product.description}
              </p>
              <p className='font-bold text-lg'>${product.price.toFixed(2)}</p>

              <button className='bg-blue-600 text-white mt-3 px-4 py-2 rounded transition hover:bg-blue-700'>
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
