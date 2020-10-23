import React from 'react'
import './ShopCard.scss'
import { FiHeart } from 'react-icons/fi'
import formatPrice from '../../utils/formatPrice'

export default function ShopCard(props) {
    const [isMarked, setIsMarked] = React.useState(false)
    const { isFavorite, setIsFavorite, id, src, title, subtitle, price } = props

    const handleClick = (id) => {
        const currentFavorites = [...isFavorite]
        if (!isMarked) {
            setIsMarked(true)
            if (!currentFavorites.includes(id)) setIsFavorite([...isFavorite, id])
        } else {
            setIsMarked(false)
            if (currentFavorites.includes(id))
                setIsFavorite(currentFavorites.filter((i) => i !== id))
        }
    }
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
