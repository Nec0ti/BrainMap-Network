// src/components/Navbar.js

import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSwayed, setIsSwayed] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 50 && !isScrolled) {
            setIsScrolled(true);
            setIsSwayed(true);
            setTimeout(() => setIsSwayed(false), 500); // Sarsılma efektinin süresi
        } else if (scrollTop <= 50) {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isSwayed ? 'sway' : ''}`}>
            <h1>BrainMap Network</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blogs">Blogs</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
