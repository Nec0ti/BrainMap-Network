// src/components/Navbar.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <h1>BrainMap Network</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
