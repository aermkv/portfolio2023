import React from 'react'
import { ReactP5Wrapper } from "@p5-wrapper/react"
import sketch from '../sketch.js'
import sketch2 from '../sketch2.js'

const Dynamic = () => {
  return (
    <div className='w-full mx-auto fixed z-[-1]'>
        <ReactP5Wrapper sketch={sketch2} />
    </div>
  )
}

export default Dynamic