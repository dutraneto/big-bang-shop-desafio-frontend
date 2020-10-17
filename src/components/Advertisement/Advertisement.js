import React from 'react'
import './Advertisement.scss'

import Ad from '../../images/advertise1.jpg'
import Button from '../Button/Button'

const Advertisement = () => (
    <section className='ad'>
        <img className='ad__img' src={Ad} alt='Advertisement' />
        <div className='ad__cta'>
            <h2 className='ad__h2'>lorem ipsum dolor sit amet</h2>
            <p className='ad__desc'>lorem ipsum dolor sit amet</p>
            <div className='ad__btn'>
                <Button>lorem ipsum</Button>
            </div>
        </div>
    </section>
)

export default Advertisement
