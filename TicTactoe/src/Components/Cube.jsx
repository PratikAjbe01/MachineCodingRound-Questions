// Cube.js
import React from 'react'
import './Cube.css'

function Cube({ value,ind, onPlay }) {
  return (
    <div className='box' onClick={() => onPlay(ind)}>
  {value}
    </div>
  )
}

export default Cube
