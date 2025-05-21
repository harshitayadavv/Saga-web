import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./profile.css";

import profilePicLarge from "../assets/profile-picture-large.jpg";
import sleepingCat from "../assets/sleeping-cat.png";

const Profile = () => {
  return (
    <>
      <Navbar />
      <section className="profile-page">
        <div className="profile-header">
          <div className="profile-info">
            <img
              src={profilePicLarge}
              alt="Profile Large"
              className="profile-picture-large"
            />
            <div className="profile-details">
              <h1>Harshita Yadav</h1>
              <p className="bio">
                Aspiring tech enthusiast and student at IIIT Kota.
              </p>
            </div>
          </div>
          <img
            src={sleepingCat}
            alt="Sleeping Cat"
            className="bio-image sleeping-cat-image"
          />
        </div>

        <div className="bookshelf">
          <div className="shelf">
            <h2>To Be Read</h2>
            {/* Render books with .color1 */}
            <div className="book color1">
              <span>Book Title 1</span>
              <button className="remove-book">×</button>
            </div>
          </div>
          <div className="shelf">
            <h2>Currently Reading</h2>
            <div className="book color2">
              <span>Book Title 2</span>
              <button className="remove-book">×</button>
            </div>
          </div>
          <div className="shelf">
            <h2>Already Read</h2>
            <div className="book color3">
              <span>Book Title 3</span>
              <button className="remove-book">×</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
