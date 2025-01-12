import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface SlidingBannerProps {
  images: string[]; // Array of image URLs
  interval?: number; // Optional interval in milliseconds
}

const SlidingBanner: React.FC<SlidingBannerProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const slides = [images[images.length - 1], ...images, images[0]];

  // Auto-slide logic
  useEffect(() => {
    if (isDragging || isAnimating) return;
    const autoSlide = setInterval(() => {
      goToNextSlide();
    }, interval);
    return () => clearInterval(autoSlide);
  }, [isDragging, isAnimating, interval]);

  const goToNextSlide = () => {
    if (isAnimating) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setIsAnimating(true);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setIsAnimating(true);
  };

  const handleDragStart = (clientX: number): void => {
    setIsDragging(true);
    setDragStartX(clientX);
    setIsAnimating(false);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const offset = clientX - dragStartX;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (dragOffset < -50) {
      goToNextSlide();
    } else if (dragOffset > 50) {
      goToPrevSlide();
    }
    setDragOffset(0);
    setIsDragging(false);
  };

  useEffect(() => {
    if (!isAnimating) return;

    const slider = sliderRef.current;
    const transitionEndHandler = () => {
      setIsAnimating(false);

      if (currentIndex === slides.length - 1) {
        setCurrentIndex(1);
        if (slider) {
          slider.style.transition = 'none';
          slider.style.transform = `translateX(-100%)`;
        }
      } else if (currentIndex === 0) {
        setCurrentIndex(slides.length - 2);
        if (slider) {
          slider.style.transition = 'none';
          slider.style.transform = `translateX(-${(slides.length - 2) * 100}%)`;
        }
      }
    };

    if (slider) {
      slider.addEventListener('transitionend', transitionEndHandler);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('transitionend', transitionEndHandler);
      }
    };
  }, [currentIndex, slides.length, isAnimating]);

  useEffect(() => {
    if (isAnimating && sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
    }
  }, [isAnimating]);

  const sliderStyle: React.CSSProperties = {
    transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
    transition: isDragging ? 'none' : undefined,
  };

  return (
    <div className="w-full flex flex-row justify-center">
      <div
        className="w-full max-w-[1600px] overflow-hidden relative cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        <div className="flex will-change-transform" ref={sliderRef} style={sliderStyle}>
          {slides.map((image, index) => (
            <div
              key={index}
              className="min-w-full box-border select-none pointer-events-none aspect-banner"
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 translate-y-[-50%] py-[10px] px-[10px] cursor-pointer z-10 h-full left-0 bg-gradient-to-l from-[rgba(105, 30, 30, 0.1)] to-[transparent] md:px-[20px]"
          onClick={goToPrevSlide}
        >
          <IoIosArrowBack className="w-[24px] h-[24px] fill-black md:w-[35px] md:h-[35px]" />
        </button>
        <button
          className="absolute top-1/2 translate-y-[-50%] py-[10px] px-[10px] cursor-pointer z-10 h-full right-0 bg-gradient-to-l from-[rgba(0, 0, 0, 0.1)] to-[transparent] md:px-[20px]"
          onClick={goToNextSlide}
        >
          <IoIosArrowForward className="w-[24px] h-[24px] fill-black md:w-[35px] md:h-[35px]" />
        </button>
      </div>
    </div>
  );
};

export default SlidingBanner;
