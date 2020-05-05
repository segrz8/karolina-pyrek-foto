import React from 'react'
import './About.scss';

import img1 from '../img/1.jpg'

function About() {
    return (
        <div className="About">
            <div className="About__backgroundImg">
                <picture>
                    <source media="(min-width: 461px)" srcSet={img1} />
                    <img src={img1} alt="..." />
                </picture>
            </div>
            <div className="About__triangle"></div>
            <h1 className="About__title">O mnie</h1>
            <section className="About__txt">
                <p className="bold">Mam na imię Karolina i bardzo mi miło, że zaglądasz na moją stronę.</p>
                <p>Jestem fotografem zarówno z pasji jak i z wykształcenia. W mojej pracy staram się zatrzymywać wszystkie najpiękniejsze momenty ludzkiego życia – począwszy na ślubie Młodej Pary, poprzez Macierzyństwo, Dzieciństwo (a w nim ważne momenty jak Chrzest czy Pierwsza Komunia) a skończywszy na kreatywnej pracy w moim własnym studio fotograficznym (którą uwielbiam!). Tutaj dodam, iż zajmuję się również na szeroką skalę fotografią BEAUTY (ale o tym innym razem:)).</p>
                <p>Z miłości do wpatrywania się w ludzkie oczy i zachwycania ludzką różnorodnością – moim absolutnym atutem są portrety ! Zarówno w studio, jak i w plenerze. Wierzę, że każdy człowiek jest w pewien niepowtarzalny sposób piękny i potrafię to pokazać na swoich fotografiach. Moje portrety znajdziecie zarówno w ofercie sesji studyjnych, jak i w reportażu ślubnym.</p>
                <p>Uwielbiam naturalność, nieprzekombinowane kadry, harmonię i prawdziwe emocje na zdjęciach. Stosuję ciepłe, jasne kolory. Cieszę się, gdy słyszę od Was , że moje zdjęcia dają Wam ogromną radość, że wzbudzają żywe wspomnienia. Uwielbiam, gdy wracacie do mnie zadowoleni po jakimś czasie z pomysłem na kolejną sesję. To właśnie sprawia, że czuję, iż to co robię ma wielki sens. Najważniejszym elementem w tym wszystkim jest relacja z Wami.</p>
            </section>
        </div>
    )
}

export default About
