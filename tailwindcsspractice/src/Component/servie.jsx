import { BookOpenIcon, BuildingStorefrontIcon, ChartBarIcon } from "@heroicons/react/24/outline"

export const Service = () => {
    return (
        <div className="mt-7 h-[30vh">
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-2xl text-gray-400 font-medium">Basic pack</h3>
                <h2 className="text-2xl text-black font-bold antialiased mb-3">Services included Has <span className="text-violet-600"> Every Plan</span></h2>

            </div>
            <div className="grid grid-cols-3 gap-3 h-52 ">
                <div className=" ml-2 bg-gray-300 rounded-2xl">
                    <div className="bg-violet-600 w-10 h-10 m-3 flex justify-center items-center rounded-sm"> <BookOpenIcon className="h-6 w-6 text-white" /></div>
                    <h2 className="text-black text-2xl font-bold antialiased ml-3">Product Laungh</h2>
                    <p className="text-sm font-medium text-gray-600 mt-4 ml-3">Our team ensure a smooth product Laungh, <br />drivving immediate engagement.</p>
                    <p className="text-[12px] font-medium hover:font-bold mt-4 ml-3">Learn more.</p>
                </div>
                <div className="  bg-gray-300 rounded-2xl"><div className="bg-violet-600 w-10 h-10 m-3 flex justify-center items-center rounded-sm"><ChartBarIcon className="h-6 w-6 text-white " />
                </div>
                <h2 className="text-black text-2xl font-bold antialiased ml-3">Revenue Generation</h2>
                    <p className="text-sm font-medium text-gray-600 mt-4 ml-3">Our straties are desinged to drive revenue<br />generation and maximize business growth</p>
                    <p className="text-[12px] font-medium hover:font-bold mt-4 ml-3">Learn more.</p>
                </div>
                <div className=" ml-2 bg-gray-300 rounded-2xl"><div className="bg-violet-600 w-10 h-10 m-3 flex justify-center items-center rounded-sm"><BuildingStorefrontIcon className="h-6 w-6 text-white" /></div>
                <h2 className="text-black text-2xl font-bold antialiased ml-3">Quich Solution</h2>
                    <p className="text-sm font-medium text-gray-600 mt-4 ml-3">Our team deliver quick solution to resolve<br />your issue eddiciently</p>
                    <p className="text-[12px] font-medium hover:font-bold mt-4 ml-3">Learn more.</p>
                </div>
                
            </div>
        </div>
    )
}