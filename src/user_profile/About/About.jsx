import React, { useState } from "react";
import "./about.css"
// hada ta3 about chouf ida kchma trigle fih wla mkan lah
const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About US</h2>
      <div className="par-content">
        <div className="paragraph">
          <p>
            Welcome to Algeria Lawyers Hub, the premier platform designed
            exclusively for legal professionals in our nation. Established with
            a passion for fostering collaboration and unity within the legal
            fraternity, our hub is dedicated to bringing together the brightest
            minds in the legal field.
          </p>
        </div>
        <div className="paragraph">
          <p>
            At Algeria Lawyers Hub, we envision a legal community where
            expertise and knowledge flow seamlessly, transcending individual
            boundaries. Our mission is to create a central space where lawyers,
            from seasoned practitioners to emerging talents, can connect,
            collaborate, and contribute to the collective growth of our legal
            landscape. We believe that a unified legal community is the key to
            positive transformation and progress.
          </p>
        </div>
        <div className="paragraph">
          <p>
            What sets us apart is our commitment to providing a dynamic and
            supportive environment. Here, legal professionals can not only
            network but also engage in meaningful knowledge exchange. Stay
            informed about the latest legal developments, share insights, and
            participate in discussions that matter. Join us on this empowering
            journey to build a resilient, connected, and forward-thinking legal
            community in Algeria
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
