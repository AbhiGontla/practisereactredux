import React from "react";

const SampleCarousel = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZgXxeZrWNaSyc01XIxHAOQaOQyfz1lpX_Q&s"
            className="d-block w-100"
            alt="First Slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First Slide</h5>
            <p>This is the first slide description.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/I/71Xg-xZlFDL._AC_UF1000,1000_QL80_.jpg"
            className="d-block w-100"
            alt="Second Slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second Slide</h5>
            <p>This is the second slide description.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.marvel.com/content/1x/002irm_ons_mas_dsk_01_0.jpg"
            className="d-block w-100"
            alt="Third Slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third Slide</h5>
            <p>This is the third slide description.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SampleCarousel;