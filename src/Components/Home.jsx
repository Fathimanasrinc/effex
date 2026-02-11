import React from "react";
import "./Home.css";
import bgImage from "./one.png";
import Trending from "./Trending.jsx";

export default function Home() {
  const stats = [
    { label: "Hours Watched", value: "186+" },
    { label: "Movies Watched", value: "57+" },
    { label: "Series Completed", value: "12+" },
  ];
 


  const categories = ["Action", "Adventure", "Biography", "Crime", "Comedy", "Documentary", "Drama"];

  return (
    <div className="main-wrapper">
      {/* 1. HERO SECTION */}
      <div className="home-hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <nav className="navbar">
          <h2 className="logo">NETFLIX</h2>
          <ul className="nav-links">
            <li>Home</li>
            <li>Stats</li>
            <li>Top Shows</li>
            <li>Movie</li>
            <li>Help</li>
          </ul>
          <div className="menu">☰</div>
        </nav>

        <div className="content">
          <p className="season">Season 1 • 16 Episodes</p>
          <h1 className="title">SAVE ME</h1>
          <p className="description">
            Series adapted from the webcomic entitled <br />
            <span>Out of the World</span> by writer Jo Geum-san.
          </p>
          <div className="buttons">
            <button className="watch">▶ Watch</button>
            <button className="add">＋ Add List</button>
          </div>
        </div>
        <div className="overlay"></div>
      </div>

      {/* 2. WATCH STATS SECTION */}
      <section className="stats-section">
        <h2 className="section-title">Your Watch Stats</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TRENDING SECTION */}
      <section className="trending-section">
     <Trending/>
      </section>
    </div>
  );
}