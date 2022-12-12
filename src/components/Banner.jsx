import React from "react";
import "./Banner.css";

export default function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/800px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe amet tempora, doloremque cupiditate 
            molestias repellendus sed, debitis ut unde magnam quia qui voluptatibus et numquam, fugit harum illo veritatis 
            eaque ad. Nemo unde ut!`,
            250
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}
