import React from 'react'
import './ShopCard.scss'
import { FiHeart } from 'react-icons/fi'
import formatPrice from '../../utils/formatPrice'

export default function ShopCard(props) {
    const { isFavorite, handleClick, id, src, title, subtitle, price } = props
    const state = isFavorite.indexOf(id) >= 0 ? 'fav' : ''
    return (
        <li className={`products__item products__item--${id}`}>
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
}
