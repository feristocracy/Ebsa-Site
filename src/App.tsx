import About from './components/APP/About/About'
import Clients from './components/APP/Clients/Clients'
import ContactUs from './components/APP/ContactUs/ContactUs'
import Customs from './components/APP/Customs/Customs'
import Header from './components/APP/Header/Header'
import Products from './components/APP/Products/Products'
import Projects from './components/APP/Projects/Projects'
import Sites from './components/APP/Sites/Sites'

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Sites />
      <Products />
      <Customs />
      <Projects />
      <Clients />
      <ContactUs />
    </div >
  )
}

export default App