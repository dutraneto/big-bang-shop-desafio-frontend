import React from 'react'
import './Nav.scss'

import { FiSearch, FiPackage, FiHeart, FiLogOut } from 'react-icons/fi'
import { FaRegUserCircle } from 'react-icons/fa'
import { RiShoppingBasket2Line } from 'react-icons/ri'

const Nav = (props) => (
    <nav>
        <ul className='nav'>
            <li className='nav__item nav__item_active'>
                <a href='./' className='nav__link'>
                    inicio
                </a>
            </li>
            <li className='nav__item'>
                <a href='./' className='nav__link'>
                    blog
                </a>
            </li>
            <li className='nav__item'>
                <a href='./' className='nav__link'>
                    loja
                </a>
            </li>
            <li className='nav__item'>
                <a href='./' className='nav__link'>
                    podcasts
                </a>
            </li>
            <li className='nav__item'>
                <a href='./' className='nav__link'>
                    cursos
                </a>
            </li>
            <li className='nav__item'>
                <a href='./' className='nav__link'>
                    contato
                </a>
            </li>
        </ul>
        <picture>
            <img src='' alt='' />
        </picture>
        <ul className='nav'>
            <li className='nav__item nav__item--icon'>
                <a href='./' className='nav__link'>
                    <FiSearch />
                </a>
            </li>
            <li className='nav__item nav__item--icon'>
                <a href='./' className='nav__link'>
                    <FaRegUserCircle />
                </a>
            </li>
            <li className='nav__item nav__item--icon'>
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
                    <RiShoppingBasket2Line />
                </a>
            </li>
            <li className='nav__item nav__item--icon'>
                <a href='./' className='nav__link'>
                    <FiLogOut />
                </a>
            </li>
        </ul>
    </nav>
)

export default Nav
