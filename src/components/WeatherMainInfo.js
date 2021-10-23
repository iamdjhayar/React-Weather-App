import React, { useEffect, useState } from 'react';

import {ArrowUpIcon, ArrowDownIcon,LocationMarkerIcon} from '@heroicons/react/outline'

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
                console.log(res)
                setIsLoading(false)
            });
        })
    },[])
    
    return (
        <div className="sm:flex-none lg:flex lg:flex-col sm:w-full lg:w-3/12 rounded-tr-lg p-8 rounded-br-lg shadow-md">
            {isLoading?null:
                <div className="flex flex-row items-center"><LocationMarkerIcon className="h-6 w-6 text-red-500"/>
                    <span className="font-semibold text-lg">{weatherData.name + ", " + weatherData.sys.country}</span>
                </div>
            }
            <div className="flex flex-col justify-center items-center mt-10">
                <div>
                    {isLoading?null:<img className="w-full" src={'http://openweathermap.org/img/wn/'+weatherData.weather[0].icon+'@2x.png'}/>}
                </div>
                <div className="text-center">
                    {isLoading?null:<span className="text-2xl text-red-500 uppercase">{weatherData.weather[0].description}</span>}
                </div>
                <div className="font-bold text-8xl">
                  {isLoading?null:Math.round((weatherData.main.temp-273.15)) + '\u00b0C' }
                </div>

                <div className="flex flex-row mt-5">
                    <div className="flex flex-row">
                        {isLoading?null:
                        <div>
                            <ArrowDownIcon className="h-8 w-8 text-red-500"/>
                            <span className="ml-2 mr-2">{Math.round((weatherData.main.temp_min-273.15)) + '\u00b0C'}</span>
                        </div> 
                        }
                    </div>
                    <div className="flex flex-row">
                        {isLoading?null:
                        <div>
                            <ArrowUpIcon className="h-8 w-8 text-red-500"/>
                            <span className="ml-2 mr-2">{Math.round((weatherData.main.temp_max-273.15)) + '\u00b0C'}</span>
                        </div>
                        }
                    </div>
                </div>

            </div>
            {/* <div className="ml-5 mt-10 font-medium text-lg">
                Monday, 3:00 AM
            </div> */}
            
        </div>
    )
}

export default WeatherMainInfo