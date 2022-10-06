import { Fragment, useState } from 'react'
import useOnclickOutside from "react-cool-onclickoutside"
import { motion, AnimatePresence } from 'framer-motion'
import logoImage from '@images/logo.png'
import './Sidebar.scss'

const Sidebar = ({ links }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const ref = useOnclickOutside(() => {
        setIsSidebarOpen(false)
    })

    return (
        <Fragment>
            <button className="sidebar-switch" onClick={() => setIsSidebarOpen(s => !s)} ref={ref} />

            <AnimatePresence>
                {
                    isSidebarOpen
                        ? <Fragment>
                            <motion.div
                                className="sidebar-background"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />

                            <motion.div
                                ref={ref}
                                className="sidebar"
                                initial={{ width: '0rem' }}
                                animate={{ width: 'var(--sidebar)' }}
                                exit={{ width: '0rem' }}
                                transition={{ type: "spring", bounce: 0.5 }}
                            >
                                <div className="content">
                                    <img
                                        className="logo"
                                        src={logoImage}
                                        alt="EBSA logo"
                                    />

                                    <div className="links">
                                        {links.map(link => <a key={link.id} href={`#${link.id}`} >{link.name}</a>)}
                                    </div>
                                </div>
                            </motion.div>
                        </Fragment>
                        : null
                }
            </AnimatePresence>
        </Fragment>
    )
}

export default Sidebar