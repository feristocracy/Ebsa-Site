import About from './components/APP/About/About'
import Clients from './components/APP/Clients/Clients'
import Customs from './components/APP/Customs/Customs'
import Header from './components/APP/Header/Header'
import Products from './components/APP/Products/Products'
import Sites from './components/APP/Sites/Sites'
import Footer from "./components/APP/Footer/Footer"

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Sites />
      <Products />
      <Customs />
      <Clients />
      <Footer />
    </div >
  )
}

export default App