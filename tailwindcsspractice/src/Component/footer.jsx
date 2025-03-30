export const Footer = () =>{
    return(
        <div className="h-[40vh] w-full bg-gray-200" >
            <div className="grid grid-cols-7 gap-2 h-[40vh] w-full">
                <div className="col-span-2 flex  flex-col justify-center items-center ">
                    <div className="text-4xl font-semibold px-3 font-serif text-violet-600  ">SaasTools</div>
                    <p className="text-gray-500 text-sm font-medium">Elevate your business with <br /> our SaaS solution.</p>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                    <div className="flex flex-col justify-between">
                        <ul className="space-y-4 "> 
                            <li className="text-black font-medium text-md">Navigaton </li>
                            <li>Home</li>
                            <li>Features</li>
                            <li>Privacy Policy</li>
                            <li> Terms & Condition</li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-1  flex justify-center items-center">
                    <div className=" ">
                        <ul className=" space-y-3">
                            <li className="text-black font-medium text-md">Contact</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                            <li>Features</li>
                            <li>supports</li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-1 flex justify-center items-center ">
<div>
    <ul className="space-y-3">
        <li className="font-medium text-md text-black"> Company About US</li>
    <li> Careers</li>
    <li>Contact Us</li>
    <li> Projects</li></ul>
</div>
                </div>
                <div className="col-span-2 flex justify-center items-center ">
                    <div>
                        <ul className="space-y-3">
                            <li className="text-md text-black font-medium">Company</li>
                            <li>002-828-232</li>
                            <li>chamsman937@gamil.com</li>
                           <li> chamsman937@gamil.com</li>
                            <li>775 Rolling Green Rd.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}