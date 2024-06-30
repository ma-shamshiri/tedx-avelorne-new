import React, { useState } from 'react';
import { Box, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";
import { saminBG, fatemehBG, aminBG } from "../../assets";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import data from "./teamCarouselData";

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
const SampleNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <Box
            className="slick-arrow"
            position="absolute"
            right="-70px"
            top="50%"
            transform="translateY(-50%)"
            display="block"
            onClick={onClick}
            cursor="pointer"
            _hover={{
                svg: { color: "red" }
            }}
        >
            <IoIosArrowDroprightCircle size={useBreakpointValue({ base: "30px", lg: "45px" })} color="#904ff7" />
        </Box>
    );
};

const SamplePrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {

    return (
        <Box
            className="slick-arrow"
            position="absolute"
            left="-70px"
            top="50%"
            transform="translateY(-50%)"
            display="block"
            onClick={onClick}
            cursor="pointer"
        >
            <IoIosArrowDropleftCircle size={useBreakpointValue({ base: "30px", lg: "45px" })} color="#904ff7" />
        </Box>
    );
};


export const BlockTeamCarousel: React.FC = () => {
    const [centerSlide, setCenterSlide] = useState<number>(0);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        // autoplay: true,
        // cssEase: "linear",
        // speed: 2000,
        // autoplaySpeed: 2000,
        speed: 800,
        // pauseOnHover: true,
        focusOnSelect: true,
        afterChange: (current: number) => setCenterSlide(current),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots: React.ReactNode) => (
            <div
              style={{
                padding: '10px',
              }}
            >
              <ul style={{ margin: '0px' }}>{dots}</ul>
            </div>
          ),
          customPaging: (i: number) => (
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: i === centerSlide ? 'black' : '#ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: i === centerSlide ? 'white' : 'black',
                }}
              ></span>
            </div>
          ),
        responsive: [

            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ],
    };
    return (
        <Box
            width={{ base: "78%", md: "30%", lg: "60%", xl: "75%" }}
            marginX="auto"
            padding="2rem"
            border="1px solid red"
        >
            <Slider
                {...settings}
            >
                {data.map((d, index) => (
                    <Box
                        key={d.name}
                        padding={{ base: "0", lg: "1rem" }}
                        transition="opacity 0.6s ease"
                        opacity={centerSlide === index ? 1 : 0.2}
                    >
                        <CarouselCard
                            name={d.name}
                            title={d.title}
                            avatarUrl={d.avatarUrl}
                            profileUrl={d.profileUrl}
                            badgeText={d.badgeText}
                            badgeTextColor={d.badgeTextColor}
                            badgeBackgroundColor={d.badgeBackgroundColor}
                            badgeBorderColor={d.badgeBorderColor}
                            testimonial={d.testimonial}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}



// export default App;