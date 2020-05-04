import React from 'react'
import './Contact.scss';

import map from '../img/map.jpg'
import mapS from '../img/mapS.jpg'

function Contact() {
    return (
        <div className="Contact">
            <h1 className="Contact__title">Kontakt</h1>
            <section className="Contact__txt">
                <p>666-189-808 <i class="fas fa-phone"></i></p>
                <p>kontakt@karolinapyrek.pl <i class="fas fa-envelope"></i></p>
                <p>Jeśli podoba Ci się mój styl fotografii – zapraszam do kontaktu i już przebieram nogami z radości przed Naszym spotkaniem ! <i className="fas fa-smile"></i></p>
            </section>
            <div className="Contact__map">
                <picture>
                    <source media="(min-width: 461px)" srcSet={map} />
                    <img src={mapS} alt="..." />
                </picture>
            </div>
        </div>
    )
}

export default Contact
