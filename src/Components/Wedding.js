import React from 'react'
import './Gallery.scss';

import img1 from '../img/slub/1.jpg'
import img2 from '../img/slub/2.jpg'
import img3 from '../img/slub/3.jpg'
import img4 from '../img/slub/4.jpg'
import img5 from '../img/slub/5.jpg'
import img6 from '../img/slub/6.jpg'
import img7 from '../img/slub/7.jpg'
import img8 from '../img/slub/8.jpg'
import img9 from '../img/slub/9.jpg'
import img10 from '../img/slub/10.jpg'
import img11 from '../img/slub/11.jpg'
import img12 from '../img/slub/12.jpg'
import img13 from '../img/slub/13.jpg'
import img14 from '../img/slub/14.jpg'
import img15 from '../img/slub/15.jpg'
import img16 from '../img/slub/16.jpg'
import img17 from '../img/slub/17.jpg'
import img18 from '../img/slub/18.jpg'
import img19 from '../img/slub/19.jpg'
import img20 from '../img/slub/20.jpg'
import img21 from '../img/slub/21.jpg'
import img22 from '../img/slub/22.jpg'
import img23 from '../img/slub/23.jpg'
import img24 from '../img/slub/24.jpg'
import img25 from '../img/slub/25.jpg'
import img26 from '../img/slub/26.jpg'
import img27 from '../img/slub/27.jpg'
import img28 from '../img/slub/28.jpg'
import img29 from '../img/slub/29.jpg'
import img30 from '../img/slub/30.jpg'
import img31 from '../img/slub/31.jpg'
import img32 from '../img/slub/32.jpg'
import img33 from '../img/slub/33.jpg'
import img34 from '../img/slub/34.jpg'
import img35 from '../img/slub/35.jpg'
import img36 from '../img/slub/36.jpg'
import img37 from '../img/slub/37.jpg'
import img38 from '../img/slub/38.jpg'
import img39 from '../img/slub/39.jpg'
import img40 from '../img/slub/40.jpg'
import img41 from '../img/slub/41.jpg'
import img42 from '../img/slub/42.jpg'

import img1S from '../img/slub/1S.jpg'
import img2S from '../img/slub/2S.jpg'
import img3S from '../img/slub/3S.jpg'
import img4S from '../img/slub/4S.jpg'
import img5S from '../img/slub/5S.jpg'
import img6S from '../img/slub/6S.jpg'
import img7S from '../img/slub/7S.jpg'
import img8S from '../img/slub/8S.jpg'
import img9S from '../img/slub/9S.jpg'
import img10S from '../img/slub/10S.jpg'
import img11S from '../img/slub/11S.jpg'
import img12S from '../img/slub/12S.jpg'
import img13S from '../img/slub/13S.jpg'
import img14S from '../img/slub/14S.jpg'
import img15S from '../img/slub/15S.jpg'
import img16S from '../img/slub/16S.jpg'
import img17S from '../img/slub/17S.jpg'
import img18S from '../img/slub/18S.jpg'
import img19S from '../img/slub/19S.jpg'
import img20S from '../img/slub/20S.jpg'
import img21S from '../img/slub/21S.jpg'
import img22S from '../img/slub/22S.jpg'
import img23S from '../img/slub/23S.jpg'
import img24S from '../img/slub/24S.jpg'
import img25S from '../img/slub/25S.jpg'
import img26S from '../img/slub/26S.jpg'
import img27S from '../img/slub/27S.jpg'
import img28S from '../img/slub/28S.jpg'
import img29S from '../img/slub/29S.jpg'
import img30S from '../img/slub/30S.jpg'
import img31S from '../img/slub/31S.jpg'
import img32S from '../img/slub/32S.jpg'
import img33S from '../img/slub/33S.jpg'
import img34S from '../img/slub/34S.jpg'
import img35S from '../img/slub/35S.jpg'
import img36S from '../img/slub/36S.jpg'
import img37S from '../img/slub/37S.jpg'
import img38S from '../img/slub/38S.jpg'
import img39S from '../img/slub/39S.jpg'
import img40S from '../img/slub/40S.jpg'
import img41S from '../img/slub/41S.jpg'
import img42S from '../img/slub/42S.jpg'

const imgSet = [
    { id: 1, path: img1, pathS: img1S, },
    { id: 2, path: img2, pathS: img2S, },
    { id: 3, path: img3, pathS: img3S, },
    { id: 4, path: img4, pathS: img4S, },
    { id: 5, path: img5, pathS: img5S, },
    { id: 6, path: img6, pathS: img6S, },
    { id: 7, path: img7, pathS: img7S, },
    { id: 8, path: img8, pathS: img8S, },
    { id: 9, path: img9, pathS: img9S, },
    { id: 10, path: img10, pathS: img10S, },
    { id: 11, path: img11, pathS: img11S, },
    { id: 12, path: img12, pathS: img12S, },
    { id: 13, path: img13, pathS: img13S, },
    { id: 14, path: img14, pathS: img14S, },
    { id: 15, path: img15, pathS: img15S, },
    { id: 16, path: img16, pathS: img16S, },
    { id: 17, path: img17, pathS: img17S, },
    { id: 18, path: img18, pathS: img18S, },
    { id: 19, path: img19, pathS: img19S, },
    { id: 20, path: img20, pathS: img20S, },
    { id: 21, path: img21, pathS: img21S, },
    { id: 22, path: img22, pathS: img22S, },
    { id: 23, path: img23, pathS: img23S, },
    { id: 24, path: img24, pathS: img24S, },
    { id: 25, path: img25, pathS: img25S, },
    { id: 26, path: img26, pathS: img26S, },
    { id: 27, path: img27, pathS: img27S, },
    { id: 28, path: img28, pathS: img28S, },
    { id: 29, path: img29, pathS: img29S, },
    { id: 30, path: img30, pathS: img30S, },
    { id: 31, path: img31, pathS: img31S, },
    { id: 32, path: img32, pathS: img32S, },
    { id: 33, path: img33, pathS: img33S, },
    { id: 34, path: img34, pathS: img34S, },
    { id: 35, path: img35, pathS: img35S, },
    { id: 36, path: img36, pathS: img36S, },
    { id: 37, path: img37, pathS: img37S, },
    { id: 38, path: img38, pathS: img38S, },
    { id: 39, path: img39, pathS: img39S, },
    { id: 40, path: img40, pathS: img40S, },
    { id: 41, path: img41, pathS: img41S, },
    { id: 42, path: img42, pathS: img42S, },
]

const photos = imgSet.map(item => {
    return (
        <div className={"Gallery__img"} key={item.id}>
            <picture>
                <source media="(min-width: 481px)" srcSet={item.path} />
                <img src={item.pathS} alt="..." />
            </picture>
        </div >
    )
})

function Wedding() {
    return (
        <div className="Gallery">
            <section className="Gallery__imgs">
                {photos}
            </section>
        </div>
    )
}

export default Wedding
