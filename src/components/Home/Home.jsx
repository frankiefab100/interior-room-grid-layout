import React from "react";
import Arrow from "/assets/icon-arrow.svg";
import AngleLeft from "/assets/icon-angle-left.svg";
import AngleRight from "/assets/icon-angle-right.svg";
import HeroImg from "/assets/mobile-image-hero-1.jpg";
import ImgLeft from "/assets/image-about-dark.jpg";
import ImgRight from "/assets/image-about-light.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-img">
        <img className="img1" src={HeroImg} alt="hero image" />
        <div className="carousel-control">
          <button href="button" role="button">
            <img src={AngleLeft} alt="left" />
          </button>
          <button href="button" role="button">
            <img src={AngleRight} alt="right" />
          </button>
        </div>
      </div>
      <div className="hero-text">
        <h1 className="hero-header">We are available all across the globe</h1>
        <p className="hero-note">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione
          expedita temporibus aperiam ducimus ab natus consectetur incidunt
          deleniti, unde quas a est.
        </p>
        <div className="hero-cta">
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          obcaecati porro aliquam hic fugit officiis minus dolor consequuntur
          delectus reiciendis.
        </p>
      </div>
      <div className="img-right">
        <img src={ImgRight} alt="right image" />
      </div>
    </div>
  );
};

export default Home;
