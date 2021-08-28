import React from "react";
import Slider from "react-slick";
import bannerMobile from "../../assets/images/bannerMobile.svg";
import bannerDesktop from "../../assets/images/bannerDesktop.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const settingsMobile = {
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500
};

const settingsDesk = {
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500
};

const Carousel: React.FC = () => {
  return (
    <>
      <div className="carousel-mobile">
        <Slider {...settingsMobile}>
          <img src={bannerMobile} width="100%" height="auto" alt="Banner Mobile" />
          <img src={bannerMobile} width="100%" height="auto" alt="Banner Mobile" />
        </Slider>
      </div>
      <div className="carousel-desktop">
        <Slider {...settingsDesk}>
          <img src={bannerDesktop} width="100%" height="auto" alt="Banner Desktop" />
          <img src={bannerDesktop} width="100%" height="auto" alt="Banner Desktop" />
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
