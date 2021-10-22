import React, { useEffect, useState } from 'react';

function WeatherMainInfo(props){

    const [weatherData,setWeatherData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + 
            position.coords.latitude+'&lon='+position.coords.longitude+'&appid='+ props.api)
                .then(res => {
                return res.json();
            }).then(function(res) {
                setWeatherData(res)
                setIsLoading(false)
            });
        })
    },[])

    console.log(weatherData)
    
    return (
        <div className="flex flex-col justify-center items-center lg:w-4/12 rounded-tr-lg rounded-br-lg shadow-md">
            <div className="flex flex-row items-center">
                
                {isLoading?null:<img width="100px" src={'http://openweathermap.org/img/wn/'+weatherData.weather[0].icon+'@2x.png'}/>}
               
                <div className="font-bold text-6xl">
                  {isLoading?null:Math.round((weatherData.main.temp-273.15)) + '\u00b0C' }
                </div>
                <div className="ml-5 font-medium text-gray-500">
                    <div>
                        {isLoading?null:weatherData.name + ", " + weatherData.sys.country}
                    </div>
                    <div className="text-sm text-gray-700 uppercase">
                        {isLoading?null:weatherData.weather[0].description}
                    </div>
                </div>
            </div>
            <div className="ml-5 mt-10 font-medium text-lg">
                Monday, 3:00 AM
            </div>
            
        </div>
    )
}

export default WeatherMainInfo