import React from "react";
import Arrow from "/assets/icon-arrow.svg";
import AngleLeft from "/assets/icon-angle-left.svg";
import AngleRight from "/assets/icon-angle-right.svg";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-img">
        <div className="carousel-control">
          <a href="button" role="button">
            <img src={AngleLeft} alt="left" />
          </a>
          <a href="button" role="button">
            <img src={AngleRight} alt="right" />
          </a>
        </div>
      </div>
      <div className="hero-text">
        <h1 className="hero-header">
          We are available <br />
          all across the globe
        </h1>
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
      <div className="img-left"></div>
      <div className="about-text">
        <h2 className="about-header">About our furniture</h2>
        <p className="about-note">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          obcaecati porro aliquam hic fugit officiis minus dolor consequuntur
          delectus reiciendis.
        </p>
      </div>
      <div className="img-right"></div>
    </div>
  );
};

export default Home;
