import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Discounts = () => {
  const settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Box w="400px">
      <Slider {...settings}>
        <Box>
          <Image src="assets/discount.jpg" />
        </Box>
        <Box>
          <Image src="assets/discount.jpg" />
        </Box>
      </Slider>
    </Box>
  );
};

export default Discounts;
