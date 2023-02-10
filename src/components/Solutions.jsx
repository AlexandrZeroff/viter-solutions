import React from 'react'
import Solution from '../blocks/Solution'
import pic1 from '../assets/solution1.jpg'
import pic2 from '../assets/solution2.jpg'
import pic3 from '../assets/solution3.jpg'
import pic4 from '../assets/solution4.jpg'

const Solutions = () => {
  return (
    <section id="solutions" className='pt-16 flex flex-col'>
      <h1 className='text-center'>Viter Solutions:</h1>
      <div className="solutions-wrapper flex my-8">
        <Solution
          image={pic1}
          header="Customizable"
          text="Adjust the merchant back office to flaunt your brand."
        />
        <Solution
          image={pic2}
          header="Responsive"
          text="It displays equally well on any device with any screen size."
        />
        <Solution
          image={pic3}
          header="Powerful"
          text="Access all features and monitor real-time performance with an intuitive Dashboard."
        />
        <Solution
          image={pic4}
          header="Accountable"
          text="Manage access rights and the team’s activity by setting up roles."
        />
      </div>
    </section>
  )
}

export default Solutions
