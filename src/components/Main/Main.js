import React from 'react'
import './Main.scss'

import Advertisement from '../Advertisement/Advertisement'
import Gallery from '../Gallery/Gallery'
import Clearance from '../Clearance/Clearance'

import HorizontalRule from '../HorizontalRule/HorizontalRule'

const Main = () => {
    return (
        <main className='main'>
            <Advertisement />
            <Gallery />
            <Clearance />
            <HorizontalRule>Blog</HorizontalRule>
        </main>
    )
}

export default Main
