import React, { useState } from 'react'
import Nav from '../Nav/Nav'

import { FiMenu } from 'react-icons/fi'

import './Header.scss'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const openMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className='header'>
            <Nav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} openMenu={openMenu} />
            <span className='header__menu menu-open' onClick={openMenu}>
                <FiMenu />
            </span>
        </header>
    )
}

export default Header
