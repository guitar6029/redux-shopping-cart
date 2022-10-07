import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import './Navbar.css';

function Navbar() {
  
    const amount = useSelector((store) => store.cart.amount );
    return (
    <nav>
        <h3 className="nav_title">E-Store</h3>   
        <div>
        <AiOutlineShoppingCart className="shopping_cart"  /> 
        <span className="amount">{amount}</span>
        </div>
    </nav>
  )
}

export default Navbar