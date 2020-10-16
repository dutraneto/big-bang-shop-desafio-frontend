import React from 'react'
import './Gallery.scss'
import images from './images'

const Gallery = () => {
    const listOfImages = images.map(({ id, src, title, description }) => {
        return (
            <figure key={id} className={`gallery__item gallery__item--${id}`}>
                <img className='gallery__img' src={src} alt={title} />
                <figcaption className={`gallery__title gallery__title--${id}`}>{title}</figcaption>
                <figcaption className={`gallery__desc gallery__desc--${id}`}>
                    {description}
                </figcaption>
            </figure>
        )
    })

    return <section className='gallery'>{listOfImages}</section>
}

export default Gallery
