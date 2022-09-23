import React, { useEffect, useState } from "react";
import WeatherMainInfo from "./components/WeatherMainInfo";
import MainContainer from "./components/MainContainer";
import axios from "axios";

function App() {
  const [key] = useState("19bb8f46b9b8c5df003baea3570c989b");
  const [oneCall, setOneCall] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          position.coords.latitude +
          "&lon=" +
          position.coords.longitude +
          "&appid=" +
          key
      )
        .then((res) => {
          return res.json();
        })
        .then(function (res) {
          setOneCall(res);
          setIsLoading(false);
          console.log(res);
          let data = res?.current;
          console.log(Math.round(data.temp - 273.15));
          axios
            .post("http://127.0.0.1:5000/predict", {
              nitro: 150,
              phosp: 60,
              potas: 45,
              temp: Math.round(data.temp - 273.15),
              humid: 87,
              ph: 6.502985,
              rain: 350,
            })
            .then((response) => {
              console.log(JSON.stringify(response.data.message));
            });
        });
    });
  }, []);
  return (
    <div className="lg:flex sm:flex-none lg:h-screen">
      <WeatherMainInfo api={key} />
      {isLoading ? null : <MainContainer data={oneCall} />}
    </div>
  );
}

export default App;
