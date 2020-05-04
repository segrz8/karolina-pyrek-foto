import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.scss';

import logo from '../img/logo.png'

const Nav = (props) => {
    return (
        <nav onClick={props.handleMenu} className={props.menuActive ? 'Menu Menu--active' : 'Menu'}>
            <div className="Menu__logo">
                <picture>
                    <source media="(min-width: 461px)" srcSet={logo} />
                    <img src={logo} alt="..." />
                </picture>
            </div>
            <div className="Menu__list">
                <ul>
                    <li><Link to='/'>Start</Link></li>
                    <li><Link to='/about'>O mnie</Link></li>
                    <li><Link to='/wedding'>Reportaż ślubny</Link></li>
                    <li><Link to='/outdoor'>Sesja plenerowa</Link></li>
                    <li><Link to='/contact'>Kontakt</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
