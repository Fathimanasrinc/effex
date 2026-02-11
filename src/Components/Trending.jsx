import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Trending.css";
import SweetHome from "./images/Sweethome.jpg";
import Tomorrow from "./images/Tomorrow.jpg";
import Vincenzo from "./images/Vincenzo.jpg";

const categories = ["All", "Action", "Crime", "Drama"];

const shows = [
  {
    name: "Vincenzo",
    category: "Crime",
    year: 2021,
    rating: 8.4,
    image: Vincenzo,
  },
  {
    name: "Tomorrow",
    category: "Drama",
    year: 2022,
    rating: 8.5,
    image: Tomorrow,
  },
  {
    name: "Sweet Home",
    category: "Action",
    year: 2020,
    rating: 8.6,
    image: SweetHome,
  },
];

const Trending = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [bgImage, setBgImage] = useState(null); // 🔥 NEW STATE

  const filteredShows =
    activeCategory === "All"
      ? shows
      : shows.filter((show) => show.category === activeCategory);

  return (
    <section
      className="trending-section"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background 0.5s ease",
      }}
    >
      <div className="trends-header">
        <div className="trend-tab active">Top Shows</div>
      </div>

      <hr className="divider" />

      {/* Category Buttons */}
      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`cat-btn ${
              activeCategory === cat ? "active-cat" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Animated Movie List */}
      <motion.div layout className="movie-list">
        <AnimatePresence mode="wait">
          {filteredShows.map((m) => (
            <motion.div
              key={m.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onHoverStart={() => setBgImage(m.image)}   // 🔥 SET BACKGROUND
              onHoverEnd={() => setBgImage(null)}        // 🔥 RESET
              className="movie-card"
            >
              <div className="poster-placeholder">
                <img src={m.image} alt={m.name} />
              </div>
              <h4>{m.name}</h4>
              <p>
                {m.year} • ⭐ {m.rating}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Trending;
