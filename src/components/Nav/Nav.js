import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import './Nav.scss'

import Logo from '../Logo/Logo'

import { FiSearch, FiPackage, FiHeart, FiLogOut, FiX } from 'react-icons/fi'
import { FaRegUserCircle } from 'react-icons/fa'
import { RiShoppingBasket2Line } from 'react-icons/ri'

const Nav = ({ isMenuOpen, setIsMenuOpen, openMenu }) => {
    const state = isMenuOpen ? 'open' : ''

    const navItems = [
        { name: 'início' },
        { name: 'blog' },
        { name: 'loja' },
        { name: 'podcasts' },
        { name: 'cursos' },
        { name: 'contato' },
    ]

    const navList = navItems.map((item, index) => {
        return (
            <li key={index} className='nav__item'>
                <NavLink to={item.name} className='nav__link' activeClassName='active'>
                    {item.name}
                </NavLink>
            </li>
        )
    })

    return (
        <nav>
            <ul className={`nav nav--left ${state}`}>
                <li className='nav__item'>
                    <span className='nav__link nav__close' onClick={openMenu}>
                        <FiX />
                    </span>
                </li>
                <Router>{navList}</Router>
            </ul>

            <Logo className='logo' />

            {/* TODO: Refactor this */}
            <ul className='nav nav--right'>
                <li className='nav__item nav__item--icon nav__item--search'>
                    <a href='./' className='nav__link'>
                        <FiSearch />
                    </a>
                </li>
                <li className='nav__item nav__item--icon'>
                    <a href='./' className='nav__link'>
                        <FaRegUserCircle />
                    </a>
                </li>
                <li className='nav__item nav__item--icon nav__item--pack'>
                    <a href='./' className='nav__link'>
                        <FiPackage />
                    </a>
                </li>
                <li className='nav__item nav__item--icon'>
                    <a href='./' className='nav__link'>
                        <FiHeart />
                    </a>
                </li>
                <li className='nav__item nav__item--icon'>
                    <a href='./' className='nav__link'>
                        <span className='nav__link--count'>99</span>
                        <RiShoppingBasket2Line />
                    </a>
                </li>
                <li className='nav__item nav__item--icon nav__item--logout'>
                    <a href='./' className='nav__link'>
                        <FiLogOut />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
