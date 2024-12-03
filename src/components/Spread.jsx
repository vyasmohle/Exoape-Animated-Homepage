import { motion } from 'framer-motion'
import React from 'react'

function Spread() {

  return (
    <div className='w-full h-[65vh]  sm:h-[100vh]  ' >
        <div className='max-w-screen-xl  mx-auto p-5 sm:px-10 h-32 py-20 ' >
            <div className='flex items-center justify-center gap-3' >
            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path>
            </svg>
            <h1 className='capitalize text-md' >In the media</h1>
            </div>

            <div className='text-center mt-5 py-5 ' >
              {['Spread', 'The News'].map((item, index)=>{
                return (

                  <h1 key={index} className='text-5xl sm:text-9xl sm:font-normal sm:leading-[15vh] tracking-tighter font-semibold' >
                <motion.span 
              initial={{rotate:90, y:'50%', opacity:0}}
              whileInView={{rotate:0, y:0, opacity:1}}
              viewport={{once: true}}
              transition={{ease:[0.65, 0, 0.35, 1], duration: 0.9}}
              className='inline-block origin-left' >{item}</motion.span>
                </h1>

                )
              })}
                

                <p className='mt-5  w-[70%] sm:mt-12 sm:w-1/3 text-lg mx-auto leading-2' >Find out more about our work on these leading design and technology platforms.</p>

                <a className='mt-5 sm:mt-12 sm:mb-[20vh]  inline-block text-lg border-b-[.7px] border-zinc-700' href="#"> Browse all news</a>

            </div>
        </div>
        
    </div>
  )
}

export default Spread