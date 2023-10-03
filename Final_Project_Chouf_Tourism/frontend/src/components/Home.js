import "../css/Home.css";
// import { Route, Router } from "react-router-dom";
import HomeOne from "./HomeOne";
// import "../App.css";
// import Navbar from "../components/Navbar";
import Carouselo from "./Carouselo";
import image2 from "../images/AI-four.png";
import { useState } from "react";
import Pricing from "./pricing";
import Destination from "./Destination";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <>
      <div>
        <HomeOne />
      </div>

      {/* 2nd Home Page */}
      {/* Home parent search section start */}
      <div className="home-parent-search-section">
        <div className="search-section">
          <h1>Hello World</h1>
          <p>lorem ipsumj ehudfeghiufslkjc eqbhfoiqgahef hefoigao</p>
          <div id="search" className={loading ? "loading" : ""}>
            <input
              id="input"
              type="search"
              placeholder="Type to search"
              onKeyDown={handleKeyDown}
            />
            <button id="button" onClick={handleSearch}>
              <i className="fa fa-search"></i>
            </button>
            <div className="spinner">
              <i className="fa fa-spinner"></i>
            </div>
          </div>
          <div className="note">Click the button or hit enter.</div>
        </div>
      </div>
      {/* Home parent search section end */}

      {/* parent Ai-help section start */}
      <div className="parent-Ai-help">
        <div className="content-ai-help">
          <h2>Build a trip in minutes</h2>
          <p>
            Get a personalized itinerary just for you, guided by traveler tips
            and reviews.
            <br />
            Spend a day with me in Shouf
          </p>
          <button className="button-ai-help">Launch a trip with AI</button>
        </div>
        <div className="img-ai-help">
          <img src={image2} alt="" className="imagino-ai-help" />
        </div>
      </div>
      {/* parent Ai-help section end */}

      {/* Filter section Start*/}
      <div>
        <div className="carousel-section-new">
          <Carouselo />
        </div>
      </div>
      {/* Filter section End*/}

      {/* Destination Start */}
      <div className="Destination-section">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 className="destination-headeing">Top Destination</h2>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <Destination />
            </div>
            <div class="col">
              <Destination />
            </div>
            <div class="col">
              <Destination />
            </div>
            <div class="col">
              <Destination />
            </div>
            <div class="col">
              <Destination />
            </div>
          </div>
        </div>
      </div>
      {/* Destination End */}

      {/* carousel section start
      <div className="carousel-section-new">
        <Carouselo />
      </div>
      carousel section end */}

      {/* pricing start */}
      <div className="pricing-section">
        <Pricing />
      </div>
      {/* pricing end */}
    </>
  );
};

export default Home;
