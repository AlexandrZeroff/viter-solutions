import React from 'react'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'

const Screen = () => {
  return (
    <section id="how-it-works">
      <div className="container-normal my-12 flex flex-col">
        <div className="pic-pad grid max-w-md mx-auto md:hidden">
          <img className="mb-[5vh] sm:mb-none" src={pic1} alt=""></img>
          <img className="mt-auto sm:mt-none" src={pic3} alt=""></img>
          <img className="col-span-2" src={pic2} alt=""></img>
        </div>
        <div className="pic-pad-large hidden md:grid max-w-4xl mx-auto">
          <img className="mt-4" src={pic1} alt=""></img>
          <img className="col-span-2" src={pic2} alt=""></img>
          <img className="mt-16" src={pic3} alt=""></img>
        </div>
        <div className="mx-auto max-w-md md:max-w-xl lg:max-w-3xl px-4">
          <h3 className="text-center mt-4">Safe the time on processing</h3>
          <h1 className="text-center mt-4 md:mt-12">
            and double your conversion rates with VITER
          </h1>
          <p className="mt-8 text-center md:text-lg">
            VITER is an ecosystem of payment solutions for payment service
            providers and acquirers, the platform is capable of fulfilling the
            needs of any online business. VITER establishes connections with
            APIs of payment providers and acquirers globally and ensures their
            security, integrity, and stability,{' '}
            <span className="font-bold">
              without the requirement to develop particular personal data
              protection methods.
            </span>{' '}
            VITER allows the client to organize the connection and management of
            financial transactions for the products and projects of the company
            and beyond.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Screen
