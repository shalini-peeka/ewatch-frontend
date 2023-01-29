import React from "react";
import img1 from "./images/ewatch1.jpg";
import img2 from "./images/img1.jpg";
import img3 from "./images/img2.jpg";

function Home() {
  return (
    <div>
      <div>
    </div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={img1} alt="First slide" height={'500px'}  />
      <div className="carousel-caption d-none d-md-block">
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img2} alt="Second slide" />
      <div className="carousel-caption d-none d-md-block">
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img3} alt="Third slide" />
      <div className="carousel-caption d-none d-md-block">
    
  </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default Home;
