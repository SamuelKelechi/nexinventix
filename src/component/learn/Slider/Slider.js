import React, { useState, useEffect } from "react";
import "./Slider.css";
import Slide1 from "../../assets/slide1.jpg";
import Slide2 from "../../assets/slide2.avif";
import Slide3 from "../../assets/slide3.jpeg";
import Slide4 from "../../assets/slide4.jpeg";
import Slide5 from "../../assets/slide5.jpeg";



const Slider = () => {
  const slides = [
    {
      image: Slide1,
    },
    {
      image: Slide2,
    },
    {
      image: Slide3,
    },
    {
      image: Slide4,
    },
    {
      image: Slide5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={goToPreviousSlide}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={goToNextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;