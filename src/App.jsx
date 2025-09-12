import ProductList from './components/ProductList';

function App() {
  return (
    <div className='max-w h-screen p-16 space-y-6'>
      <h1 className='text-3xl text-green-500 uppercase font-bold'>
        Kenki shoppng cart
      </h1>

      <ProductList />
    </div>
  );
}

export default App;
