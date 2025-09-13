import { useProducts } from '../context/ProductContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products, loading, error } = useProducts();
  return (
    <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3  gap-6 shadow-2xl p-4'>
      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500 text-center'>{error}</p>}
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
