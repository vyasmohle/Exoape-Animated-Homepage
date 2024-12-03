import React from 'react'

function Footer() {
  return (
    <div className='w-full h-[90vh] sm:h-[115vh] bg-black text-white py-20 sm:px-20 px-5' >  
    <div className='w-full flex justify-between px-2 gap-5' >
        <div>
            <h1 className='text-6xl sm:text-9xl sm:font-semibold'>Our</h1>
            <h1 className='text-6xl sm:text-9xl sm:font-semibold'>Story</h1>
        </div>
        <div className='w-[62%] sm:w-[50rem] aspect-video sm:h-[45vh] ' >
        <video autoPlay muted loop className='w-full h-full object-cover' src="https://videos.pexels.com/video-files/11805191/11805191-uhd_2548_1440_24fps.mp4"></video>
        </div>
    </div>

    <div className='text w-[40vh]  sm:w-full ' >
        <p className='py-6 sm:mt-8 sm:text-xl sm:w-[35%] ' >The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
        <a className=' inline-block text-lg border-b-[.7px] border-zinc-300' href="#"> Our Story</a>
        <hr className='my-8 w-[50vh] sm:w-full' />

        <div className='flex justify-around sm:justify-start sm:gap-10 sm:ml-[20vh] '>
            <div className='text-zinc-400 flex flex-col gap-2 sm:text-lg text-md'  >
                <h1>Work</h1>
                <h1>studio</h1>
                <h1>News</h1>
                <h1>Contact</h1>
            </div>
            <div  className='text-zinc-400 flex flex-col gap-2 sm:text-lg text-md'>
                <h1>Behence</h1>
                <h1>Dribbble</h1>
                <h1>Twitter</h1>
                <h1>Instagram</h1>
            </div>
            
        </div>
        
    </div>

    </div>
  )
}

export default Footer