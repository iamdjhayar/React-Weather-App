import React, { useEffect, useState } from 'react';
import WeatherMainInfo from './components/WeatherMainInfo'
import DaysOfForcast from './components/DaysOfForcast'
import DailyHighlights from './components/DailyHighlights'
import MainContainer from './components/MainContainer';

function App() {
    const [key] = useState("19bb8f46b9b8c5df003baea3570c989b");
    const [oneCall,setOneCall] = useState()
    const [isLoading,setIsLoading] = useState(true)
    
    useEffect(() => {
  
      navigator.geolocation.getCurrentPosition(function(position) {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid='+key)
          .then(res => {
          return res.json();
        }).then(function(res) {
          setOneCall(res)
          setIsLoading(false)
        });
      });
    },[])
  return(
    <div className="flex h-screen">
      <WeatherMainInfo api={key}/>
      {isLoading?null:<MainContainer data={oneCall}/>}
    </div>
  )
}

export default App;
