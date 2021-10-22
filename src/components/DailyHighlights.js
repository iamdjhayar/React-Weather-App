import React, { useEffect, useState } from 'react';

function DailyHighlights(){
    return(
        <div>
            <p className="font-bold">Todays Highlights</p>
            <div className="flex flex-row mt-5">
                <div className="w-4/12 bg-white rounded-md shadow-sm p-3 m-5">
                    <div className="text-gray-500 text-sm">
                        UV Index
                    </div>
                </div>
                <div className="w-4/12 bg-white rounded-md shadow-sm p-3 m-5">
                    <div className="text-gray-500 text-sm">
                        Wind Status
                    </div>
                </div>
                <div className="w-4/12 bg-white rounded-md shadow-sm p-3 m-5">
                    <div className="text-gray-500 text-sm">
                        Sunrise/Sunset
                    </div>
                </div>
            </div>
            <div className="flex flex-row mb-5">
                <div className="w-4/12 bg-white rounded-md shadow-sm p-3 m-5">
                    <div className="text-gray-500 text-sm">
                        Humidity
                    </div>
                </div>
                <div className="w-4/12 bg-white rounded-md shadow-sm p-3 m-5">
                    <div className="text-gray-500 text-sm">
                        Visibility
                    </div>
                </div>
                <div className="w-4/12 bg-white rounded-md shadow-sm p-3 m-5">
                    <div className="text-gray-500 text-sm">
                        Air Quality
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyHighlights