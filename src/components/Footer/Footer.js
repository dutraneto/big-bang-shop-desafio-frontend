import React from 'react'
import './Footer.scss'

import logoWhite from '../../images/logo-white.png'

import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <picture className='footer__img'>
                    <img className='' src={logoWhite} alt='' />
                </picture>{' '}
                <ul className='footer__social'>
                    <li className='footer__social-item'>
                        <a className='footer__social-link' href='./'>
                            <FaInstagram />
                        </a>
                    </li>
                    <li className='footer__social-item'>
                        <a className='footer__social-link' href='./'>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li className='footer__social-item'>
                        <a className='footer__social-link' href='./'>
                            <FaTwitter />
                        </a>
                    </li>
                </ul>
                <div className='footer__info'>
                    <div>
                        <h4>institucional</h4>
                        <p>
                            <a href='./'>sobre nós</a>
                        </p>
                        <p>
                            <a href='./'>contato</a>
                        </p>
                    </div>
                    <div>
                        <h4>loja</h4>
                        <p>
                            <a href='./'>cadastre-se</a>
                        </p>
                        <p>
                            <a href='./'>área do lojista</a>
                        </p>
                    </div>
                    <div>
                        <h4>atendimento</h4>
                        <p>
                            <a href='./'>hello@espaconamah.com.br</a>
                        </p>
                        <p>
                            <a href='./'>(31) 2515 6200</a>
                        </p>
                    </div>
                    <div>
                        <h4>assine nossa newsletter</h4>
                        <form action=''>
                            <input type='email' placeholder='Seu endereço de email' />
                            <button>assinar</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
