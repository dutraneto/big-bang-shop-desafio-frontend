import React from 'react'
import './CardEmail.scss'

export default function CardEmail(props) {
    return (
        <div className='newsletter'>
            <form action='' className='newsletter__form'>
                <div className='newsletter__form-headings'>
                    <h3>Namah no seu e-mail</h3>
                    <p>Assine nossa newsletter</p>
                </div>
                <div className='newsletter__form-group'>
                    <input
                        type='email'
                        className='newsletter__form-group__control'
                        placeholder='Seu Email'
                    />
                    <button className='newsletter__form-group__btn'>assinar</button>
                </div>
                <div className='newsletter__form-policies'>
                    <p>
                        Ao clicar em “assinar”, você concorda em receber e-mails do Espaço Namah a
                        aceita nossos Termos de Uso e nossas Políticas de Privacidade.
                    </p>
                </div>
            </form>
        </div>
    )
}
