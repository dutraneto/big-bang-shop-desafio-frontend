import React from 'react'
import './Main.scss'

import Advertisement from '../Advertisement/Advertisement'
import Gallery from '../Gallery/Gallery'
import Clearance from '../Clearance/Clearance'
import Blog from '../Blog/Blog'
import Shop from '../Shop/Shop'

const Main = () => {
    return (
        <main className='main'>
            <Advertisement />
            <Gallery />
            <Clearance />
            <Blog />
            <Shop />
        </main>
    )
}

export default Main
