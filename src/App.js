import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Art from './components/ArtBid'

// axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/api/art";


function App() {

  const [artsRecords, setArtRecords] = useState([]);

  useEffect(() => {
    axios
      .get('https://final3380-backend.onrender.com/api/art')
      .then((response)=>{
        setArtRecords(response.data)
        console.log(response.data)
      })
    
  }, []);

  const artList =
  artsRecords.length === 0
            ? 'no art'
            : artsRecords.map((eachArt) => (
               
                <Art id={eachArt._id} 
                      key={eachArt._id}
                      art={eachArt} 
                      src={eachArt.src}
                      bids={eachArt.src}
                      />
                
            ))


  return (
    <div className="App">
      <div className="photo-gallery">
        {artList}
      </div>
    </div>
  );
}

export default App;
