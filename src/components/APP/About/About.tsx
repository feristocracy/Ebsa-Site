import Carousel from './Carousel/Carousel'
import './About.scss'

const About = () => {
    return (
        <section className="about" id="about" >

            <Carousel />

            <div className="description" >
                <div className="title">¿QUIÉNES SOMOS?</div>

                <p>Con más de 35 años de experiencia somos una empresa dedicada a la explotación y trituración de materiales rocosos no metálicos. Nuestros productos se han posicionado con gran éxito en México y el sur de Texas.</p>
                <p>Extracciones Basálticas S.A. de C.V. es la empresa líder en materiales para el sector carretero, construcción general y especial en el área ferroviaria.</p>

                <a href="#" className="button-link">Saber más</a>
            </div>
        </section>
    )
}

export default About