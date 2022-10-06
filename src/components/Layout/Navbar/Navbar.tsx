import logoImage from '@images/logo.png'
import { motion, useScroll } from "framer-motion"
import { useLayoutEffect, useState } from 'react'
import './Navbar.scss'

const Navbar = ({ links, contentRef }) => {
  const { scrollY } = useScroll({ container: contentRef })
  const [logoOpacity, setLogoOpacity] = useState(0)

  useLayoutEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest <= 500) return setLogoOpacity(latest / 500)
      if (latest > 500) return setLogoOpacity(1)
    })
  }, [scrollY])

  return (
    <motion.nav
      className="navbar"
      style={{ background: `rgba(0,0,0,${logoOpacity})` }}
    >
      <motion.img
        style={{ opacity: logoOpacity }}
        className="logo"
        src={logoImage}
        alt="EBSA logo"
      />

      <div className="navbar-links">
        {links.map(link => <a key={link.id} href={`#${link.id}`} >{link.name}</a>)}
      </div>
    </motion.nav>
  )
}

export default Navbar