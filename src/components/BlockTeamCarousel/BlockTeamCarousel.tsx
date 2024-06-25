import React, { useState } from 'react';
import { Box } from "@chakra-ui/react";
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
            <IoIosArrowDroprightCircle size={"45px"} color="#7B4CF6" />
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
            <IoIosArrowDropleftCircle size={"45px"} color="#7B4CF6" />
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
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
    };
    return (
        <Box w="75%" mx="auto">
            <Slider
                {...settings}
            >
                {data.map((d, index) => (
                    <Box
                        key={d.name}
                        padding="1rem"
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