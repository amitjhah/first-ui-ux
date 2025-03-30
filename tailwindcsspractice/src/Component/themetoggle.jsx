import { useState, useEffect } from "react";

const ThemeToggle = () => {
    return (
        <div className="flex">
            <span className="mr-3">Monthly</span>   <div className="h-8 w-16 border-1 border-black rounded-2xl bg-violet-500">
           <div className="h-6 w-6 border-1 border-black rounded-3xl m-0.5 bg-white "></div> 
        </div><span className="ml-3">annually</span>
        </div>
    )
};

export default ThemeToggle;
