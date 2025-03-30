
export const Information = () => {
    return (
        <div className="h-screen mt-14">


            <div className="grid grid-cols-2 ">
                <div className=" flex flex-col justify-center  ml-6 h-[50vh] ">
                    <div className="bg-violet-500 text-white rounded-lg h-7 w-42 pl-2">Product Laungh Tools</div>
                    <div className="mt-2 "><h1 className="text-3xl font-medium font">Streamline Your Product <br /> Launch With Our <span className="text-violet-600">Powerful</span> <br /> All-In-One Tool</h1>
                        <p className="font-medium mt-4 text-left text-gray-600">Launch your product with ease using our all-in-one tool designed <br /> for success.Steamline very step from panning to execution.and <br /> engade audience effortenssly,  </p>
                    </div>
                </div>
                <div className="">
                <img src='/public/saastool1.jpg' alt="SaasTool" className=" h-[50vh] w-full rounded-sm" />
                </div>
            </div>
            <div className="grid grid-cols-2 mt-6">
                    <div className=""> 
                        <img src="/public/saastool2.jpg" alt="image2" className="ml-2 rounded-sm  h-[50vh] w-full"/>
                    </div>
                    <div className="ml-6">
<p className="h-8 w-42 pt-1 pl-2  mt-6 rounded-lg text-white bg-violet-500">Revenue Generation</p>
<h2 className="text-3xl text-left font-medium mt-4">Accelarate Revenue Genetation With Proven <span className="text-violet-600"> Strategies</span> And Tools

</h2>
<p className="text-gray-600 font-medium mt-3">Masimize your business potentail with our proven strategiews for revenue <br /> generation.Drive growth,increase profits,and achieve long-term <br /> success

</p>
                    </div>

                </div>
        </div>

    )
}