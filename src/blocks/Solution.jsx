import React from 'react'

const Solution = ({ image, header, text }) => {
  return (
    <div className="solution flex flex-col">
      <img src={image} className="solution-pic" alt=""></img>
      <h3 className="mt-4 text-left">{header}</h3>
      <p className="mt-2 text-left">{text}</p>
    </div>
  )
}

export default Solution
