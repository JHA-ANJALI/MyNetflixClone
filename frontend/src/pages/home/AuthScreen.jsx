import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AuthScreen() {
    const [email, setEmail] = useState('');

    const navigate=useNavigate();
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
        navigate("/signup?email="+email)
    }
  return (

    <div className="hero-bg relative">

    <header className="max-w-6xl mx-auto flex items-center justify-between p-4 pb-10">
        <img src="/netflix-logo.png" alt='Netflix Logo' className='w-32 md:w-52'/>
        <Link to={"/login"} className="text-white bg-red-600 py-1 px-2 rounded">
            Sign In
        </Link>
    </header>

    <div className='flex flex-col item-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Unlimited movies,cancel anytime.</h1>
        <p className="text-lg mb-4">Watch anywhere? Cancel anytime.</p>
        <p className="mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
        <form className="flex flex-col md:flex-row gap-4 w-1/2 justify-center mx-auto" onSubmit={handleFormSubmit}>
            <input type="email" 
            placeholder="Email address" 
            className="p-2 border bg-black/60 rounded border-gray-700 focus:ring"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <button className="bg-red-600 text-white text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
            Get Started
            <ChevronRight className="size-8 md:size-9"/></button>
        </form>

    </div>

    {/*    separator */}
    <div className='h-2 w-full bg-[#232323]' aria-hidden='true'/>
        {/* first section */}
        <div className="py-10 bg-black text-white">
            <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2 ">
                {/* leftside */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Enjoy on your TV</h2>
                    <p className="text-lg md:text-xl">
                    Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </p>
                </div>
                {/* rightside */}
                <div className="flex-1 relative">
                    <img src="/tv.png" alt='Tv image' className="mt-4 z-20 relative"/>
                    <video className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
                    playsInline autoPlay={true} muted loop>
                        <source src="/hero-vid.m4v" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
   



       {/*    separator */}
       <div className='h-2 w-full bg-[#232323]' aria-hidden='true'/>
         {/* second section */}
         
         <div className="py-10 bg-black text-white">
            <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2 ">

                {/* leftside */}
                <div className="flex-1">
                    <div className="relative">
                        <img src='/stranger-things-lg.png' alt= "Stranger Things Image" className="mt-4"/>

                        <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 ronded-md px-2">
                            <img src="/stranger-things-sm.png" alt="image" className="h-full"/> 

                            <div className="flex justify-between items-center w-full">

                            <div className="flex flex-col gap-0">
                            <span className="text-md lg:text-lg font-bold">Stranger Things</span>
                            <span className="text-sm text-blue-500">Downloading...</span>
                            
                            </div>
                            <img src='/download-icon.gif' alt="download icon" className="h-12"/>
                            </div>
                            
                        </div>

                    </div>

                </div>


                {/* rightside */}
                <div className="flex-1 md:text-left text-center">
                     <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balace">Download your shows to watch offline</h2>
                     <p className="text-lg md:text-xl">Save your favourites easily and always have somthing to watch.</p>
                </div>

            </div>
         </div>




        {/*    separator */}
        <div className="h-2 w-full bg-[#232323]" aria-hidden="true"/>
        {/* third section */}
        <div className="py-10 bg-black text-white">
            
            <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
                {/* left side */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Watch everywhere</h2>
                    <p className="text-lg md:text-xl">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>



                {/* rightside */}
                <div className="flex-1 relative overflow-hidden">
                    <img src='/device-pile.png' alt='device image' className='mt-4 z-20 relative'/>
                    <video
                    className="absolute top-2 left-1/2 -translate-x-1/2  h-4/6 z-10 max-w-[63%]"
                    playsInline autoPlay={true} muted loop>
                        <source src='/video-devices.m4v' type='video/mp4'/>
                    </video>
                </div>
            </div>

        </div>


          {/* separator */}
          <div className="h-2 w-full bg-[#232323]" aria-hidden="true"/> 
          {/* fourth section */}
          <div className="py-10 bg-black text-white">
            <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
                {/* left */}
                <div className="flex-1 relative">
                    <img src="/kids.png" alt="Kids image" className="mt-4"/>
                </div>
                {/* right */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Create profile for kids</h2>
                    <p  className="text-lg md:text-xl">Send kids on adventures with thier favourite characters in a space made just for them-free with your membership.</p>
                </div>
            </div>
          </div>


                            







    </div>
    
   )
}
