import React from 'react'
import './button.css'

export default function MyButton({handleClick}) {
  return (
    <div className='buttonWrapper'>
      <button onClick={handleClick}>
        <span className='plus'>+</span>
      </button>
    </div>
  )
}
