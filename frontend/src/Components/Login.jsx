import React from "react";
import "../CSS/Register.css";

const Login = () => {
  return (
    <>
      <div class="screen1">
        <div id="navbar">
          <div>
            <img
              src="https://images.indianexpress.com/2021/01/myntra.png"
              alt="myntra-logo"
            />
          </div>
          <div class="heading-section">
            <div>
              <h4>MEN</h4>
            </div>
            <div>
              <h4>WOMEN</h4>
            </div>
            <div>
              <h4>KIDS</h4>
            </div>
            <div>
              <h4>HOME & LIVING</h4>
            </div>
            <div>
              <h4>BEAUTY</h4>
            </div>
            <div>
              <h4>STUDIO</h4>
            </div>
          </div>
          <div>
            <input
              placeholder="Search for Products,brands and more"
              type="text"
            />
          </div>
          <div>
            <div>
              <i class="fa-regular fa-user"></i>
              <h5>Profile</h5>
            </div>
            <div>
              <i class="fa-regular fa-heart"></i>
              <h5>Wishlist</h5>
            </div>
            <div>
              <i class="fa-solid fa-bag-shopping"></i>
              <h5>Bag</h5>
            </div>
          </div>
        </div>

        <div class="inner-box">
          <div class="inner-image">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
              alt=""
            />
          </div>
          <div class="input-area">
            <form onsubmit="login(event)">
              <h3>Login</h3>
              <input
                id="login_email"
                type="email"
                placeholder="Enter Email Address"
              />
              <input
                id="login_password"
                type="password"
                placeholder="Enter Password"
              />
            </form>
          </div>
          <div class="proceed-button">
            <button onclick="login(event)">Proceed</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
