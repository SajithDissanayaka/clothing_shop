import  {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import './Navbar.css';



function NavBar(){
    const {cartItems} = useContext(CartContext);

    const totalItems = cartItems.reduce((total, item)=> total + item.quantity, 0);
    return(
        <nav className='navbar'>
            <div className='logo'>AURA APPAREL</div>

            <div className='nav-links'>
                <a href="#shop">Shop</a>
                <a href="#collection">Collection</a>
                <a href="#about">Our Story</a>
            </div>
            <div className='nav-actions'>
                <button className='login-btn'>Login</button>
                <div className='cart-icon'>
                    <span>Bag</span>
                    <span className='cart-count'>({totalItems})</span>
                </div>
            </div>

        </nav>
    );
}
export default NavBar;