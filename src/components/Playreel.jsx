import React from "react";
import { useEffect, useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { Power4 } from "gsap";

function Playreel() {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: 1,
        markers: false,
      },
    });

    tl.to(
      videodiv.current,
      {
        width: "100%",
        height: "100%",
        ease: Power4,
      },
      "a"
    )
      .to(
        play.current,
        {
          x: "100%",
          scale: 1,
          ease: Power4,
        },
        "a"
      )
      .to(
        reel.current,
        {
          x: "-100%",
          scale: 1,
          ease: Power4,
        },
        "a"
      );
  });

  return (
    <div
      ref={parent}
      className="w-full h-screen overflow-hidden relative bg-black"
    >
      <div
        ref={videodiv}
        className=" videopart  rounded w-40 sm:w-96 aspect-video overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        ></video>
      </div>
      <div className="w-full h-full absolute  flex flex-col justify-between text-white py-20">
        <div className="w-full flex items-center justify-center gap-3 ">
          <svg
            data-v-669b4a84=""
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000svg"
            className="w-5  "
          >
            <path
              data-v-669b4a84=""
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <h3>Work in motion</h3>
        </div>
        <h1 className=" flex justify-center gap-24 sm:gap-96">
          <div
            ref={play}
            className="text-5xl font-light sm:text-9xl sm:font-normal"
          >
            Play
          </div>
          <div
            ref={reel}
            className="text-5xl font-light sm:text-9xl sm:font-normal"
          >
            Reel
          </div>
        </h1>
        <p className="text-center px-10 text-sm">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
}

export default Playreel;
