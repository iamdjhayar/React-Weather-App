import React, { useEffect, useState } from 'react';
import WeatherMainInfo from './components/WeatherMainInfo'
import DaysOfForcast from './components/DaysOfForcast'
import DailyHighlights from './components/DailyHighlights'
import MainContainer from './components/MainContainer';

function App() {
  return(
    <div className="flex h-screen">
      <WeatherMainInfo/>
      <MainContainer/>
    </div>
  )
}

export default App;
