import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import menu_open from '../assets/menu-open.svg'
import menu_close from '../assets/menu-close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0,
        staggerDirection: 1,
      },
    },
  }
  return (
    <section id="menu" className="relative">
      <div className="container-normal">
        <div className="flex items-center h-20">
          <a href="/">
            <img className="h-16" src={logo} alt="Viter"></img>
          </a>
          <nav className="header-nav header-nav-menu hidden md:flex items-center ml-auto">
            <AnchorLink href="#about">About us</AnchorLink>
            <AnchorLink href="#benefits">Key benefits</AnchorLink>
            <AnchorLink href="#features">Features</AnchorLink>
            <AnchorLink href="#how-it-works">How it works</AnchorLink>
            <AnchorLink href="#contacts">Contact us</AnchorLink>
          </nav>
          {toggleMenu ? (
            <img
              className="ml-auto cursor-pointer md:hidden"
              src={menu_close}
              onClick={() => setToggleMenu(false)}
              alt="Close menu"
            ></img>
          ) : (
            <img
              className="cursor-pointer ml-auto md:hidden"
              src={menu_open}
              alt="Menu"
              onClick={() => setToggleMenu(true)}
            ></img>
          )}
          <AnimatePresence>
            {toggleMenu && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%', maxWidth: 420 }}
                className="nav-menu absolute w-full h-[100vh] top-0 right-0 bg-white p-4 z-50"
              >
                <motion.div className="flex justify-end">
                  <img
                    className="ml-auto cursor-pointer md:hidden"
                    src={menu_close}
                    onClick={() => setToggleMenu(false)}
                    alt="Close menu"
                  ></img>
                </motion.div>
                <motion.nav
                  className="header-nav header-nav-burger flex flex-col items-center mt-8"
                  initial="closed"
                  animate="open"
                  variants={sideVariants}
                >
                  <AnchorLink
                    href="#about"
                    onClick={() => setToggleMenu(false)}
                  >
                    About us
                  </AnchorLink>
                  <AnchorLink
                    href="#benefits"
                    onClick={() => setToggleMenu(false)}
                  >
                    Key benefits
                  </AnchorLink>
                  <AnchorLink
                    href="#features"
                    onClick={() => setToggleMenu(false)}
                  >
                    Features
                  </AnchorLink>
                  <AnchorLink
                    href="#how-it-works"
                    onClick={() => setToggleMenu(false)}
                  >
                    How it works
                  </AnchorLink>
                  <AnchorLink
                    href="#contacts"
                    onClick={() => setToggleMenu(false)}
                  >
                    Contact us
                  </AnchorLink>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Navbar
