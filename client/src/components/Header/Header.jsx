import "./Header.scss";

import { TbSearch } from 'react-icons/tb'
import { CgShoppingCart } from 'react-icons/cg'
import { AiOutlineHeart } from 'react-icons/ai'

import Cart from "../Cart/Cart";
import Search from "./Search/Search";

import { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";

const Header = () => {

    const { cartCount } = useContext(Context);

    const navigate = useNavigate();

    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 200){
            setScrolled(true);
        } else{
            setScrolled(false);
        }
    }

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <nav className="header-content">
                    <ul className="left nav-links-container">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li>About</li>
                        <li onClick={() => navigate(`/category/${1}`)}>Categories</li>
                    </ul>
                    <div 
                        className="center logo"
                        onClick={() => navigate("/")}
                    >
                        gearX
                    </div>
                    <div className="right nav-icons-container">
                        <TbSearch onClick={() => setShowSearch(true)}/>
                        <AiOutlineHeart />
                        <span className='cart-icon' onClick={() => setShowCart(true)}>
                            <CgShoppingCart />
                            {!!cartCount &&
                                <span>
                                    { cartCount}
                                </span>
                            }
                        </span>
                    </div>
                </nav>
            </header>
            {
                showCart && <Cart
                                setShowCart={setShowCart}
                            />
            }
            {
                showSearch && <Search 
                                setShowSearch={setShowSearch}
                            />
            }
        </>
    );
};

export default Header;
