import React, { useEffect, useState } from 'react';
import DailyHighlights from './DailyHighlights';
import DaysOfForcast from './DaysOfForcast';

function MainContainer(){
    return(
        <div className="w-8/12 p-10 bg-gray-100">
            <DailyHighlights/>
            <DaysOfForcast/>
        </div>
    )

}

export default MainContainer