import ProductCard from './ProductCard';

ProductCard;
const ProductList = ({ products }) => {
  return (
    <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 shadow-2xl p-4'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
