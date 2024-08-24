import React from 'react'
import { Loader } from './Loader'
import { FaArrowUp } from "react-icons/fa";


export const Saved = ({saved,loader}) => {
  return (
    <>
      
      <div className='img container-fluid' id='top' >
      {
      loader || saved.length == 0 ?  (
        <Loader/>
      ): 
      <>
      {
        saved.map((image)=>{
          
          return <div key={image.id} className='items'>
            <img  src={image.src.medium} alt='image.photographer'/>
          </div>
        })
      }
      </>
      }

      
    </div>

      {
        saved.length !==0 && 
        <a href="#top">
          <div className="btn btn-warning w-25 my-4 mx-auto d-block "> Back to top <FaArrowUp /></div>
        </a>
      }
    </>
  )
}
