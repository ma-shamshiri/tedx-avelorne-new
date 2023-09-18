// import { BsSnapchat } from "react-icons/bs";
// import { GiCrystalGrowth } from "react-icons/gi";
// import { BsWordpress } from "react-icons/bs";

// import ipadWebp from "../assets/images/ipad.webp";
// import ipadWebp2x from "../assets/images/ipad@2x.webp";
// import ipadPng from "../assets/images/ipad.png";
// import ipadPng2x from "../assets/images/ipad@2x.png";

// const BlockShowcase = () => {
//   return (
//     <section className="block block--dark block--skewed-right block-showcase">
//       <header className="block__header">
//         <h2>User-friendly Control Panel</h2>
//       </header>
//       <div className="container grid grid--1x2">
//         <picture className="block-showcase__image">
//           <source
//             type="image/webp"
//             srcSet={`${ipadWebp} 1x, ${ipadWebp2x} 2x`}
//           />
//           <source type="image/webp" srcSet={`${ipadPng} 1x, ${ipadPng2x} 2x`} />

//           <img src="images/ipad.png" alt="" />
//         </picture>
//         <ul className="list">
//           <li>
//             <div className="media">
//               <div className="media__image">
//                 <BsSnapchat className="icon icon--primary" />
//               </div>
//               <div className="media__body">
//                 <h3 className="media__title">Easy Start & Managed Updates</h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Veniam quisquam, ex nostrum vero voluptates dicta excepturi
//                   vel perspiciatis consequuntur ab.
//                 </p>
//               </div>
//             </div>
//           </li>
//           <li>
//             <div className="media">
//               <div className="media__image">
//                 <GiCrystalGrowth className="icon icon--primary" />
//               </div>
//               <div className="media__body">
//                 <h3 className="media__title">Staging, GIT & WP-CLI</h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Veniam quisquam, ex nostrum vero voluptates dicta excepturi
//                   vel perspiciatis consequuntur ab.
//                 </p>
//               </div>
//             </div>
//           </li>
//           <li>
//             <div className="media">
//               <div className="media__image">
//                 <BsWordpress className="icon icon--primary" />
//               </div>
//               <div className="media__body">
//                 <h3 className="media__title">Dynamic Caching & More</h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Veniam quisquam, ex nostrum vero voluptates dicta excepturi
//                   vel perspiciatis consequuntur ab.
//                 </p>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default BlockShowcase;

import {
  Box,
  Text,
  Grid,
  Image,
  List,
  ListItem,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import React, { useEffect } from "react";

import { BsSnapchat } from "react-icons/bs";
import { GiCrystalGrowth } from "react-icons/gi";
import { BsWordpress } from "react-icons/bs";

import ipadWebp from "../assets/images/ipad.webp";
import ipadWebp2x from "../assets/images/ipad@2x.webp";
import ipadPng from "../assets/images/ipad.png";
import ipadPng2x from "../assets/images/ipad@2x.png";
import hallPng from "../assets/images/Hall.png";
import mcgillImage from "../assets/images/mcgill.jpeg";

import AgendaSlider from "./AgendaSlider";

import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles

// const BlockShowcase: React.FC = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-in-out",
//     });
//   }, []);

const BlockShowcase: React.FC = () => {
  useEffect(() => {
    window.onload = () => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
      });
    };
  }, []);

  return (
    <Box
      className="block block--dark block--skewed-right"
      padding="6rem 2rem"
      paddingBottom="10rem"
      bg="#16F8B6"
      color="#7b858b"
      // clipPath="polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)"
    >
      <Box
        className="block__header container"
        textAlign="center"
        maxWidth={{ base: "100%", md: "85%", lg: "100rem" }}
        margin="0 auto"
        data-aos="fade-up"
        data-aos-duration="500"
        // justifyContent="center"
      >
        <Text
          className="h2 block__heading"
          color={useColorModeValue("gray.700", "gray.700")}
          marginBottom="1.5rem"
          marginTop="0"
          fontSize={{ base: "5.5rem", lg: "7rem" }}
          fontWeight="bold"
          lineHeight="1.1"
        >
          Our Inspiring Talk Schedule
        </Text>

        <Text
          className="h3"
          color={useColorModeValue("gray.600", "gray.600")}
          marginBottom="6rem"
          marginTop="0"
          fontSize={{ base: "2.0rem", lg: "2.6rem" }}
          lineHeight="1.1"
        >
          Uncover a World of Ideas, Insights, and Inspiration in Our
          Comprehensive Talk Schedule
        </Text>

        <Flex justifyContent="center">
          <Box
            // justifyContent="center"
            // alignItems="center"
            borderWidth="3px"
            borderColor={useColorModeValue("gray.700", "gray.700")}
            borderRadius="35px"
            padding={{ base: "2rem", lg: "5rem" }}
            data-aos="fade-up"
            data-aos-duration="500"
            width={{ base: "100%", lg: "70%" }}
          >
            <AgendaSlider />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default BlockShowcase;
