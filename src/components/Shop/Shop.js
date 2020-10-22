import React from 'react'
import './Shop.scss'

import { FiHeart } from 'react-icons/fi'

import HorizontalRule from '../HorizontalRule/HorizontalRule'
import Button from '../Button/Button'
import products from './data'

export default function Shop(props) {
    const listProducts = products.map(({ id, src, title, subtitle, price }) => {
        return (
            <li key={id} className={`products__item products__item--${id}`}>
                <a href='./' className='products__item-link'>
                    <picture className='products__item-pic'>
                        <span className='products__item-pic__fav' title='Favoritar'>
                            <FiHeart className='fav' />
                        </span>
                        <img className='products__item-img' src={src} alt={title} />
                        <figcaption className='products__item-title'>{title}</figcaption>
                        <p className='products__item-subtitle'>{subtitle}</p>
                        <span className='products__item-price'>R$ {price.toFixed(2)}</span>
                    </picture>
                </a>
            </li>
        )
    })
    return (
        <section className='shop'>
            <HorizontalRule>Namah Shop</HorizontalRule>
            <ul className='products'>{listProducts}</ul>
            <ul className='dots'>
                <li className='dots__item active'></li>
                <li className='dots__item'></li>
                <li className='dots__item'></li>
            </ul>
            <Button>Veja todos os produtos ⟶</Button>
        </section>
    )
}
