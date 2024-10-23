import React from 'react'

const Reviesbar = ({ rating,progress}) => {
  return (
    <div className='flex gap-4 min-w-[300px]'>
      <span>{rating} Stars</span>
      <div className="w-full bg-gray-300 rounded-sm h-4 max-w-[150px] my-auto">
      <div
        className="bg-[#AB572D] h-4  rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
      <p>{progress}%</p>
    </div>
  )
}

export default Reviesbar
