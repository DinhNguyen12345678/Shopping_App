import React from 'react';
import logo from '../../../assets/images/logo.png';
import { Container } from 'react-bootstrap';

export default function Header() {
    const tabMenu = [
        {
            index: 0,
            title: 'Home',
        },
        {
            index: 1,
            title: 'About',
        },
        {
            index: 2,
            title: 'Products'
        }
    ];

    return (
        <Container className="header">
            <div className="header__brand">
                <div className="header__brand-logo">
                    <img src={logo} alt=""/>
                </div>
                <span className="header__brand-text">
                    Tiệm 1782
                </span>
            </div>
            <nav className="header__navbar">
                <ul className="header__navbar-list"></ul>
                {
                    tabMenu.map((tab) => (
                        <li
                            key={tab.index}
                            className="header__navbar-item"
                        >
                            {tab.title}
                        </li>
                    ))
                }
            </nav>
        </Container>
    )
}