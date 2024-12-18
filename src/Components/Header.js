import { Link } from "react-router-dom";
import Logo from "../img/Logo2.png";
import Cart from "../img/cart.png";
import '../Components/Header.css';

export default function Header() {
    return (
        <div className="navbar">
            <img
                src={Logo}
                alt="Logo"
                className="logo-img"
            />
            <ul>
                <Link to="/">
                    <li>HOME</li>
                </Link>
                <Link to="/store">
                    <li>SHOP</li>
                </Link>
                <Link to="/contact">
                    <li>CONTACT</li>
                </Link>
            </ul>
            <ul>
                <Link to="/cart">
                    <li><img
                        src={Cart}
                        alt="Cart"
                        className="cart-img"
                    /></li>
                </Link>
                <Link to="/login">
                    <li>LOGIN</li>
                </Link>
            </ul>
        </div>
    );
};
