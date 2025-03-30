import { PlayCircleIcon } from "@heroicons/react/24/outline"
import { Startnavigation } from "../assets/icon/Startnavigation"

export const Herosection =()=>{
    return(
        <div className="h-[55vh] flex justify-center items-center text-center  ">
<div className=" font-sans ">
 <h1 className="text-5xl font-bold">Boost Your <span className="text-violet-600">Productivity</span> with <br /> Own Smart Saas Tools</h1>
<p className="font-medium font-sanss  text-gray-700 mt-4">Ready to experience the future work?signup of free trial and see how your SaaS solution <br /> can trnsform you business.No commitment,just rust results.</p>

<div className="mt-7 mr-5 flex justify-center items-center ">
    <button className="h-10 w-32 bg-violet-600 rounded-full mr-5 text-white text-md hover:bg-violet-500 flex justify-center items-center">Get started<Startnavigation/></button>
    <button className="h-10 w-32 outline-1 outline-solid rounded-full text-center flex justify-center items-center ">Get Demo <PlayCircleIcon className="h-6 w-6 ml-2"/></button>
</div>
</div>
        </div>
    )
}