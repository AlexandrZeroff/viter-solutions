import React from 'react'
import phone from '../assets/viter-phone.png'
import Benefit from '../blocks/Benefit'

const Benefits = () => {
  return (
    <section id="benefits" className="pt-16 md:px-[5vw]">
      <h1 className="text-center">Key benefits</h1>
      <div className="container-normal my-12 flex flex-col items-center md:hidden">
        <img className="px-4" src={phone} alt=""></img>
        <div className="benefits-container flex flex-wrap justify-center">
          <Benefit number="1." text="Cost savings" />
          <Benefit number="2." text="Secure APIs integration" />
          <Benefit number="3." text="Payment routing and cascading" />
          <Benefit
            number="4."
            text="Flexible work benefits for your business"
          />
          <Benefit
            number="5."
            text="No requirement to develop a particular personal data protection methods"
          />
        </div>
      </div>
      <div className="hidden md:grid grid-cols-3 gap-x-4 my-12">
        <div className="flex flex-col items-center justify-evenly">
          <Benefit number="1." text="Cost savings" />
          <Benefit number="3." text="Payment routing and cascading" />
        </div>
        <img className="mx-auto" src={phone} alt=""></img>
        <div className="flex flex-col items-center justify-evenly">
          <Benefit number="2." text="Secure APIs integration" />
          <Benefit
            number="4."
            text="Flexible work benefits for your business"
          />
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <Benefit
            number="5."
            text="No requirement to develop a particular personal data protection methods"
          />
        </div>
      </div>
    </section>
  )
}

export default Benefits
