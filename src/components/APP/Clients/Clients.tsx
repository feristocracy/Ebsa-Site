import clientesImage from '@images/clientes.png'
import './Clients.scss'

const Clients = () => {
  return (
    <section>
      <div className="clients" id="clients" >
        <h5>CLIENTES</h5>
        <img src={clientesImage} alt="" />
      </div>
    </section>
  )
}

export default Clients