import React from 'react'
import './Main.scss'

import Advertisement from '../Advertisement/Advertisement'
import Gallery from '../Gallery/Gallery'

const Main = () => {
    return (
        <main className='main'>
            <Advertisement />
            <Gallery />
        </main>
    )
}

export default Main
