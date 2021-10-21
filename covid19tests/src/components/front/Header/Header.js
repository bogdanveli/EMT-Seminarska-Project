import React from 'react'
import {Link} from "react-router-dom"; //zemanje od App.js react router dom od App js
import "./Header.css";

const Header = ({cartItems}) => {

    return(
        <header className="header">
            <div>
                <h1>
                    <Link to="/home" className="logo">  
                        COVID19 ТЕСТОВИ
                    </Link>
                </h1>
            </div>
            

            <div className="header-links">
                <ul>
                    <li>
                        <Link to="home">Дома</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="Contact">Контакт</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="signup">Најави се</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/cart" className="cart">
                            <i class="fas fa-shopping-cart"></i>
                            <span className="cart-length">
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>

                
            </div>
        </header>
    )
}

export default Header