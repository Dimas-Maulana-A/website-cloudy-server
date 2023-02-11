import React from "react";

import Navbar from "./../components/navbar";
import Footer from "./../components/footer";

// image
import AboutHeader from "./../image/AboutHeader.jpeg";

import Gallery1 from "./../image/Gallery1.jpg";
import Gallery2 from "./../image/Gallery2.jpg";
import Gallery3 from "./../image/Gallery3.jpg";
import Gallery4 from "./../image/Gallery4.jpg";
import Gallery5 from "./../image/Gallery5.jpg";
import Gallery6 from "./../image/Gallery6.jpg";

import Iso from "./../image/ISO.png";

const About = () => {
  return (
    <div className="super-container-about">
      <Navbar />
      <div className="container-about">
        <div className="about-header">
          <img src={AboutHeader} alt="" loading="lazy" />
          <h2>
            We have a server room with specifications that can make your website
            very fast so it doesn't take long to load and also SEO features that
            can make your website rank one in Google search
          </h2>
        </div>

        <div className="about-gallery">
          <h2 className="gallery-header">Gallery</h2>
          <div className="content-block">
            <div className="block">
              <div className="filter-block"></div>
              <img src={Gallery1} alt="" loading="lazy" />
            </div>
            <div className="block">
              <div className="filter-block"></div>
              <img src={Gallery2} alt="" loading="lazy" />
            </div>
            <div className="block">
              <div className="filter-block"></div>
              <img src={Gallery3} alt="" loading="lazy" />
            </div>
            <div className="block">
              <div className="filter-block"></div>
              <img src={Gallery4} alt="" loading="lazy" />
            </div>
            <div className="block">
              <div className="filter-block"></div>
              <img src={Gallery5} alt="" loading="lazy" />
            </div>
            <div className="block">
              <div className="filter-block"></div>
              <img src={Gallery6} alt="" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="about-achievement">
          <h2 className="achievement-header">Achievement</h2>
          <div className="achievement-content">
            <img src={Iso} alt="" loading="lazy" />
            <div className="achievement-text">
              <h3>ISO 27001</h3>
              <h5>
                ISO 27001 is an international award for standardization that
                establishes certain specifications for the purposes of an
                information security management system or what is widely known
                as the ISMS (Information Security Management System).
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
