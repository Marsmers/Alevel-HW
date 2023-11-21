import React from 'react'
import '../carousel/carousel'

export default function Slide({
  click,
  img}) {


  return (
    <div onClick={click} className='slideDiv'>
      <img src={img} alt="img"/>
    </div>
  )
}
