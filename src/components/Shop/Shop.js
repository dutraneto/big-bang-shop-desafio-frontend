import React, { useState } from 'react'
import './Shop.scss'

import { FiHeart } from 'react-icons/fi'

import HorizontalRule from '../HorizontalRule/HorizontalRule'
import Button from '../Button/Button'
import products from './data'
import formatPrice from '../../utils/formatPrice'

export default function Shop(props) {
    const [isFavorite, setIsFavorite] = useState([])
    const handleClick = (id) => {
        const prevState = [...isFavorite]
        setIsFavorite([...isFavorite, id])
        console.log(isFavorite)
    }

    const listProducts = products.map(({ id, src, title, subtitle, price }) => {
        const state = isFavorite.indexOf(id) >= 0 ? 'fav' : ''
        return (
            <li key={id} className={`products__item products__item--${id}`}>
                <picture className='products__item-pic'>
                    <span
                        onClick={() => handleClick(id)}
                        className='products__item-pic__fav'
                        title='Favoritar'
                    >
                        <FiHeart className={state} />
                    </span>
                    <img className='products__item-img' src={src} alt={title} />
                    <a href='./' className='products__item-link'>
                        <figcaption className='products__item-title'>{title}</figcaption>
                        <p className='products__item-subtitle'>{subtitle}</p>
                        <span className='products__item-price'>{formatPrice(price)}</span>
                    </a>
                </picture>
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
