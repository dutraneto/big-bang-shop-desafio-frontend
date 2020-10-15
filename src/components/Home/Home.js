import React from 'react'
import './Home.scss'

import Nav from '../Nav/Nav'
import Main from '../Main/Main'

const Home = () => {
    return (
        <>
            <header className='home'>
                <Nav />
            </header>
            <Main />
        </>
    )
}

export default Home
