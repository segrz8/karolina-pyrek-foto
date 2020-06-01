import React from 'react'
import './Contact.scss';

// import map from '../img/map.jpg'
// import mapS from '../img/mapS.jpg'

import map from '../img/mapa.jpg'

import img1 from '../img/1.jpg'

function Contact() {
    return (
        <div className="Contact">
            <div className="Contact__backgroundImg">
                <picture>
                    <source media="(min-width: 461px)" srcSet={img1} />
                    <img src={img1} alt="..." />
                </picture>
            </div>
            <div className="About__triangle"></div>
            <h1 className="Contact__title">Kontakt</h1>
            <section className="Contact__txt">
                <p>666-189-808 <i class="fas fa-phone"></i></p>
                <p><a target="_blank" rel="noopener noreferrer" href="mailto: kontakt@karolinapyrek.pl">kontakt@karolinapyrek.pl <i class="fas fa-envelope"></i></a></p>
                <p className="bold">Sosnowiec</p>
                <p>Jeśli podoba Ci się mój styl fotografii – zapraszam do kontaktu i już przebieram nogami z radości przed Naszym spotkaniem! <i className="fas fa-smile"></i></p>
            </section>
            <div className="Contact__map">
                <picture>
                    <source media="(min-width: 461px)" srcSet={map} />
                    <img src={map} alt="..." />
                </picture>
            </div>
        </div>
    )
}

export default Contact
