import Header from "./components/Header";
import ProductList from './components/ProductList';

function App() {
  return (
    <div className='max-w h-screen p-16 space-y-6'>
      <Header/>
      <h1 className='text-3xl text-green-800 uppercase font-bold'>
         catalogue
      </h1>

      <ProductList />
    </div>
  );
}

export default App;
