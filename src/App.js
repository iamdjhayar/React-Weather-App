import React, { useEffect, useState } from 'react';

function App() {
  const key = "19bb8f46b9b8c5df003baea3570c989b";
  const [latitude,setLatitude] = useState(0)
  const [longitude,setLongitude] = useState(0)
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {

      setLatitude(() => position.coords.latitude)
      setLongitude(() => position.coords.longitude)
      
    });

    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid='+key)
      .then(res => {
      return res.json();
    }).then(function(res) {
      console.log(res);
    });

  },[])

  return (
    <div>
      <button className="rounded-md bg-color-blue ">hello</button>
    </div>
  )
}

export default App;
