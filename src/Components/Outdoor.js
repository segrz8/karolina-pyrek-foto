import React from 'react'
import './Outdoor.scss';
import { Link } from 'react-router-dom';

import img1 from '../img/plener/1/7.jpg'
import img2 from '../img/plener/2/10.jpg'

function Outdoor() {
    return (
        <div className="Outdoor">
            {/* <div className="Outdoor__triangle1"></div>
            <div className="Outdoor__triangle2"></div> */}
            <div><Link to='/outdoor1'><img className="img1" src={img1} alt="" /></Link></div>
            <div><Link to='/outdoor2'><img src={img2} alt="" /></Link></div>
        </div>
    )
}

export default Outdoor
