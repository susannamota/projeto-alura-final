import React from 'react';
import YouTube from 'react-youtube';
import './Banner.css';

const Banner = () => {
  const videoOptions = {
    width: '650',
    height: '400',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="banner" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1528991281749-0092cfc77c6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}>
      <div className="banner-content">
        <div className="badge">
          <img src="/img/jazz-small.png" alt="Front End Badge" />
        </div>
        <h1>Calming Jazz Records That Will Feed Your Soul</h1>
        <p>All music rights belong to their rightful owners. Please support the musicians and buy their music.
        #vinylmix #calm   #jazz  </p>
      </div>
      <div className="video-placeholder">
        <YouTube videoId="_EKh6b3I91A" opts={videoOptions} />
      </div>
    </div>
  );
};

export default Banner;