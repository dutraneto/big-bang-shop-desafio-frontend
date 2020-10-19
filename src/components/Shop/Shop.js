import React from 'react'
import './Shop.scss'

import HorizontalRule from '../HorizontalRule/HorizontalRule'
import Button from '../Button/Button'

export default function Shop(props) {
    return (
        <section className='shop'>
            <HorizontalRule>Namah Shop</HorizontalRule>
            <Button>Veja todos os produtos ⟶</Button>
        </section>
    )
}
