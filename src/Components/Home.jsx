import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { Loader } from './Loader';
import { ToastContainer, toast , Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Home = ({image, loader,saved, setSaved}) => {
  

  const savedImage = (img)=>{
    let flag = true;

    if(saved !== null && saved.length >0){
    

    for(let i=0; i<saved.length; i++){
      if(saved[i].id === img.id){
        flag = false;
        // console.log("Image is already Saved")
        toast.info('🦄Image Already Saved', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
        break
      }
    }
  }
    if(flag){
      setSaved([...saved, img])
      toast.success('🦄 Image Saved!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
        
      console.log("Image saved")
      
    }
  };


  return (
    <>
    <ToastContainer />
    <div className='img container-fluid' id='top' >
      {
      loader ?(
        <Loader/>
      ): 
      <>
      {
        image.map((image)=>{
          
          return <div key={image.id} className='items' onClick={()=>savedImage(image)}>
            <img  src={image.src.medium} alt='image.photographer'/>
          </div>
        })
      }
      </>
      }

      
    </div>

      {
        image.length !==0 && 
        <a href="#top">
          <div className="btn btn-warning w-25 my-4 mx-auto d-block "> Back to top <FaArrowUp /></div>
        </a>
      }
    
    </>
  )
}
