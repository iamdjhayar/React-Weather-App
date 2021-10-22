import React from 'react';
import DailyHighlights from './DailyHighlights';
import DaysOfForcast from './DaysOfForcast';

function MainContainer(props){
    console.log(props)
    return(
        <div className="w-8/12 p-10 bg-gray-100">
            <DailyHighlights data={props.data.current}/>
            <DaysOfForcast/>
        </div>
    )

}

export default MainContainer