import { BookmarkIcon, BookmarkSquareIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline"

export const Pricing = () => {
    return (
        <div className="h-[60vh] grid grid-cols-3 gap-3 mt-7">
            <div className="bg-gray-200 rounded-2xl">
                <div className="h-10 w-10  bg-violet-600 flex justify-center items-center m-4 rounded-lg"><BookmarkIcon className="h-6 w-6" /></div>
                <div className="ml-3 mb-3">
                    <h3 className="font-bold text-2xl">Starter plan</h3>
                    <p className="text-sm text-gray-500 font-medium mt-4">Kick start Your jouney With Our Easy And <br /> Afforbable Starter Plan.
                        free</p>
                    <div className="w-3/4"><h1 className="font-bold text-2xl mt-3 mb-3">FREE</h1>
                        <hr className="text-gray-300" /></div>
                    <ul className="list-disc pl-2.5 mt-3">
                        <li>Basic Abalytics Dashboard </li>
                        <li>Task & Project Management 'Cloud Storage(Up To 5GB)</li>
                        <li>Email And Chat Support </li>
                        <li>Team Collabration Features</li>
                    </ul></div>
                <div className="flex justify-center"><button className="text-white text-md pl-2 rounded-xl bg-violet-600 w-3/4 h-10 hover:bg-violet-400 font-medium">Upgrade Now</button></div>
            </div>
            <div className="bg-gray-200 rounded-2xl">
                <div className="h-10 w-10 bg- bg-yellow-400 flex justify-center items-center m-4 rounded-lg"><BookmarkSquareIcon className="h-6 w-6" /></div>
                <div className="ml-3 mb-3">
                    <h3 className="font-bold text-2xl">Pro plan</h3>
                    <p className="text-sm text-gray-500 font-medium mt-4">Unlock Premium Features And Priority Support <br /> With Our Pro Plan.
                        </p>
                    <div className="w-3/4"><h1 className="font-bold text-2xl mt-3 mb-3">$14 <span className="text-gray-500 text-lg">/month</span></h1>
                        <hr className="text-gray-300" /></div>
                    <ul className="list-disc pl-2.5 mt-3">
                        <li>Advanced Data Analytics </li>
                        <li>Priority Customer Support </li>
                        <li>Customization Reporting Tools Extended COlud Storage </li>
                        <li>Dedicated Account Manager</li>
                    </ul></div>
                <div className="flex justify-center"><button className="text-white text-md pl-2 rounded-xl bg-violet-600 w-3/4 h-10 hover:bg-violet-400 font-medium">Upgrade Now</button></div>
            </div>
            <div className="bg-gray-200 rounded-2xl">
                <div className="h-10 w-10 bg- bg-violet-600 flex justify-center items-center m-4 rounded-lg">  <BuildingOfficeIcon className="h-6 w-6" /></div>
                <div className="ml-3 mb-3">
                    <h3 className="font-bold text-2xl">Enterprise plan</h3>
                    <p className="text-sm text-gray-500 font-medium mt-4">Unlock Premium Features And Priority Support <br /> With Our Pro Plan.
                        </p>
                    <div className="w-3/4"><h1 className="font-bold text-2xl mt-3 mb-3">$49 <span className="text-gray-500 text-lg">/month</span></h1>
                        <hr className="text-gray-300" /></div>
                    <ul className="list-disc pl-2.5 mt-3">
                        <li>Custom intgratin Solution</li>
                        <li>Dedicated Technical Support </li>
                        <li>Advancded Security Protocols </li>
                        <li>Enterprise Data Management</li>
                    </ul></div>
                <div className="flex justify-center"><button className="text-white text-md pl-2 rounded-xl bg-violet-600 w-3/4 h-10 hover:bg-violet-400 font-medium">Upgrade Now</button></div>
            </div>


        </div>
    )
}