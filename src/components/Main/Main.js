import React from 'react'
import './Main.scss'

import Advertisement from '../Advertisement/Advertisement'
import Gallery from '../Gallery/Gallery'
import Clearance from '../Clearance/Clearance'

const Main = () => {
    return (
        <main className='main'>
            <Advertisement />
            <Gallery />
            <Clearance />
        </main>
    )
}

export default Main
