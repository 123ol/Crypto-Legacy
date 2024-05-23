import React, { useEffect,useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { FaFacebook, FaInstagram   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
const Home = () => {
  useEffect(() => {
    const scrollRevealOption = {
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
    };

    ScrollReveal().reveal('.header__image img', {
      ...scrollRevealOption,
      origin: 'right',
    });
    ScrollReveal().reveal('.header__content h2', {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal('.header__content h1', {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal('.header__content p', {
      ...scrollRevealOption,
      delay: 1500,
    });
    ScrollReveal().reveal('.sub_pat h2', {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal('.sub_pat p', {
      ...scrollRevealOption,
      delay: 1500,
    });
    ScrollReveal().reveal('.header__btns', {
      ...scrollRevealOption,
      delay: 2000,
    });

    

   
  }, []);

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const slides = [
    { type: 'image', src: 'assets/d45709_228255c9d96a40abab64ea0ab63aef98~mv2.gif' },
    { type: 'video', src: 'assets/video.mp4' },
   
  ];

  return (<>
    <header className="section__container header__container">
      <div className="header__image">
        <img src="assets/photo.jpg" alt="header" />
      </div>
      <div className="header__content">
        <h2>LISTEN TO TRADING LESSONS ANYWHERE, ANYTIME.</h2>
        <p>
          Crypto Legacy combines the power of text-to-speech technology with comprehensive crypto trading lessons. Learn on the go and become a confident trader.
        </p>
        <div className="header__btns">
          <a href="#">
            <img src="assets/google-play.jpg" alt="google-play" />
          </a>
          <a href="#">
            <img src="assets/app-store.jpg" alt="app-store" />
          </a>
        </div>
      </div>
    </header>
   
<div className="main_body" id="ben">
  <h1>Benefits</h1>
  <div className="sub__body">
    <div className="sub_pat">
      <div className="s_tab"><img src="assets/icons8-delivery-time-50.png" alt="app-store" />
      <h2> Accessibility </h2></div>
      <p>Whether you're commuting, working out, or relaxing at home, Crypto Legacy makes it easy to learn about crypto trading. Just listen and learn!</p>
    </div>
    <div className="sub_pat"> 
    <div className="s_tab right"><img src="assets/icons8-listing-64.png" alt="app-store" /><h2>Time-Saving  </h2></div>
      <p>Our text-to-speech feature saves you time by allowing you to absorb information while doing other tasks. Make the most of your day with efficient learning.</p></div>
      <div className="sub_pat"> 
    <div className="s_tab"> <img src="assets/icons8-loud-speaker-64.png" alt="app-store" /> <h2> Comprehensive Learning Path  </h2></div>
    
      <p>From beginner to expert, Crypto Legacy provides a structured learning path to guide you through the complexities of cryptocurrency trading.</p></div>
  </div>
</div>
<div className="p_d">
<div className="bd_img">
<div className="min_video">
<h1>Evaluate the quality of our other products and services</h1>

<div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            {slide.type === 'image' ? (
              <img src={slide.src} alt={`Slide ${index}`} />
            ) : (
              <video controls>
                <source src={slide.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </Slider>
      <div className="slider-buttons">
        <button onClick={() => sliderRef.current.slickPrev()}><FaCircleArrowLeft /></button>
        <button onClick={() => sliderRef.current.slickNext()}><FaCircleArrowRight /></button>
      </div>
    </div>
</div>
<div>
 

  <header className="section__container header__container">
      <div className="header__image sim_bod">
      <img src="assets/photo.png" alt="app-store" />
      </div>
      <div className="header__content">
      <p>Crypto Legacy converts written trading lessons into spoken words, allowing you to learn hands-free</p> 
        <div className="header__btns">
          <a href="#">
            <img src="assets/google-play.jpg" alt="google-play" />
          </a>
          <a href="#">
            <img src="assets/app-store.jpg" alt="app-store" />
          </a>
        </div>
      </div>
    </header>

  </div></div> </div>
  <div class="container">
        <h1>Subscribe to our Newsletter</h1>
        <div class="email">
            <input type="email" placeholder="Email"/>
            <i class="icon fa fa-envelope"></i>
            <button type="submit">Subscribe</button>
        </div>
    </div>

    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="#"><FaFacebook  className='icons'/></a>
          <a href="#"><FaInstagram  className='icons'/></a>
          <a href="#"><FaXTwitter  className='icons'/></a>
        </div>
        <div className="footerNav">
          <ul>
            <li><a href="#">Home</a></li>
            
            <li><a href="#ben">Benefits</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Contact Us</a></li>
          
          </ul>
        </div>
      </div>
      <div className="footerBottom">
      
      </div>
    </footer>
</>
  );
};

export default Home;
