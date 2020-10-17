import React from 'react'
import './Clearance.scss'

import deals from './deals'

const Clearance = () => {
    const listOfDeals = deals.map(({ id, src, title, detail, price }) => {
        return (
            <li key={id} className={`deals__item deals__item--${id}`}>
                <a href='./' className='deals__item-link'>
                    <picture className='deals__item-pic'>
                        <img className='deals__item-img' src={src} alt={title} />
                        <figcaption className='deals__item-title'>{title}</figcaption>
                        <p className='deals__item-detail'>{detail}</p>
                        <span className='deals__item-price'>R$ {price.toFixed(2)}</span>
                    </picture>
                </a>
            </li>
        )
    })

    return (
        <section className='deals'>
            <ul className='deals__list'>
                <li className='deals__item deals__item--text'>
                    nossos especialistas <br />
                    <strong>recomendam</strong>
                </li>
                {listOfDeals}
            </ul>
        </section>
    )
}

export default Clearance
