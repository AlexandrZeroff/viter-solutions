import React from 'react'

const Benefit = ({ number, text }) => {
  return (
    <article className="benefit flex flex-col items-center">
      <div className="benefit-dot flex items-center justify-center">
        <p className='text-xl lg:text-2xl font-bold'>{number}</p>
      </div>
      <h4 className="text-lg text-center mt-4 md:mt-0 font-bold">{text}</h4>
    </article>
  )
}

export default Benefit
