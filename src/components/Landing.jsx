import React from 'react'
import {motion} from 'framer-motion'
import {Power4} from 'gsap/all';

function Landing() {
  return (
    <div className='relative w-full  h-[150vh] sm:h-[300vh]'>
        <div className='picture w-full h-full overflow-hidden'>
            <img
            data-scroll
            data-scroll-speed='-1'
             className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="" />
        </div>

        <div className='w-full absolute top-0' >
            <div className='  max-w-screen-2xl mx-auto  px-5 sm:px-20 text-white  text-xl '>
            <div className='para mt-72 sm:mt-[29rem]' >

          {['Global digital design studio partering with','Brands and businesses that create exceptional','Experience where people','live, work and unwind.'].map((item,index)=>{
            return (
              <p key={index} className='text-md sm:text-3xl leading-tight  overflow-hidden'>
              <motion.span
              initial={{rotate: 90, y: '100%', opacity: 0}}
              animate={{rotate: 0, y: 0, opacity: 1}}
              transition={{ease:[0.65, 0, 0.35, 1], duration: 1, delay: index*.1}}
               className='inline-block origin-left  ' >{item}</motion.span>
            </p>
            )
          })}
         
            </div>

            <div className=' mt-10' >
              {['Digital','Design','Experience'].map((item,index)=>{
                return(
                  <h1 key={index} className='text-6xl  sm:text-[17rem] leading-none py-10 -mt-12 tracking-tighter  overflow-hidden '>
            <motion.span
              initial={{rotate: 90, y: '100%', opacity: 0}}
              animate={{rotate: 0, y: 0, opacity: 1}}
              transition={{ease:[0.65, 0, 0.35, 1], duration: 1, delay: 1+index*.1}}
               className='inline-block origin-left  ' >{item}</motion.span>
            </h1>

                )
              })}

          </div>

          <div className='para2' >
          <p className='sm:w-1/2 sm:mt-24 sm:text-2xl mt-10  text-xl' >We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.</p>

          <a className='border-b-[1.5px] sm:text-xl mt-10 sm:mt-14 inline-block border-zinc-300' href="#"> The Studio</a>
          </div>

           </div>
        </div>
         
          
          {/*


          <div className=' w-full flex justify-between items-center mt-20' >
            <div>
              <a className='border-b-2' href="">The studio</a>
            </div>
            <div className='ml-64'>
              <h1>Work</h1>
              <h1>Studio</h1>
              <h1>News</h1>
              <h1>Contact</h1>
            </div>
            <div>
             <h1> hello@exoape.com</h1>
             <h1>8269434702</h1>
              
            </div>
          </div> */}

    </div>
   
  )
}

export default Landing



