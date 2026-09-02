import React from "react";
import "./CARDS.css";
import Lawyer from './lawyer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from "../../assets/images/5bfb6f_1cafad56984b4997bd73792b008c6fc3.webp"
import img2 from "../../assets/images/5bfb6f_60ff20475dbc447f92c81fdcc6a6a7c1.webp"
import img3 from "../../assets/images/5bfb6f_5577b01919214f47ad5236247965ec04.webp"
import img4 from "../../assets/images/10.jpg"

function CARDS() {
  const info = [
    { img: img1, name: "khaled kerha", spec: "family", phone: "123-456-7890", mail: "kerha@estin.com", Location: "jijel",rating: 4 },
    { img: img2, name: "khaled kerha", spec: "family", phone: "123-456-7890", mail: "kerha@estin.com", Location: "jijel",rating: 5 },
    { img: img3, name: "khaled kerha", spec: "family", phone: "123-456-7890", mail: "kerha@estin.com", Location: "jijel",rating: 3 },
    { img: img4, name: "khaled kerha", spec: "family", phone: "123-456-7890", mail: "kerha@estin.com", Location: "jijel",rating: 4 },
  ];

  const lawyers = info.map(function (lawyer, index) {
    return (
      <SwiperSlide className="car" key={index}>
        <Lawyer
          img={lawyer.img}
          name={lawyer.name}
          spec={lawyer.spec}
          phone={lawyer.phone}
          mail={lawyer.mail}
          Location={lawyer.Location}
          rating={lawyer.rating}
        />
      </SwiperSlide>
    );
  });

  return (
    <div className="lawyer">
      <div className="barrier"></div>
      <h1>Top Rated Lawyers</h1>
      <section className="cards-container">
        <Swiper
         navigation={true}
         modules={[Navigation]}
         className="mySwiper"
         slidesPerView={3}
        >
          {lawyers}
        </Swiper>
      </section>
    </div>
  );
}

export default CARDS;
