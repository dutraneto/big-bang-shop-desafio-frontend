import React from 'react'
import './Blog.scss'
import data from './data'

import HorizontalRule from '../HorizontalRule/HorizontalRule'
import Button from '../Button/Button'
import CardEmail from '../CardEmail/CardEmail'

export default function Blog(props) {
    const listOfPosts = data.map(({ id, src, title, subtitle, author, highlights }) => {
        return (
            <li key={id} className={`posts__item posts__item--${id}`}>
                <a href='./' className='posts__item-link'>
                    <picture className='posts__item-pic'>
                        <img className='posts__item-img' src={src} alt={title} />
                        <figcaption className={`posts__item-title posts__item-title--${id}`}>
                            {title}
                        </figcaption>

                        <div className={`posts__item-box posts__item-box--${id}`}>
                            <span className={`posts__item-subtitle posts__item-subtitle--${id}`}>
                                {subtitle}
                            </span>
                            <span className={`posts__item-author posts__item-author--${id}`}>
                                {author}
                            </span>
                        </div>
                        <span className={`posts__item-highlights posts__item-highlights--${id}`}>
                            {highlights}
                        </span>
                    </picture>
                </a>
            </li>
        )
    })
    return (
        <section className='posts'>
            <HorizontalRule>Blog</HorizontalRule>
            <ul className='posts__list'>
                {listOfPosts}
                <li className='posts__item posts__item-form'>
                    <CardEmail />
                </li>
            </ul>
            <Button>Veja todos os posts ⟶</Button>
        </section>
    )
}
