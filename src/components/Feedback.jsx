import React from 'react'
import Userform from '../blocks/Userform'

const Feedback = () => {
  return (
    <section id="contacts">
      <div className="feedback-wrapper flex justify-center py-8 px-4">
        <div className="p-8 w-full max-w-md bg-white rounded-[20px]">
          <h3 className='text-left'>Contact us for more information on the white-label solution</h3>
          <p className='mt-2 text-left'>
            Are you ready to maximise payment performance and enable the highest
            success rates by optimizing all incoming and outgoing transactions
            in real-time? Fill out the form to request a demo now.
          </p>
          <Userform />
        </div>
      </div>
    </section>
  )
}

export default Feedback
