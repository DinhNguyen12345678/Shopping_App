import clsx from 'clsx';
import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../assets/images/logo.png';

export default function Header( props ) {
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
            title: 'Products',
        }
    ];

    const handleChangeTabMenu = (id) => {
        const tabLists = document.querySelectorAll('.header__navbar-item');
        const tabActive = document.querySelector('.header__navbar-item.active');

        tabActive.classList.remove('active')
        tabLists[id].classList.add('active');

        props.handleSetIndexTab(id);
        
    }

    return (
        <Container className="header">
            <a className="header__brand" href="/">
                <div className="header__brand-logo">
                    <img src={logo} alt="" />
                </div>
                <span className="header__brand-text">
                    Tiệm 1782
                </span>
            </a>
            <nav className="header__navbar">
                <ul className="header__navbar-list"></ul>
                {
                    tabMenu.map((tab) => (
                        <li
                            key={tab.index}
                            className={clsx("header__navbar-item", tab.index === 0 ? 'active' : '')}
                            onClick={() => handleChangeTabMenu(tab.index)}
                        >
                            {tab.title}

                            <div className="tabDot"></div>
                        </li>
                    ))
                }
            </nav>
        </Container>
    )
}