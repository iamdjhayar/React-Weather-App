import React, { useEffect, useState } from 'react';

function WeatherMainInfo(){
    // const key = "19bb8f46b9b8c5df003baea3570c989b";
    // const [weatherData,setWeatherData] = useState()
    // const [forecastData,setForecastData] = useState()
    // const [isFetchingWeather,setIsFetchingWeather] = useState(true)
    // const [isFetchingForecast,setIsFetchingForecast] = useState(true) 
    
    // useEffect(() => {
  
    //   navigator.geolocation.getCurrentPosition(function(position) {
  
    //     fetch('https://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid='+key)
    //       .then(res => {
    //       return res.json();
    //     }).then(function(res) {
    //       setWeatherData(res)
    //       setIsFetchingWeather(false)
    //       console.log(res)
    //     });
  
    //     fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid='+key)
    //       .then(res => {
    //       return res.json();
    //     }).then(function(res) {
    //       setForecastData(res)
    //       setIsFetchingForecast(false)
    //       console.log(res)
    //     });
  
        
    //   });
    // },[])
  
    return (
        <div className="flex flex-col justify-center items-center lg:w-4/12 rounded-tr-lg rounded-br-lg shadow-md">
            <div className="flex flex-row items-center">
                <div className="font-bold text-6xl">
                    32oC
                </div>
                <div className="ml-5 font-medium text-gray-500">
                    Liloan, PH
                </div>
            </div>
            <div className="ml-5 mt-10 font-medium">
                Monday, 3:00 AM
            </div>
            
        </div>
    //   <div className="grid grid-cols-2 gap-4 h-screen">
    //     <div className="flex flex-col justify-center items-center">
    //       <div>
    //         {isFetchingWeather ? null : 
    //           <img width="100px" src={'http://openweathermap.org/img/wn/'+weatherData.weather[0].icon+'@2x.png'}/>
    //         }
    //       </div>
  
    //       <div className="flex flex-row justify-center items-center">
    //            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
    //              {isFetchingWeather ? 
    //                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg> : 
    //                Math.round((weatherData.main.temp-273.15)) + '\u00b0C' 
    //             }
    //           </h1>
    //           <p className="ml-4 text-xl text-gray-500">
    //             {isFetchingForecast ? 
    //               <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg> : 
    //               forecastData.city.name + ", " + forecastData.city.country
    //             }
    //           </p>
    //       </div> 
        
    //       </div>
    //       <div>
    //         2
    //         </div>
    //   </div>
    )
}

export default WeatherMainInfo