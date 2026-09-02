import React, { useState } from "react";
//hadi tkhrjlk detail ta3 mohami rani mdayrha static
import Person from "../person";
import Table from "../Worktime";
import "./detail.css"; // hada design ta3ha
import { Link } from 'react-router-dom';
function Detail() {
  const cases = [
    { id: 1, name: "Criminal defense" },
    { id: 2, name: "Car accident" },
    { id: 3, name: "Business" },
    { id: 4, name: "Family" },
  ];
  return (
    <div className="containern">
      {/* <AboutUs />
              <PopularLawyer />
         <Lawyerdirectory />
        */}
      <Person className="prs"/>
      <div className="case">
        <div className="case-type">
             <div className="title1">
                <div className="bare1"></div>
                <div>
                    <h3>About</h3>
                </div>
            </div>
          <h5>Areas practices</h5>
          <ul>
            {cases.map((ca) => (
              <li key={ca.id}>
                <p>{ca.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="review">
      <div className="title1">
                <div className="bare1"></div>
                <div>
                    <h3>Review</h3>
                </div>
            </div>
            <div>
             <Link to ="/review"> <button> write a review</button></Link>
            </div>
      </div>
      <div className="place">
      <div className="title1">
                <div className="bare1"></div>
                <div>
                    <h3>Conatct</h3>
                </div>
            </div>
            <p>
            I'm always looking for new and exciting opportunities. Let's connect.
            </p>
            <div>
            <div className="Map">
            <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103040.37654177268!2d5.33742566446092!3d36.1905956629338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f3159c5fcafc4b%3A0xb063cfbbd3cadcd5!2sSetif!5e0!3m2!1sen!2sdz!4v1706265993430!5m2!1sen!2sdz"
          width="600"
          height="350"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
            </div>
            </div>
      </div>
      <Table />
    </div>
  );
}

export default Detail;
