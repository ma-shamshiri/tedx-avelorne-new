// import { ImQuotesLeft } from "react-icons/im";
// import { AiOutlineLine } from "react-icons/ai";

// import testimonial from "../assets/images/testimonial.jpg";

// const BlockTestimonials = () => {
//   return (
//     <section className="block">
//       <header className="block__header">
//         <h2>What our Customers are Saying</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ipsam.
//         </p>
//       </header>
//       <div className="container">
//         <div className="card testimonial">
//           <div className="grid grid--1x2">
//             <div className="testimonial__image">
//               <img src={testimonial} alt="A happy, smiling customer" />
//               <span className="icon-container icon-container--accent">
//                 <ImQuotesLeft className="icon icon--white icon--small" />
//               </span>
//             </div>
//             <blockquote className="quote">
//               <p className="quote__text">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Incidunt optio officiis dolore earum error eaque perferendis
//                 laudantium sed praesentium dolorum.
//               </p>
//               <footer>
//                 <div className="media">
//                   <div className="media__image">
//                     <AiOutlineLine className="icon icon--primary quote__line" />
//                   </div>
//                   <div className="media__body">
//                     <h3 className="media__title quote__author">John Smith</h3>
//                     <p className="quote__organization">ABC Company</p>
//                   </div>
//                 </div>
//               </footer>
//             </blockquote>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlockTestimonials;
import React, { useState } from "react";
import { Box, Text, useColorModeValue, SimpleGrid } from "@chakra-ui/react";

import Amin from "../assets/images/Amin.webp";
import Aryana from "../assets/images/Aryana.webp";
import Baharan from "../assets/images/Baharan.webp";
import Erfan from "../assets/images/Erfan.webp";
import Fatemeh from "../assets/images/Fatemeh.webp";
import Fathima from "../assets/images/Fathima.webp";
import Hamidreza from "../assets/images/Hamidreza.webp";
import Melika from "../assets/images/Melika.webp";
import Mina from "../assets/images/Mina.webp";
import Mohammad from "../assets/images/Mohammad.webp";
import Motahareh from "../assets/images/Motahareh.webp";
import Pegah from "../assets/images/Pegah.webp";
import Reihaneh from "../assets/images/Reihaneh.webp";
import Samin from "../assets/images/Samin.webp";
import Royan from "../assets/images/Royan.webp";
import Gezal from "../assets/images/Gezal.webp";
import Edwin from "../assets/images/Edwin.webp";
import Zahra from "../assets/images/Zahra.webp";

import TestimonialCard from "./TestimonialCard";

// const BlockTestimonials = () => {
const BlockTestimonials: React.FC = () => {
  const numElements = 18;

  const [isHoveredArray, setIsHoveredArray] = useState(
    Array(numElements).fill(false)
  );

  const handleHover = (index: number) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = true;
      return newArray;
    });
  };

  const handleUnhover = (index: number) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = false;
      return newArray;
    });
  };

  return (
    <Box
      className="block block--dark aos-animate"
      // padding="6rem 4rem"
      // paddingBottom="10rem"
      // bg={useColorModeValue("gray.800", "red")}
      justifyContent="center"
      alignItems="center"
      overflow={"hidden"}
      height="100vh"
      position="relative"
    >
      <Box
        className="block__header container"
        // padding="0rem 2rem"
        textAlign="center"
        // margin="0 auto"
        bg={useColorModeValue("gray.800", "gray.700")}
        width="100wh"
        height="50vh"
      ></Box>

      <Box
        className="block__header container"
        // padding="0rem 2rem"
        textAlign="center"
        // margin="0 auto"
        bg={useColorModeValue("gray.800", "gray.600")}
        width="100wh"
        height="50vh"
      >
        <Box
          className="container"
          // maxWidth="900px"
          // maxWidth="100%"
          maxWidth="70rem"
          margin="0 auto"
          position="absolute"
          top="15rem"
          right="60rem"
        >
          {/* ======================== Samin Majidi ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[1]}
            handleHover={() => handleHover(1)}
            handleUnhover={() => handleUnhover(1)}
            src={Samin}
            linkedinHref="https://ca.linkedin.com/in/samin-majidi-05b77a250"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/profiles/19449036/about"
            author="Samin Majidi"
            organization="Ph.D. Student in Physics | McGill"
            quoteText="I'm a physics student who enjoys discovering new, interesting
            things. I became the organizer of TEDxAveLorne to share and
            learn from others. After being a team member at TEDxZanjan, I
            took on the role of leading the team, valuing teamwork and new
            opportunities."
            borderColor="linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)"
            badgeText="Organizer"
            badgeColor="linear-gradient(to left, #6322BF, #6322BF, #F226AA, #F226AA)"
            badgeTextSize="1.6rem"
            badgePaddingRight="12"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BlockTestimonials;
