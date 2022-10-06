import cert1 from '@images/cert1.png'
import cert2 from '@images/cert2.png'
import cert3 from '@images/cert3.png'
import waves1 from '@images/waves1.jpg'
import granito from '@images/granito.png'
import basalto from '@images/basalto.png'
import caliza from '@images/caliza.png'

import './Products.scss'

const Products = () => {
  return (
    <section className="products" id="products" >
      <div id="productos_container">
        <h2>CERTIFICACIÓN DE PRODUCTO</h2>
        <p>En la elaboración de nuestros productos en EBSA, nos apoyamos en las normas de los organismos nacionales e
          internacionales de calidad y pruebas de los materiales a utilizar, establecidas por</p>
      </div>
      <div id="certificaciones_container">
        <img src={cert1} alt="Certificación ASTM INTERNATIONAL" />
        <img src={cert2} alt="Certificación AREMA" />
        <img src={cert3} alt="Certificación SCT" />
      </div>

      {/* Rocas */}
      <div className="waves">
        <img src={waves1} alt="waves" />
      </div>

      <div id="granito">
        <img src={granito} alt="granito rock" />
        <div id="granito_texto">
          <div><a href="#" className="button-link">Saber más</a></div>
          <p>Roca ignea platónica compuesta principalmente por cuarzo feldespato y micas color claro. Densidad entre 2.5 a 2.8
            kg/dm3 dureza variable entre 5.5 a 7 en escalas de mohs absorción de agua a presión atmosférica de 1035 a 1675
            kg/cm2 resistencia a la flexión de 88 a 257 kg/cm2.</p>
        </div>
      </div>

      <div id="basalto">
        <div id="basalto_texto">
          <p>Roca ígnea extrusiva (volcánica) compuesta por piroxenos, plagioclasas y olivino color oscuro. Densidad entre 2.5
            a 3 kg/dm3. Dureza variable entre 6 a 8 en escala de mohs.</p>
          <div id="bot">
            <a href="#" className="button-link">Saber más</a>
          </div>
        </div>
        <img src={basalto} alt="basalto rock" />
      </div>

      <div id="caliza">
        <img src={caliza} alt="" />
        <div id="caliza_texto">
          <p>Roca sedimentaria química compuesta por carbonato a calcio. <br /> Color claro-gris-orscuro. Densidad entre 2.4 a
            2.8 kg/dm3. Dureza variable entre 3 a 4 en escala mohs. </p>
          <div id="bot">
            <a href="#" className="button-link">Saber más</a>
          </div>
        </div>
      </div>

      <div className="waves secondwave">
        <img src={waves1} alt="" />
      </div>
    </section>
  )
}

export default Products