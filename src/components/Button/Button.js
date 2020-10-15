import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import './Button.scss'

const Button = (props) => {
    return (
        <Router>
            <Link className='button' to='/inicio'>
                {props.children}
            </Link>
        </Router>
    )
}

export default Button
