import React from 'react';
import { Link } from 'react-router-dom';


import ContactIcons from '../Contact/ContactIcons';
// const { ROOT_URL } = process.env;

const SideBar = () => (
    <section id="sidebar">
        <section id="intro">
            <Link to="/" className="logo">
                photo
            </Link>
            <header>
                <h2>Fu Hong</h2>
                <p><a href="mailto:hongfu1220@gmail.com">hongfu1220@gmail.com</a></p>
            </header>
        </section>

        <section className="article">
            <h2>About</h2>
            <p>
                Introduction Placeholder
            </p>
            <ul className="action">
                <li>
                {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}   
                </li>
            </ul>
        </section>

        <section className="footer">
            <ContactIcons />
            <p className="copyright">&copy; Fu Hong <Link to="/">https://www.linkedin.com/in/fu-hong</Link>.</p>
        </section>
    </section>
);

export default SideBar;