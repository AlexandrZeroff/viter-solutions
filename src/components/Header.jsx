import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  return (
    <section id="about">
      <div className="container-normal flex flex-col">
        <div className="header-wrapper p-4 md:px-16 lg:px-48 relative my-4">
          <div className="bg-shadow-gradient"></div>
          <div className="h-[42vh] md:h-[50vh] lg:h-[54vh]"></div>
          <p className="text-white mt-auto text-center z-10 md:text-lg">
            A quick and straightforward way to launch new payment services,
            handle your entire payment flow, and ensure complete and transparent
            merchant management.
          </p>
          <h2 className="text-white text-center mt-2 z-10">
            VITER is a SaaS solution for payment service providers and acquires
          </h2>
          <AnchorLink
            className="demo-btn my-4 mx-auto hidden md:block z-10 font-bold"
            href="#contacts"
          >
            Book a demo
          </AnchorLink>
        </div>
        <AnchorLink
          className="demo-btn mt-4 mx-auto md:hidden font-bold"
          href="#contacts"
        >
          Book a demo
        </AnchorLink>
      </div>
    </section>
  )
}

export default Header
