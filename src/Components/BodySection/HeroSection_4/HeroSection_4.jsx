import React, { useEffect, useState, useRef } from "react";
import image1 from "../../../assets/PF_image_1.png";
import image2 from "../../../assets/PF_image_2.png";
import image3 from "../../../assets/PF_image_3.png";
import styles from "../HeroSection_4/HeroSection_4.module.css";

const HeroSection_4 = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const imageList = [image1, image2, image3];

  // Move to next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  // Move to previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  // Start autoplay
  const startAutoplay = () => {
    setPlaying(true);
  };

  // Stop autoplay
  const stopAutoPlay = () => {
    setPlaying(false);
    clearInterval(autoPlayRef.current);
  };

  // Restart autoplay after manual navigation
  const restartAutoPlay = () => {
    stopAutoPlay(); // Stop current autoplay
    setTimeout(startAutoplay, 5000); // Restart autoplay after 5s delay
  };

  // Handle autoplay effect
  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(nextSlide, interval);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isPlaying, currentIndex]); // Also depend on `currentIndex` to ensure smooth transitions

  return (
    <div className={`${styles.container4} relative overflow-hidden pt-0`}>
      <div className="m-0 flex w-full overflow-x-auto p-0">
        <div className={`${styles.slider} relative flex`}>
          <div className="relative h-full w-full">
            <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
              <img
                src={imageList[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="-z-1 h-full w-full object-cover transition-transform duration-300 ease-in-out"
              />
            </div>

            {/* Buttons */}
            <div className="absolute bottom-[30px] z-3 mx-auto my-0 flex w-full justify-between gap-[12px] px-[calc(var(--spacing)*2.5)] sm:justify-center sm:gap-[16px] lg:px-[calc(var(--spacing)*4)]">
              
              {/* Previous Button */}
              <button
                onClick={() => {
                  prevSlide();
                  restartAutoPlay();
                }}
                className={`${styles.btn} size-[44px] p-0 text-primary sm:size-[56px]`}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Pause/Play Button */}
              <div className="flex">
                <button
                  className={`${styles.btn} size-[44px] p-0 sm:size-[56px]`}
                  onClick={isPlaying ? stopAutoPlay : startAutoplay}
                >
                  {isPlaying ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="6" y="5" width="4" height="14" fill="currentColor" />
                      <rect x="14" y="5" width="4" height="14" fill="currentColor" />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Next Button */}
              <button
                onClick={() => {
                  nextSlide();
                  restartAutoPlay();
                }}
                className={`${styles.btn} size-[44px] p-0 text-primary sm:size-[56px]`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection_4;
