import React, { useState } from "react";
import exemple from "./exemple.json";

function Person({ img, name, category, location }) {
  return (
    <div className="Person">
      <img className="photo-profile" src={`${img}`} height={100} width={150} />
      <div className="information">
        <a
          href=""
          rel="noopener noreferrer"
          style={{ textDecoration: "none", fontSize: "18px" }}
        >
          {name}
        </a>
        <h5>{category}</h5>
        <h5>{location}</h5>
        <h5> {name}@gmail.com</h5>

        {/* 
        <div className="etoil">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color={index < rating ? "#ffc107" : "#e4e5e9"}
              size={24}
              onClick={() => handleStarClick(index + 1)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
         <p>Selected Rating: {rating}</p>
         */}
      </div>
    </div>
  );
}

export default Person;

