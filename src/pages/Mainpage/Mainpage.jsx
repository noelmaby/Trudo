import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Header";
import "./css/fontawesome.css";
import "./css/templatemo-lugx-gaming.css";
import "./css/owl.css";
import "./css/animate.css";

import shieldlock from "./images/shield-lock.svg";
import transperancy from "./images/transparency.svg";
import graphup from "./images/graph-up-arrow.svg";
import cashcoin from "./images/cash-coin.svg";

import nft1 from "./images/nft1.jpg";
import nft2 from "./images/nft2.jpg";
import nft3 from "./images/nft3.jpg";
import nft4 from "./images/nft4.jpeg";

const Mainpage = () => {
  return (
    <>
      {/* Preloader */}

      <Navbar></Navbar>

      {/* Main Banner */}
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="caption header-text">
                <h6>Welcome to Trudo</h6>
                <h2>TRUE DONATIONS!</h2>
                <p>
                  Trudo is a free, blockchain-powered donation platform designed
                  to transform the world of online giving. With Trudo, donors
                  can securely support verified charitable campaigns while
                  receiving unique NFTs as rewards.
                </p>
                <div className="search-input">
                  <form id="search" action="#">
                    <input
                      type="text"
                      placeholder="Type Something"
                      id="searchText"
                      name="searchKeyword"
                    />
                    <button role="button">Search Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <a href="#">
                <div className="item">
                  <div className="image">
                    <img src={shieldlock} alt="" style={{ maxWidth: "44px" }} />
                  </div>
                  <h4>Secure Donations</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="#">
                <div className="item">
                  <div className="image">
                    <img
                      src={transperancy}
                      alt=""
                      style={{ maxWidth: "44px" }}
                    />
                  </div>
                  <h4>Transparent Transactions</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="#">
                <div className="item">
                  <div className="image">
                    <img src={graphup} alt="" style={{ maxWidth: "44px" }} />
                  </div>
                  <h4>Increased Trust</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="#">
                <div className="item">
                  <div className="image">
                    <img src={cashcoin} alt="" style={{ maxWidth: "44px" }} />
                  </div>
                  <h4>Improved Fundraising</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Most Played Section */}
      <div className="section most-played">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>Popular NFTs</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-button">
                <a href="shop.html">View All</a>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="item">
                  <div className="thumb">
                    <a>
                      <img src={nft1} alt="" />
                    </a>
                  </div>
                  <div className="down-content">
                    <span className="category">Wayanad</span>
                    <h4>Rebuild</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="item">
                  <div className="thumb">
                    <a>
                      <img src={nft2} alt="" />
                    </a>
                  </div>
                  <div className="down-content">
                    <span className="category">Lebanon</span>
                    <h4>Pager Aid</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="item">
                  <div className="thumb">
                    <a>
                      <img src={nft3} alt="" />
                    </a>
                  </div>
                  <div className="down-content">
                    <span className="category">Uttarakhand</span>
                    <h4>ReLeaf</h4>
                    <a>Explore</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="item">
                  <div className="thumb">
                    <a>
                      <img src={nft4} alt="" />
                    </a>
                  </div>
                  <div className="down-content">
                    <span className="category">Flood to Future</span>
                    <h4>Assam</h4>
                    <a>Explore</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>
              Copyright © 2024 Trudo NFT Campaign Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Mainpage;
