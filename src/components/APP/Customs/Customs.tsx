import circleTrain from '@images/circleTrain.png'
import trenes from '@images/trenes.jpg'
import './Customs.scss'

const Customs = () => {
    return (
        <section className="customs" id="customs" >
            <img src={circleTrain} alt="" />
            <div id="exportacion_texto">
                <h2>SERVICIO DE <br /> EXPORTACIÓN </h2>
                <p>Contamos con un agente aduanal especializado en la tramitología de exportación e importación de embarque de
                    nuestros productos. <br /> Se tiene la logística para las operaciones de exportación para nuestros clientes,
                    garantizando una entrega puntual. </p>
            </div>

            <div id="threeTrains">
                <img src={trenes} alt="" />
                <div>
                    <a href="#" className="myButton3">Saber más</a>
                </div>
            </div>
        </section>
    )
}

export default Customs