import React, { useState } from "react";
// hadi mt7tajhach
import Person from "./person";
import img1 from "./images/1.jpg";
import { FaCity } from "react-icons/fa";

function Dricted() {
  return (
    <div className="directed">
      <Person
        img={img1}
        name={"mohamed"}
        city={"Setif"}
        job={"Busnise, Accident car"}
      />
    </div>
  );
}

export default Dricted;
