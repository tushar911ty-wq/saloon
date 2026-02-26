import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        const handleClick = (e) => {
            document.querySelectorAll('details.dropdown[open]').forEach((d) => {
                if (!d.contains(e.target)) d.removeAttribute('open');
            });
        };
        const handleKeydown = (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('details.dropdown[open]').forEach((d) => {
                    d.removeAttribute('open');
                });
            }
        };
        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    return (
        <header className="navbar">
            <div className="logo">
                <img src="/images/logo_10-removebg-preview.png" alt="Logo" />
                matrix
            </div>
            <button className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>&#9776;</button>
            <nav className={navOpen ? "show" : ""}>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <details className="dropdown">
                    <summary>Services</summary>
                    <div className="menu">
                        <a href="#services">Hair cutting</a>
                        <a href="#services">Hair Coloring</a>
                    </div>
                </details>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Navbar;
