import { motion } from "framer-motion";
import React, { useState } from "react";

function Work() {
  const [elem, seElem] = useState([
    {
      heading: "Columbia Picture",
      subHeading: "celebrating a century of Cinema",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Cambium",
      subHeading: "pioneering sustainable Solutions",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)",
    },
    {
      heading: "PixelFlakes",
      subHeading: "Architectural marketing agency",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Studio D",
      subHeading: "Urbon and landscape desin",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798702/rendition/720p/file.mp4?loc=external&log_user=0&signature=b76cb0994de6beca7f6ba29e7eb52db1750d34600352dab2566c6ca16fcd817f",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/1300x1620/filters:quality(90)",
    },
  ]);

  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto p-5 sm:mx-20 sm:px-20">
        <div className="sm:text-center">
          <div className="flex gap-3 mt-16 sm:justify-center">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 sm:w-5"
              data-v-669b4a84=""
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
                data-v-669b4a84=""
              ></path>
            </svg>
            <h1 className="capitalize sm:text-xl "> Featured projects</h1>
          </div>
          <h1 className="text-6xl sm:text-9xl sm:font-semibold py-8 overflow-hidden">
            <motion.span
              initial={{ rotate: 90, y: "50%", opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.9 }}
              className="inline-block origin-left"
            >
              Work
            </motion.span>
          </h1>
          <p className="text-md leading-2">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>
        <div className="elems mt-10 sm:flex sm:flex-wrap ">
          {elem.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full sm:h-[120vh] sm:pl-[5vh] sm:w-1/2   "
              >
                <div className="w-full h-[104vw]  sm:h-[180vh] relative mr-5 overflow-hidden mt-10  ">
                  <motion.img
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    data-scroll
                    data-scroll-speed="-.1"
                    className=" hidden sm:block w-full sm:z-[2] sm:w-[100%] sm:absolute sm:top-0 sm:left-0 sm:h-[50%]  h-full object-cover"
                    src={item.image}
                    alt=""
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="block  w-full h-full sm:top-0  sm:object-cover z-[1] object-cover  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                    src={item.video}
                  ></video>
                </div>
                <div className="p-4 mt-5 sm:mt-[-80vh]">
                  <h3>{item.heading}</h3>
                  <h3 className="capitalize">{item.subHeading}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
