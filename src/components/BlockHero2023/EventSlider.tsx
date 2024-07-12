'use client'

import React, { useRef } from 'react';
import {
  Box,
  IconButton,
  Stack,
  Heading,
  Text,
  Container,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import { sliderCards } from './sliderCards'; // Import cards from the new file
import { PiArrowFatLineLeftLight, PiArrowFatLineRightLight } from "react-icons/pi";

// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3500,
  pauseOnHover: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const EventSlider: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const arrowIconSize = useBreakpointValue({ base: "45px", lg: '55px' });
  const arrowIconColor = useColorModeValue('black', 'white');
  const hoverArrowIconColor = useColorModeValue('white', 'black');

  return (
    <Box
      position="relative"
      // height={'600px'}
      height={{ base: "65vh", lg: `calc(100vh - 6rem)` }}
      width={'full'} overflow={'hidden'}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={{ base: '20%', md: '40px' }}
        top={{ base: '90%', md: '50%' }}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => sliderRef.current?.slickPrev()}
        _hover={{ bg: "transparent" }}
      >
        <Box
          as={PiArrowFatLineLeftLight}
          size={arrowIconSize}
          color={arrowIconColor}
          _hover={{ color: hoverArrowIconColor, bg: "transparent" }}
          transition="color 0.3s ease"
        />
      </IconButton>

      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={{ base: '20%', md: '40px' }}
        top={{ base: '90%', md: '50%' }}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => sliderRef.current?.slickNext()}
        _hover={{ bg: "transparent" }}
      >
        <Box
          as={PiArrowFatLineRightLight}
          size={arrowIconSize}
          color={arrowIconColor}
          _hover={{ color: hoverArrowIconColor, bg: "transparent" }}
          transition="color 0.3s ease"
        />
      </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        {sliderCards.map((card, index) => (
          <Box
            key={index}
            height={{ base: "65vh", lg: `calc(100vh - 6rem)` }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={{ base: "contain", lg: "cover" }}
            backgroundImage={`url(${card.image})`}
          >
            <Stack
              // spacing={6}
              position="absolute"
              top="10%"
              left="10%"
            // transform="translate(0, -10%)"
            >
              <Text
                color="white"
                fontSize={{ base: '2.1rem', md: '4rem', lg: "5rem" }}
                fontWeight="bold"
                // fontFamily="Chicle', serif"
                fontFamily="'Acme', sans-serif"
                letterSpacing="1px"
              // fontFamily="'Englebert', cursive"
              >
                {card.title}
              </Text>
              <Text
                color="white"
                fontSize={{ base: 'md', md: "", lg: '2.5rem' }}
              >
                {card.text}
              </Text>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default EventSlider;
