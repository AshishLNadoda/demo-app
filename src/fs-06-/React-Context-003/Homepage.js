import logo from "./download.png";
import { Switch } from "@mui/material";
import { createContext } from "react";
import { useState } from "react";
import "./Homepage.css";

export const ThemeContext = createContext(null);

export default function HomePage() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="main" id={theme}>
        <div className="Navbar">
          <div>
            <img src={logo} alt=".." className="logo" />
          </div>
          <div className="anchors">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>More</li>
            </ul>
          </div>
          <div className="buttons">
            <button className="login-button">Login</button>
            <Switch onChange={toggleTheme} checked={theme === "dark"} />
            <label className="theme-label">
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </label>
          </div>
        </div>
        <div className="cotent-main">
          <span className="h1">Get the </span>{" "}
          <span className="h2">right job</span> <br />{" "}
          <span className="h1">you deserve</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="search-section">
            <div className="ss2">
              <form>
                <input
                  type="text"
                  placeholder="Search it!"
                  className="search-bar"
                />
                <button className="search-button"> Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}