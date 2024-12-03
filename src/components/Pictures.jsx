import gsap, { Linear } from 'gsap/all'
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

function Pictures() {

    const parent = useRef(null);
    const first = useRef(null);
    const second = useRef(null);
    const third = useRef(null);
    const fourth = useRef(null);

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: parent.current,
                start: '0 0',
                scrub: 1
            }
     });

     tl
     .to(first.current, {
        x: '50%',
        ease: Linear
     },'a')
     .to(second.current, {
        x: '-50%',
        ease: Linear
     },'a')
     .to(third.current, {
        x: '-50%',
        ease: Linear
     },'a')
     .to(fourth.current, {
        x: '50%',
        ease: Linear
     },'a')
   
    });

  return (
    <div ref={parent} className='w-full h-[70vh] bg-white sm:h-[100vh] flex items-center justify-center overflow-hidden' >
        

        <div className='w-[42%] h-[38vh] sm:w-[20%] sm:h-[70%]   relative' >
        <div ref={first} className='absolute w-[13vh] h-[19vh] sm:h-[45%] sm:w-[10rem] sm:top-[8%] left-[85%] top-[10%]   ' >
            <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)" alt="" />
        </div>
        <div ref={second} className='absolute w-[20vh] sm:w-[15rem] sm:top-[20%] aspect-video  -left-[58%] top-[30%] ' >
            <video autoPlay muted loop className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
        </div>
        <div ref={third} className='absolute w-[20vh] h-[12vh] sm:h-[9rem] sm:top-[65%] sm:-left-[70%] sm:w-[16rem] -left-[55%] top-[80%]' >
            <img  className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)"></img>
        </div>
        <div ref={fourth} className='absolute w-[27vh] h-[18vh] -right-[65%] top-[85%]  sm:-right-[93%] sm:h-[10rem] sm:w-[18rem] ' >
            <video autoPlay muted loop className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
        </div>
            <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)" alt="" />
        </div>
    </div>
  )
}

export default Pictures