import React from 'react'
import './Start.scss';
import Slider from './Slider'
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../img/logo.png'

function Start() {
    return (
        <div className="Start">
            <Slider />
            <div className="Start__logo">
                <picture>
                    <source media="(min-width: 461px)" srcSet={logo} />
                    <img src={logo} alt="..." />
                </picture>
            </div>
        </div>
    )
}

export default Start
