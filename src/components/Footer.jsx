import React from 'react'
import logo from '../assets/logo.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <section id="footer">
      <div className="container-normal py-8 xl:pb-0">
        <div className="md:grid grid-cols-2 xl:grid-cols-7 gap-4">
          <article className="xl:col-span-2">
            <a href="/">
              <img className="w-36 mb-8" src={logo} alt="Logo"></img>
            </a>
            <p className="hidden md:block">
              J.S. SPORTAITMENT CYPRUS LTD, 9, Vasili Michaldi, Globalserve
              business centre, 3026, Limassol, Cyprus
            </p>
            <p className="text-left hidden md:block mt-8">
              © VITER 2023. Legal Terms
            </p>
          </article>
          <article className="xl:col-span-2">
            <h3>Ready for the next step?</h3>
            <p className="mt-2">
              Are you ready to maximise payment performance and enable the
              highest success rates by optimizing all incoming and outgoing
              transactions in real-time? Fill out the form to request a demo
              now.
            </p>
            <AnchorLink href="#contacts">
              <button className="demo-btn px-8 font-bold my-8">
                Free demo
              </button>
            </AnchorLink>
          </article>
          <article className="md:hidden">
            <p className="mb-8">
              J.S. SPORTAITMENT CYPRUS LTD, 9, Vasili Michaldi, Globalserve
              business centre, 3026, Limassol, Cyprus
            </p>
            <div className="grid grid-cols-2">
              <nav className="footer-nav flex flex-col justify-center">
                <AnchorLink href="#about">About us</AnchorLink>
                <AnchorLink href="#benefits">Key benefits</AnchorLink>
                <AnchorLink href="#features">Features</AnchorLink>
                <AnchorLink href="#how-it-works">How it works</AnchorLink>
                <AnchorLink href="#contacts">Contact us</AnchorLink>
              </nav>
              <div className="flex flex-col">
                <div className="flex justify-end">
                  <a
                    href="https://www.facebook.com/profile.php?id=100089608735225&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-16 mr-2"
                      src={facebook}
                      alt="facebook"
                    ></img>
                  </a>
                  <a
                    href="https://instagram.com/viter_tehc?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-16 mr-2"
                      src={instagram}
                      alt="instagram"
                    ></img>
                  </a>
                </div>
                <a
                  className="underline my-2 mt-6 text-right text-sm"
                  href="https://drive.google.com/file/d/1NUPL35lg2RuWVdu55nUjX8i2SoXYHsQh/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cookies policy
                </a>
                <a
                  className="underline my-2 text-right text-sm"
                  href="https://drive.google.com/file/d/1O6-Siwopo5344Jw4H3bNEWwQu1UdVzLD/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy policy
                </a>
                <a
                  className="underline my-2 text-right text-sm"
                  href="https://drive.google.com/file/d/1XR2XwNTK8tiLvRaBNsYC88Bo5wdxptPu/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms and conditions
                </a>
                <p className="text-right mt-2 md:hidden">
                  © VITER 2023. Legal Terms
                </p>
              </div>
            </div>
          </article>
          <article className="hidden md:flex col-span-2 xl:col-span-3 xl:flex-col items-center justify-between xl:justify-start">
            <div>
              <nav className="footer-nav-large flex items-center flex-wrap justify-between xl:justify-center">
                <AnchorLink href="#about">About us</AnchorLink>
                <AnchorLink href="#benefits">Key benefits</AnchorLink>
                <AnchorLink href="#features">Features</AnchorLink>
                <AnchorLink href="#how-it-works">How it works</AnchorLink>
                <AnchorLink href="#contacts">Contact us</AnchorLink>
              </nav>
              <div className="flex items-center lg:justify-center lg:mt-4">
                <a
                  className="underline m-4 text-sm"
                  href="https://drive.google.com/file/d/1NUPL35lg2RuWVdu55nUjX8i2SoXYHsQh/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cookies policy
                </a>
                <a
                  className="underline m-4 text-sm"
                  href="https://drive.google.com/file/d/1O6-Siwopo5344Jw4H3bNEWwQu1UdVzLD/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy policy
                </a>
                <a
                  className="underline m-4 text-sm"
                  href="https://drive.google.com/file/d/1XR2XwNTK8tiLvRaBNsYC88Bo5wdxptPu/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms and conditions
                </a>
              </div>
            </div>
            <div className="flex items-center xl:mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=100089608735225&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-16 ml-4 xl:m-2"
                  src={facebook}
                  alt="facebook"
                ></img>
              </a>
              <a
                href="https://instagram.com/viter_tehc?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-16 ml-4 xl:m-2"
                  src={instagram}
                  alt="instagram"
                ></img>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Footer
