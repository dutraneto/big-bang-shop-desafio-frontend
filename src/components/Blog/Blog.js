import React from 'react'
import './Blog.scss'

import HorizontalRule from '../HorizontalRule/HorizontalRule'
import Button from '../Button/Button'

export default function Blog(props) {
    return (
        <section className='blog'>
            <HorizontalRule>Blog</HorizontalRule>
            <Button>Veja todos os posts ⟶</Button>
        </section>
    )
}
