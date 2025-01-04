import React, { useState, useEffect } from "react";
import Arrow from "/assets/icon-arrow.svg";
import AngleLeft from "/assets/icon-angle-left.svg";
import AngleRight from "/assets/icon-angle-right.svg";
import { ITEMS } from "../../data/carouselItems";
import ImgLeft from "/assets/image-about-dark.jpg";
import ImgRight from "/assets/image-about-light.jpg";
import "./Home.css";

const Home = () => {
  const [position, setPosition] = useState(0);
  const [play, setPlay] = useState(true);

  let autoPlay;

  useEffect(() => {
    autoPlay =
      play &&
      setTimeout(() => {
        setPosition(position === ITEMS.length - 1 ? 0 : position + 1);
      }, 3000);
  });

  return (
    <div className="home">
      <div
        className="hero-img"
        onMouseEnter={() => {
          setPlay(false);
          clearTimeout(autoPlay);
        }}
        onMouseLeave={() => setPlay(true)}
      >
        <div className="carousel-image">
          {ITEMS.map((image, index) => {
            return (
              <picture key={image.id}>
                <source
                  className={
                    index === position ? "carousel active" : "carousel"
                  }
                  media="(max-width: 768px)"
                  srcSet={image.mobile}
                />
                <img
                  className={
                    index === position ? "carousel active" : "carousel"
                  }
                  src={image.desktop}
                  alt={`Image${image.id}`}
                />
              </picture>
            );
          })}
        </div>
        <div className="carousel-control">
          <button
            onClick={() =>
              setPosition(position === ITEMS.length - 1 ? 0 : position + 1)
            }
          >
            <img src={AngleLeft} alt="left" />
          </button>
          <button
            onClick={() =>
              setPosition(position === ITEMS.length - 1 ? 0 : position + 1)
            }
          >
            <img src={AngleRight} alt="right" />
          </button>
        </div>
      </div>
      <div className="carousel-text">
        <div className="heading">
          {ITEMS.map((title, index) => {
            return (
              <h1
                key={index}
                className={index === position ? "carousel active" : "carousel"}
              >
                {title.heading}
              </h1>
            );
          })}
        </div>
        <div className="paragraph">
          {ITEMS.map((text, index) => {
            return (
              <p
                key={index}
                className={index === position ? "carousel active" : "carousel"}
              >
                {text.body}
              </p>
            );
          })}
        </div>
        <div className="btn" role="button">
          Shop Now
          <img src={Arrow} alt="arrow icon" />
        </div>
      </div>
      <div className="img-left">
        <img src={ImgLeft} alt="left image" />
      </div>
      <div className="about-text">
        <h2 className="about-header">About our furniture</h2>
        <p className="about-note">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="img-right">
        <img src={ImgRight} alt="right image" />
      </div>
    </div>
  );
};

export default Home;
