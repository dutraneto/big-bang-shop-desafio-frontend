import React from 'react'
import './Home.scss'

import Nav from '../Nav/Nav'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <>
            <header className='home'>
                <Nav />
            </header>
            <Main />
            <Footer />
        </>
    )
}

export default Home
