import React, { useState }  from 'react'
import '../../App.css'
import Slide from '../caruselSlide/slide';
import imageArr from './caruselImg';



export default function Carousel() {
  const [count, setCount] = useState(0);
  

    if (count >= imageArr.length) {
      setCount(0);
    } else if (count < 0) {
      setCount(imageArr.length - 1);
    }
    
    const handeImageClick = index => setCount(index)


    return (
      <div className= 'main'>
      <div className='container'>
      <button onClick={()=> setCount(count-1)} className='btn1'>prev</button>
          <div className='divIMG' style={{ backgroundImage:`url(${imageArr[count]})`}}></div>
      <button onClick={()=> setCount(count+1)} className='btn2'>next</button>
      </div>
      <div className= "pagination">
        {imageArr.map((img, index) => <Slide click={() => handeImageClick(index)} key={index}  img={img}/>)}
      </div>
      </div>
  )
}





