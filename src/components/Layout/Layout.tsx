
import Navbar from './Navbar/Navbar.js'
import './Layout.scss'
import { useRef } from 'react'
import Sidebar from './Sidebar/Sidebar.js'

const links = [
    {
        id: 'header',
        name: 'Inicio'
    },
    {
        id: 'about',
        name: '¿Quiénes Somos?'
    },
    {
        id: 'sites',
        name: 'Plantas'
    },
    {
        id: 'products',
        name: 'Productos'
    },
    {
        id: 'customs',
        name: 'Servicio Aduanal'
    },
    {
        id: 'projects',
        name: 'Proyectos'
    },
    {
        id: 'clients',
        name: 'Clientes'
    },
    {
        id: 'contact-us',
        name: 'Contacto'
    },
]

const Layout = ({ children }) => {
    const contentRef = useRef(null)

    return (
        <div className="layout">
            <Navbar links={links} contentRef={contentRef} />
            <Sidebar links={links} />

            <div className="content" ref={contentRef}>
                {children}
            </div>
        </div>
    )
}

export default Layout