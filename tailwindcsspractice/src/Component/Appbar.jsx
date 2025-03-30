import { Link } from "react-router-dom"

export const Appbar = () => {
    return (
        <div className="grid grid-cols-6 w-full h-20 bg-gray-300 items-center">
            <div className="text-4xl font-semibold px-3 font-serif text-violet-600 col-span-1 flex justify-center ">SaasTools</div>
            <div className="col-span-3 flex justify-evenly  ">
                <button className="hover:font-bold font-medium">Blog</button>
                <button className="hover:font-bold font-medium">pricing</button>
                <button className="hover:font-bold font-medium"> testmonial</button>
                <button className="hover:font-bold font-medium">Contact us</button>
                <button className="hover:font-bold font-medium">Service</button>
            </div>
            <div className="col-span-2 flex justify-evenly ">
                <button className="text-black font-light">Signin</button>
                <button className="text-white bg-violet-600 h-12 w-30 rounded-xl hover:bg-violet-500"> Sign Up</button>
            </div>
        </div>
    )
}