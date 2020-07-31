/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./home.scss";
import AutoComplete from "../../components/Autocomplete/";
const Home = () => {
  return (
    <div className="search">
      <header className="search__header">
        <nav className="search__nav">
          <a href="#" className="search__nav-item">
            Gmail
          </a>
          <a href="#" className="search__nav-item">
            Images
          </a>
          <div className="app-icon search__nav-item"></div>
          <div className="avatar search__nav-item"></div>
        </nav>
      </header>
      <main className="search__main">
        <div className="search__main-contents">
          <div className="flex flex-h-center">
            <img
              src="/logo.png"
              alt="Google logo"
              className="search__main-img"
            />
          </div>
          <div className="input-wrapper">
            <AutoComplete />
            {/* <input type="text" />
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="search-icon"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            <img src="/michrophone.png" alt="" className="michrophone" /> */}
          </div>
          <div className="flex flex-h-center btn-wrapper">
            <button className="search__main-btn" 
              onClick={(e) => {
                e.preventDefault();
                window.location.href="https://google.com/search?q={users-text-here}";
                }}
            >Google Search</button>
            <button className="search__main-btn" 
              onClick={(e) => {
                e.preventDefault();
                window.location.href="https://perfects.engineering";
                }}
            >I'm Feeling Lucky</button>
          </div>
          <div className="search__main-tagline">
            <span> Google offered in: </span>
            <div className="search__main-lang">
              <a href="#">Hausa</a> <a href="#">Igbo</a>
              <a href="#">Èdè Yorùbá</a> <a href="#">Nigerian Pidgin</a>
            </div>
          </div>
        </div>
      </main>
      <footer className="search__footer">
        <p>Nigeria</p>
        <div className="search__footer-links">
          <a href="#" className="search__footer-link">
            Advertising
          </a>
          <a href="#" className="search__footer-link">
            Business
          </a>
          <a href="#" className="search__footer-link">
            About
          </a>
          <a href="#" className="search__footer-link how">
            How Search works
          </a>
          <div className="other-links">
            <a href="#" className="search__footer-link">
              privacy
            </a>
            <a href="#" className="search__footer-link">
              Terms
            </a>
            <a href="#" className="search__footer-link">
              Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
