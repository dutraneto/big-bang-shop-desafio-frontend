import React, { useState } from 'react'
import './Shop.scss'

import HorizontalRule from '../HorizontalRule/HorizontalRule'
import Button from '../Button/Button'
import products from './data'
import ShopCard from '../ShopCard/ShopCard'

export default function Shop(props) {
    const [isFavorite, setIsFavorite] = useState([])

    const listProducts = products.map((product) => {
        return (
            <ShopCard
                key={product.id}
                isFavorite={isFavorite}
                setIsFavorite={setIsFavorite}
                {...product}
            />
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
