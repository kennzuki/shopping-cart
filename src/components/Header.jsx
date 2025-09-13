import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";



const Header = () => {
    const { cart } = useCart();
    const itemCount=cart.reduce((total, item) => total + item.quantity, 0);
    return ( 
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Kenki shoppng</h1>
         <div className="relative">
            <FaShoppingCart className="text-4xl text-green-300" />
             {itemCount > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
              {itemCount}
            </span>
          )}
        </div></div>
       
     );
}
 
export default Header;