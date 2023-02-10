import React from 'react'
import pic1 from '../assets/feature1.jpg'
import pic2 from '../assets/feature2.jpg'
import pic3 from '../assets/feature3.jpg'

const Features = () => {
  return (
    <section id="features">
      <div className="container-normal flex flex-col py-16">
        <article className="feature my-8 lg:mb-16">
          <img src={pic1} alt="" className="col-span-3 my-auto"></img>
          <div className="feature-text mt-8 col-span-2 md:my-auto">
            <h1 className="text-left md:mb-6">Basic Features</h1>
            <p>payment routing and cascading</p>
            <p>reconsolidation</p>
            <p>dashboard</p>
            <p>merchant management</p>
            <p>analytics and reports</p>
            <p>exchange rate service</p>
            <p>CHPP - fully upgradable UI/UX for payment page and form</p>
            <p>CHPP - fully upgradable payment page and form business logic</p>
          </div>
        </article>
        <article className="feature my-8 lg:mb-16">
          <img src={pic2} alt="" className="md:hidden"></img>
          <div className="feature-text mt-8 col-span-2  md:my-auto">
            <h1 className="text-left md:mb-6">Add-on features</h1>
            <p>Recurring Billing / Subscriptions setting</p>
            <p>Reporting / Analytics</p>
            <p>Training</p>
            <p>
              Triggering (automatic decision whether a CVV or 3DS is necessary.)
            </p>
            <p>Direct access to unified DB</p>
            <p>Alerting</p>
          </div>
          <img
            src={pic2}
            alt=""
            className="hidden md:block col-span-3 my-auto"
          ></img>
        </article>
        <article className="feature my-8 lg:mb-16">
          <img src={pic3} alt="" className="col-span-3 my-auto"></img>
          <div className="feature-text mt-8 col-span-2  md:my-auto">
            <h1 className="text-left md:mb-6">On-demand solution</h1>
            <p>Personalisation   </p>
            <p>Localisation</p>
            <p>Abandoned cart recovery</p>
            <p>
              A/B testing (configuration of the Checkout and option for
              experiments in order to optimise business performance and
              discovering what works best for you and your clients.)
            </p>
            <p>Consulting</p>
            <p className="feature-faded">Submission to payment systems</p>
            <p className="feature-faded">Obtaining MID</p>
            <p className="feature-faded">
              Creation of conditions and rules for the use of the product
            </p>
            <p className="feature-faded">Compliance</p>
            <p>Contact us for more information on the white-label solution</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Features
