// import { Link } from "react-router-dom";

function SideDrawer() {
    return (
        <div className="sideDrawer">
            <div className="navbar-side">
                <div className="navbar-container">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="/" className="nav_link">
                                AVALEHT
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="/products" className="nav_link">
                                TOOTED
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="/about" className="nav_link">
                                MEIST
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="/contact" className="nav_link">
                                KONTAKT
                            </a>
                        </li>
                    </ul>
                    <li className="nav_item" id="shopping-cart">
                        <a href="/shopping_cart" className="nav_link">
                        OSTUKORV
                            <i className="fa fa-shopping-cart" id="shopping-icon"></i>
                            
                        </a>
                    </li>
                </div>
            </div>
        </div>
    );
}

export default SideDrawer;
