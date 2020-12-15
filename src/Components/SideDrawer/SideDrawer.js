import { Link } from "react-router-dom";
import React from 'react';
import clickHandler from '../NavbarAnimation/NavbarAnimation'

function SideDrawer() {
    return (
        <div className="sideDrawer">
            <div className="navbar-side">
                <div className="navbar-container">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <Link to="/" className="nav_link" onClick={clickHandler}>
                                AVALEHT
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/products" className="nav_link" onClick={clickHandler}>
                                TOOTED
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/Linkbout" className="nav_link" onClick={clickHandler}>
                                MEIST
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/contact" className="nav_link" onClick={clickHandler}>
                                KONTAKT
                            </Link>
                        </li>
                    </ul>
                    <li className="nav_item" id="shopping-cart">
                        <Link to="/shopping_cart" className="nav_link" onClick={clickHandler}>
                        OSTUKORV
                            <i className="fa fa-shopping-cart" id="shopping-icon"></i>
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    );
}

export default SideDrawer;
