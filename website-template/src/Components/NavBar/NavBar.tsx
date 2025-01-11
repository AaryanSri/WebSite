import React, {useState, useEffect} from 'react'
import './NavBar.css'
import logo from '../../assets/logo.jpeg'
import {Link} from 'react-router-dom'


const NavBar = () => {
    const[isCollapsed, setIsCollapsed] = useState(false);
    const[openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
                setIsCollapsed(true);
            } else {
                setIsCollapsed(false);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
            <img src={logo} alt="Company Logo" className="logo" />
            <div className={`menu ${isCollapsed ? 'collapsed' : ''}`} onClick={()=> {
                setOpenMenu(!openMenu)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`menu-options ${openMenu ? 'open' : ''}`}>
                <li><Link to='/' className="title">Home</Link></li>
                <li><Link to='/services' className="title">Services</Link></li>
                <li><Link to='/gallery'className="title">Gallery</Link></li>
                <li><Link to='/reviews'className="title">Reviews</Link></li>
                <li><Link to='/contactme'className="title">Contact Me</Link></li>
            </ul>
           
        </div>
    );
};

export default NavBar;