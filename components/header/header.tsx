"use client";

import React from 'react';
import Link from 'next/link';
import "./header.css";

const Header: React.FC = () => {
    const [Toggle, showMenu] = React.useState(false);
    // const handleClick = () => showMenu(!Toggle);
    return (
        <header className="header">
            <nav className="nav container">
                <Link href="/" className='nav__logo'>
                    My Portfolio
                </Link>
                <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link href="#home" className="nav__link active-link">
                                    <i className="uil uil-estate nav__icon"></i> Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="#about" className="nav__link">
                                    <i className="uil uil-user nav__icon"></i> About
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="#skills" className="nav__link">
                                    <i className="uil uil-file-alt nav__icon"></i> Skills
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="#qualification" className="nav__link">
                                    <i className="uil uil-scenery nav__icon"></i> Timeline
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="#work" className="nav__link">
                                    <i className="uil uil-briefcase-alt nav__icon"></i> Work Experience
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="#services" className="nav__link">
                                    <i className="uil uil-briefcase-alt nav__icon"></i> Projects
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="#footer" className="nav__link">
                                    <i className="uil uil-message nav__icon"></i> Contact
                            </Link>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps" id="nav-toggle"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;