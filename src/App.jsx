import { useEffect,useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import axios from 'axios'
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import { Home } from './Components/Home'
import { Saved } from './Components/Saved'


function App() {

  const [image, setImage] = useState([]);
  const [search, setSearch] = useState("india")
  const [loader, setLoader] = useState(true)
  const [saved, setSaved] = useState([])
 

  const API_KEY = "z1MKt8dWqsNG5K4dGQLCzjp9NAYgs34ZdPF7F3yoJEmnFWTbmr8eNwKf"

  useEffect(() => {
    const fetchImage = async ()=>{

      const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
        headers: {
          Authorization: API_KEY
        },
      }
    );
    setImage(res.data.photos);
    setLoader(false);
    console.log(image);
  };
  
    const data = JSON.parse(localStorage.getItem("Image"))
    if(data){
      setSaved(data)
    }

    fetchImage()
  }, [search])


  useEffect(() => {
    if(saved.length !== 0) {
        const json = JSON.stringify(saved);
        localStorage.setItem("Image", json);
    }
}, [saved]);

   

  return (
    <>
    <h1 className='text-center'>SS-PIXEL</h1>

      <Router>
        <Navbar setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<Home  image={image} loader={loader} saved={saved} setSaved={setSaved}/> } />
          <Route path="/saved" element={<Saved saved={saved} loader={loader}/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
