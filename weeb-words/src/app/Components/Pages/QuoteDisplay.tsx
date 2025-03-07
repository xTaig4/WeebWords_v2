'use client'

import React from 'react';

const QuoteDisplay: React.FC = () => {
    return (
        <div className="flex items-center justify-center mt-30 ml-28">
            <div className="grid grid-cols-2 gap-4 w-3/4">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-xl font-semibold mb-4 text-white">"A hero is not the one who never falls. He is the one who gets up again and again - Rock Lee"</p>
                    <button className="bg-blue-500 text-white p-2 rounded-lg">Click Me</button>
                </div>
                <div className="flex items-center justify-center ">
                    <img
                        src="https://i.pinimg.com/736x/80/27/9b/80279bc1d59ae2ffd1ff07aee8b87b04.jpg"
                        alt="Sample"
                        className="h-160 rounded-4xl max-h-120 max-w-120"
                    />
                </div>
            </div>
        </div>
    );
}

export default QuoteDisplay;

