import mapa from '@images/mapa.png'
import './Sites.scss'

const Sites = () => {
  return (
    <section className="sites" id="sites" >
      <div id="container_mapa">
        <div id="mapita">
          <img src={mapa} alt="Mapa de Estados Unidos y México" />
        </div>
          <div id="plantas_texto">
            <h2>NUESTRAS PLANTAS</h2>
            <p>
              <br /> En la actualidad contamos con cinco plantas ubicadas en diferentes estados de la República Mexicana
            </p>

            <div><a href="#" className="button-link">Saber más</a></div>
          </div>
      </div>

      <div id="video">

        <iframe width={560} height={315} src="https://www.youtube.com/embed/F6Xg52xhceg" title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

      </div>
    </section>
  )
}

export default Sites