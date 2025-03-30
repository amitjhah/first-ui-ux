import { Startnavigation } from "../assets/icon/Startnavigation"
import ThemeToggle from "./themetoggle"
export const Review = () => {
    return (
        <div className="h-screen flex flex-col items-center mt-10">
            <div className="h-1/6 ">
                <button className="h-10 w-32 bg-violet-600 rounded-full mr-5 text-white text-md hover:bg-violet-500 flex justify-center items-center">Get started<Startnavigation /></button>

            </div>
            <div className=" h-1/3 w-full text-center">
                <h3 className="text-gray-500 text-xl font-medium mt-4 ">Pricing</h3>
                <div className="w-full mt-3">
                    <h1 className="text-5xl font-bold scale-x-150 ">Affordable Plan to Scale Your <span className="text-violet-600">Business</span></h1>
                    <p className="text-md text-gray-600 mt-5">Explore our flexible pricing plans to suit businesses of all sixes.Whether you're just starting out or scaing up, <br />
                        we have the perfect plan for you
                    </p>
                </div>

            </div>
            <div>
                <ThemeToggle />
            </div>
            <div className="mt-10 text-center">
                <h3 className="text-2xl text-gray-500 font-medium">Frequenlty Answer Questions</h3>
                <div className=" mt-8"><h1 className="text-5xl font-bold " >Common Queries <span className="text-violet-600">Solved</span>,Quick  <br />Answers For You
                </h1></div>
            </div>
        </div>
    )
}