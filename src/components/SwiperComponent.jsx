import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// <FontAwesomeIcon icon={} />
import { testimonialsCustomers } from "./data/Data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const SwiperComponent = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={50}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      speed={1000}
      breakpoints={{
        992: {
          slidesPerView: 2,
        },
      }}
    >
      {testimonialsCustomers.map((val) => {
        return (
          <SwiperSlide key={val.id}>
            <p>{val.comment}</p>

            <div className="img">
              <img src={val.img} alt="" />
            </div>

            <h2 className="customer-name">{val.name}</h2>
            {/* Render stars based on the customer's rating */}
            {Array.from({ length: val.stars }, (_, i) => i + 1).map((_, i) => {
              return <FontAwesomeIcon icon={faStar} key={i} className="star" />;
            })}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperComponent;
