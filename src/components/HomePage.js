import React from "react";
import "../all.css";
import { Link } from "react-scroll";
import bg from "../imgs/pexels-instawalli-176851.webp";

function HomePage() {
  const handleButtonClick = () => {
    window.scrollTo({
      top: document.getElementById("services").offsetTop,
      behavior: "smooth"
    });
  };
  return (

    <div className="HomePage pt-5 pb-5 text-center" id="home" >
      <img
        src={bg}
        srcSet={`${bg} 600w, ${bg} 1200w, ${bg} 1800w`}
        sizes="100vw"
        alt="Background"
        className="background-image"
        fetchpriority="high"
        loading="eager"
      />
      <div className="overlay">
        <div className="container">
          <div className="row content text-center d-flex justify-content-center  ">
            <div className="d-flex flex-column justify-content-center align-items-center flex-wrap primary-header" >
              <h3 className="welcome-text To-Right-title">Welcome To  <br /> <span className="title">GO</span><br /> Academy</h3>
              <p className="mt-3 fs-4 description To-Left-title" >The best Academy to learn progamming</p>
            </div>
            <div className="btn-animated mt-4 mb-5 ">
              <Link to="services" alt="hehee" href="" smooth={true} duration={10}>
                <button type="button" className="btn  btn-outline-primary fs-4 fw-md-bold w-auto" onClick={handleButtonClick}>Explore Our Services</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default HomePage;