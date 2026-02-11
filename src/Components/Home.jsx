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
 


  const categories = [
    "Action",
    "Adventure",
    "Biography",
    "Crime",
    "Comedy",
    "Documentary",
    "Drama",
  ];

  return (
    <div className="main-wrapper">

      {/* 1. HERO SECTION */}
      <div
        id="home"
        className="home-hero"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <nav className="navbar">
          <h2 className="logo">NETFLIX</h2>

          <ul className="nav-links">
          
          </ul>

          <div className="menu">☰</div>
        </nav>

        <div className="content">
          <h1 className="title">MUHSINA’S NETFLIX WRAP 2026</h1>
          <p className="description">
            This year was all about discovering new stories, thrilling plots,
            and inspiring characters. Here’s a recap of everything I watched and
            loved in 2026.
          </p>

          <div className="buttons">
            <a
              href="https://www.netflix.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="watch">▶ Watch</button>
            </a>
          </div>
        </div>

        <div className="overlay"></div>
      </div>

      {/* 2. WATCH STATS SECTION */}
      <section id="stats" className="stats-section">
        <h2 className="section-title">WatchStates</h2>
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

      {/* WOW SECTION */}
      <section className="wow-section">
        <div className="glow-bg"></div>

        <div className="personality-content">
          <h1 className="cinematic-title">
            Midnight <br />
            <span className="outline-text">Thriller</span> Addict
          </h1>

          <div className="emoji-container">
            <span className="floating-emoji e1">🔥</span>
            <span className="floating-emoji e2">🔪</span>
            <span className="floating-emoji e3">🕵️</span>
            <span className="floating-emoji e4">🍿</span>
          </div>
        </div>
      </section>
    </div>
  );
}