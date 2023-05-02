import React from "react";
import "./MovieCard.css";

const MovieCard = ({ Moviename,Moviedescription }) => {
  return (
    <>
     
        <div className="hero-container">
          <div className="main-container">
            <div className="poster-container">
              <a href="#">
                <img
                  alt="MovieImage"
                  src="https://i.ibb.co/ThPNnzM/blade-runner.jpg"
                  className="poster"
                />
              </a>
            </div>
            <div className="ticket-container">
              <div className="ticket__content">
                <h4 className="ticket__movie-title">{Moviename}</h4>
                <p className="ticket__movie-slogan">
                  {Moviedescription}
                </p>
                <p className="ticket__current-price">$28.00</p>
                <p className="ticket__old-price">$44.99</p>
                <button className="ticket__buy-btn">Watch now</button>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default MovieCard;
