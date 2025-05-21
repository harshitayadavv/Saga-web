import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles.css";

import homeImage from "../assets/home-page-image.png"; // replace with actual image name
import readingCat from "../assets/reading-cat.png"; // replace with actual image name

const Home = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // You may add actual search logic or navigation here
    alert(`Searching for: ${searchText}`);
  };

  return (
    <>
      <Navbar />
      <section className="landing-page">
        <img src={homeImage} alt="Home" className="home-page-image" />
        <h1 className="welcome-text">Welcome to your Digital BookShelf</h1>
        <p className="description-text">
          Where you can discover, get reviews, organize and make notes with your reading mate <span class="scribe">SCRIBE</span>
        </p>
        <img src={readingCat} alt="Reading Cat" className="reading-cat-image" />
      </section>
      <section className="features-section">
        {/* <h2>Features</h2> */}
        <div className="feature feature-discover">
          <img src={require("../assets/discover.png")} alt="Discover" />
          <h3 className="Dis">Discover</h3>
          
        </div>
        <div className="feature feature-track">
          <img src={require("../assets/track.png")} alt="Track" />
          <h3 className="Tra">Track</h3>
          
        </div>
        <div className="feature feature-nest">
          <img src={require("../assets/nest.png")} alt="Nest" />
          <h3 className="Nes">Nest</h3>
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
