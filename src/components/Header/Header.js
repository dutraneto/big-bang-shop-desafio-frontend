import React, { useState } from 'react'
import Nav from '../Nav/Nav'

import { FiMenu } from 'react-icons/fi'

import './Header.scss'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const openMenu = () => setIsMenuOpen(!isMenuOpen)
    console.log(isMenuOpen)

    return (
        <header className='header'>
            <Nav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} openMenu={openMenu} />
            <span className='header__menu' onClick={openMenu}>
                <FiMenu />
            </span>
        </header>
    )
}

export default Header
