import React from 'react'
import './Footer.scss'

import logoWhite from '../../images/logo-white.png'

import {
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaCcVisa,
    FaCcMastercard,
    FaCcDinersClub,
    FaCcAmex,
    FaBarcode,
} from 'react-icons/fa'

import { FiLock } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__row'>
                    <picture className='footer__img'>
                        <img className='' src={logoWhite} alt='' />
                    </picture>
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
                                <a className='font-size13' href='./'>
                                    sobre nós
                                </a>
                            </p>
                            <p>
                                <a className='font-size13' href='./'>
                                    contato
                                </a>
                            </p>
                        </div>
                        <div>
                            <h4>loja</h4>
                            <p>
                                <a className='font-size13' href='./'>
                                    cadastre-se
                                </a>
                            </p>
                            <p>
                                <a className='font-size13' href='./'>
                                    área do lojista
                                </a>
                            </p>
                        </div>
                        <div>
                            <h4>atendimento</h4>
                            <p>
                                <a className='font-size13' href='./'>
                                    hello@espaconamah.com.br
                                </a>
                            </p>
                            <p className='font-size13'>
                                <a href='./'>(31) 2515 6200</a>
                            </p>
                        </div>
                    </div>
                    <div className='footer__form'>
                        <h4>assine nossa newsletter</h4>
                        <form action=''>
                            <input type='email' placeholder='Seu endereço de email' />
                            <button>assinar</button>
                        </form>
                    </div>
                </div>
                <hr className='hr' />
                <div className='footer__row'>
                    <p className='footer__cia font-size12'>
                        © 2020 Espaço Namah. Todos os direitos reservados. CNPJ: 19.035.854/0001-31.
                    </p>
                    <ul className='footer__card'>
                        <li className='footer__card-item footer__card-item--1 font-size12'>
                            Formas de pagamento:
                        </li>
                        <li className='footer__card-item footer__card-item--2'>
                            <FaCcVisa />
                        </li>
                        <li className='footer__card-item footer__card-item--3'>
                            <FaCcMastercard />
                        </li>
                        <li className='footer__card-item footer__card-item--4'>
                            <FaCcDinersClub />
                        </li>
                        <li className='footer__card-item footer__card-item--5'>
                            <FaCcAmex />
                        </li>
                        <li className='footer__card-item footer__card-item--5'>
                            <FaBarcode />
                        </li>
                    </ul>
                    <div className="footer__brand">
                        <div className='footer__lock'>
                            <FiLock />
                            <p className='font-size12'>Site seguro</p>
                        </div>
                        <div className='footer__faq'>
                            <p className='font-size12'>
                                <a href='./'>Dúvidas Frequentes</a> |
                            </p>
                            <p className='font-size12'>
                                <a href='./'>Políticas da Loja</a>
                            </p>
                        </div>
                        <div className='footer__branding'>
                            <p className='font-size12'>
                                Site por:
                                <a href='./'> BIG BANG SHOP</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
