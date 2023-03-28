import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom"
function Header(props) {
    return (
        <header className='site-header'>
            <div className='container'>
                <div className='site-header__wrapper'>
                    <h1 className="student-title">Students</h1>
             

                    <nav className='sitenav'>
                        <ul className='sitenav__list'>
                            <li className='sitenav__item'>
                                <NavLink className='sitenav__link' to='/'>
                                    Home
                                </NavLink>
                            </li>
                            <li className='sitenav__item'>
                                <NavLink className='sitenav__link' to='/about'>
                                    About Us
                                </NavLink>
                            </li>
                            <li className='sitenav__item'>
                                <NavLink className='sitenav__link' to='/contact'>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;