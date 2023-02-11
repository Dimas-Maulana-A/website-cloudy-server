import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

// image
import HeaderHome from "./../image/HomeHeader.png";

// os logo
import Ubuntu from "./../image/Ubuntu.png";
import Debian from "./../image/Debian.png";
import Alma from "./../image/Alma.png";
import CentOs from "./../image/CentOs.png";
import RedHat from "./../image/RedHat.png";
import OpenSuse from "./../image/OpenSuse.png";
import Rocky from "./../image/Rocky.png";
import Windows from "./../image/Windows.png";

// client logo
import UMM from "./../image/UMM.png";
import Telkom from "./../image/Telkom.png";
import BNI from "./../image/BNI.png";

const Home = () => {
  return (
    <div className="super-container-home">
      <Navbar />
      <div className="container-home">
        <div className="header-home">
          <div className="text-header">
            <h1>
              Welcome to
              Cloudy Server
            </h1>
            <h5>super fast servers for your server</h5>
          </div>
          <img src={HeaderHome} alt="" />
        </div>

        <div className="home-contents">
          <h2>
          On the Cloudy Server you can <br /> customize the Operating System <br /> for your VPS
          </h2>
        </div>

        <div className="support-os">
          <h2 className="support-header">
            Support Operating System
          </h2>
          <div className="content-block">
            <div className="block">
              <div className="filter-block"></div>
              <img src={Ubuntu} alt="" loading="lazy" />
            </div>
            <div className="block">
              <div className="filter-block"></div>
              <img src={Debian} alt="" loading="lazy" />
            </div>
            <div className="block">
              <div className="filter-block"></div>
              <img src={Rocky} alt="" loading="lazy" />
            </div>
            <div className="block">
              <div className="filter-block"></div>
              <img src={Alma} alt="" loading="lazy" />
            </div>
            <div className="block">
              <div className="filter-block"></div>
              <img src={OpenSuse} alt="" loading="lazy" />
            </div>
            <div className="block">
              <div className="filter-block"></div>
              <img src={Windows} alt="" loading="lazy" />
            </div>
            <div className="block">
              <div className="filter-block"></div>
              <img src={CentOs} alt="" loading="lazy" />
            </div>
            <div className="block">
              <div className="filter-block"></div>
              <img src={RedHat} alt="" loading="lazy" />
            </div>
            
          </div>
        </div>

        <div className="client">
          <h2 className="client-header">
            Client
          </h2>
          <div className="content-block">
          <div className="block">
              <div className="filter-block"></div>
              <img src={UMM} alt="" loading="lazy" />
            </div>
            <div className="block">
              <div className="filter-block"></div>
              <img src={Telkom} alt="" loading="lazy" />
            </div>
            <div className="block">
              <div className="filter-block"></div>
              <img src={BNI} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
