// import { GiTalk } from "react-icons/gi";
// import { RiComputerFill } from "react-icons/ri";
// import { BsWordpress } from "react-icons/bs";
// import { BsClockHistory } from "react-icons/bs";

// import easyWebp from "../assets/images/easy.webp";
// import easyWebp2x from "../assets/images/easy@2x.webp";
// import easyJpg from "../assets/images/easy.jpg";
// import easyJpg2x from "../assets/images/easy@2x.jpg";

// import fastWebp from "../assets/images/fast.webp";
// import fastWebp2x from "../assets/images/fast@2x.webp";
// import fastJpg from "../assets/images/fast.jpg";
// import fastJpg2x from "../assets/images/fast@2x.jpg";

// import wordpressWebp from "../assets/images/fast.webp";
// import wordpressWebp2x from "../assets/images/fast@2x.webp";
// import wordpressJpg from "../assets/images/fast.jpg";
// import wordpressJpg2x from "../assets/images/fast@2x.jpg";

// import supportWebp from "../assets/images/support.webp";
// import supportWebp2x from "../assets/images/support@2x.webp";
// import supportJpg from "../assets/images/support.jpg";
// import supportJpg2x from "../assets/images/support@2x.jpg";

// const BlockFeatures = () => {
//   return (
//     <section className="block container">
//       <header className="block__header">
//         <h2>Host on the Cloud to Keep Growing</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
//           voluptatem.
//         </p>
//       </header>
//       <article className="grid grid--1x2 feature">
//         <div className="feature__content">
//           <span className="icon-container">
//             <GiTalk className="icon icon--primary" />
//           </span>
//           <h3 className="feature__heading">Super Easy to Use</h3>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
//             obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
//           </p>
//           <a href="#" className="link-arrow">
//             Learn More
//           </a>
//         </div>
//         <picture>
//           <source
//             type="image/webp"
//             srcSet={`${easyWebp} 1x, ${easyWebp2x} 2x`}
//           />
//           <source type="image/jpg" srcSet={`${easyJpg} 1x, ${easyJpg2x} 2x`} />
//           <img className="feature__image" src="images/easy@2x.jpg" alt="" />
//         </picture>
//       </article>
//       <article className="grid grid--1x2 feature">
//         <div className="feature__content">
//           <span className="icon-container">
//             <RiComputerFill className="icon icon--primary" />
//           </span>
//           <h3 className="feature__heading">Simply Fast Websites</h3>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
//             obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
//           </p>
//           <a href="#" className="link-arrow">
//             Learn More
//           </a>
//         </div>
//         <picture>
//           <source
//             type="image/webp"
//             srcSet={`${fastWebp} 1x, ${fastWebp2x} 2x`}
//           />
//           <source type="image/jpg" srcSet={`${fastJpg} 1x, ${fastJpg2x} 2x`} />
//           <img className="feature__image" src="images/fast@2x.jpg" alt="" />
//         </picture>
//       </article>
//       <article className="grid grid--1x2 feature">
//         <div className="feature__content">
//           <span className="icon-container">
//             <BsWordpress className="icon icon--primary" />
//           </span>
//           <h3 className="feature__heading">Wordpress Made Easy</h3>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
//             obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
//           </p>
//           <a href="#" className="link-arrow">
//             Learn More
//           </a>
//         </div>
//         <picture>
//           <source
//             type="image/webp"
//             srcSet={`${wordpressWebp} 1x, ${wordpressWebp2x} 2x`}
//           />
//           <source
//             type="image/jpg"
//             srcSet={`${wordpressJpg} 1x, ${wordpressJpg2x} 2x`}
//           />
//           <img
//             className="feature__image"
//             src="images/wordpress@2x.jpg"
//             alt=""
//           />
//         </picture>
//       </article>
//       <article className="grid grid--1x2 feature">
//         <div className="feature__content">
//           <span className="icon-container">
//             <BsClockHistory className="icon icon--primary" />
//           </span>
//           <h3 className="feature__heading">24/7 Expert Support</h3>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
//             obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
//           </p>
//           <a href="#" className="link-arrow">
//             Learn More
//           </a>
//         </div>
//         <picture>
//           <source
//             type="image/jpg"
//             srcSet={`${supportWebp} 1x, ${supportWebp2x} 2x`}
//           />
//           <source
//             type="image/jpg"
//             srcSet={`${supportJpg} 1x, ${supportJpg2x} 2x`}
//           />
//           <img className="feature__image" src="images/support@2x.jpg" alt="" />
//         </picture>
//       </article>
//     </section>
//   );
// };

// export default BlockFeatures;

// import React, { useEffect } from "react";
// import AOS from "aos"; // Import AOS library
// import "aos/dist/aos.css"; // Import AOS styles

// import { GiTalk } from "react-icons/gi";
// import { RiComputerFill } from "react-icons/ri";
// import { BsWordpress } from "react-icons/bs";
// import { BsClockHistory } from "react-icons/bs";

// import easyWebp from "../assets/images/easy.webp";
// import easyWebp2x from "../assets/images/easy@2x.webp";
// import easyJpg from "../assets/images/easy.jpg";
// import easyJpg2x from "../assets/images/easy@2x.jpg";
// import fastWebp from "../assets/images/fast.webp";
// import fastWebp2x from "../assets/images/fast@2x.webp";
// import fastJpg from "../assets/images/fast.jpg";
// import fastJpg2x from "../assets/images/fast@2x.jpg";
// import wordpressWebp from "../assets/images/wordpress.webp";
// import wordpressWebp2x from "../assets/images/wordpress@2x.webp";
// import wordpressJpg from "../assets/images/wordpress.jpg";
// import wordpressJpg2x from "../assets/images/wordpress@2x.jpg";
// import supportWebp from "../assets/images/support.webp";
// import supportWebp2x from "../assets/images/support@2x.webp";
// import supportJpg from "../assets/images/support.jpg";
// import supportJpg2x from "../assets/images/support@2x.jpg";

// const featuresData = [
//   {
//     icon: <GiTalk className="icon icon--primary" />,
//     title: "Super Easy to Use",
//     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     image: {
//       webp: easyWebp,
//       webp2x: easyWebp2x,
//       jpg: easyJpg,
//       jpg2x: easyJpg2x,
//     },
//   },
//   {
//     icon: <RiComputerFill className="icon icon--primary" />,
//     title: "Simply Fast Websites",
//     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     image: {
//       webp: fastWebp,
//       webp2x: fastWebp2x,
//       jpg: fastJpg,
//       jpg2x: fastJpg2x,
//     },
//   },
//   {
//     icon: <BsWordpress className="icon icon--primary" />,
//     title: "Wordpress Made Easy",
//     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     image: {
//       webp: wordpressWebp,
//       webp2x: wordpressWebp2x,
//       jpg: wordpressJpg,
//       jpg2x: wordpressJpg2x,
//     },
//   },
//   {
//     icon: <BsClockHistory className="icon icon--primary" />,
//     title: "24/7 Expert Support",
//     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     image: {
//       webp: supportWebp,
//       webp2x: supportWebp2x,
//       jpg: supportJpg,
//       jpg2x: supportJpg2x,
//     },
//   },
// ];

// const BlockFeatures = () => {
// useEffect(() => {
//   AOS.init({
//     duration: 800,
//     easing: "ease-in-out",
//   });
// }, []);

//   return (
//     <section className="block container">
//       <header className="block__header">
//         <h2>Host on the Cloud to Keep Growing</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
//           voluptatem.
//         </p>
//       </header>
//       {featuresData.map((feature, index) => (
//         <article
//           key={index}
//           className={`grid grid--1x2 feature ${
//             index % 2 === 0 ? "even" : "odd"
//           }`}
//         >
//           <div
//             className={`feature__content animate-once`}
//             data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
//             data-aos-duration="500"
//           >
//             <span className="icon-container">{feature.icon}</span>
//             <h3 className="feature__heading">{feature.title}</h3>
//             <p>{feature.content}</p>
//             <a href="#" className="link-arrow">
//               Learn More
//             </a>
//           </div>
//           <picture
//             data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
//             data-aos-duration="500"
//           >
//             <source
//               type="image/webp"
//               srcSet={`${feature.image.webp} 1x, ${feature.image.webp2x} 2x`}
//             />
//             <source
//               type="image/jpg"
//               srcSet={`${feature.image.jpg} 1x, ${feature.image.jpg2x} 2x`}
//             />
//             <img className="feature__image" src={feature.image.jpg2x} alt="" />
//           </picture>
//         </article>
//       ))}
//     </section>
//   );
// };

// export default BlockFeatures;

import React, { useEffect } from "react";
import {
  Box,
  Link as ChakraLink,
  Grid,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles

import { BsClockHistory, BsWordpress } from "react-icons/bs";
import { GiTalk } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";

// import easyJpg from "../assets/images/easy.jpg";
// import easyWebp from "../assets/images/easy.webp";
// import easyJpg2x from "../assets/images/easy@2x.jpg";
// import easyWebp2x from "../assets/images/easy@2x.webp";
// import fastJpg from "../assets/images/fast.jpg";
// import fastWebp from "../assets/images/fast.webp";
// import fastJpg2x from "../assets/images/fast@2x.jpg";
// import fastWebp2x from "../assets/images/fast@2x.webp";
// import supportJpg from "../assets/images/support.jpg";
// import supportWebp from "../assets/images/support.webp";
// import supportJpg2x from "../assets/images/support@2x.jpg";
// import supportWebp2x from "../assets/images/support@2x.webp";
// import wordpressJpg from "../assets/images/wordpress.jpg";
// import wordpressWebp from "../assets/images/wordpress.webp";
// import wordpressJpg2x from "../assets/images/wordpress@2x.jpg";
// import wordpressWebp2x from "../assets/images/wordpress@2x.webp";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
// import img4 from "../assets/images/4.jpg";
// import img5 from "../assets/images/5.webp";
// import img6 from "../assets/images/6.webp";

// *********** This is not the refactored version ***********

// const BlockFeatures = () => {
//   return (
//     <Box
//       className="block container"
//       padding="6rem 2rem"
//       maxWidth="1140px"
//       margin="0 auto"
//     >
//       <Box className="grid grid--1x2 feature">
//         <Grid
//           display="grid"
//           templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
//           gap="4rem 2rem"
//         >
//           <Box className="feature__content">
//             <Box
//               className="icon-container"
//               background="#f3f9fa"
//               width="64px"
//               height="64px"
//               borderRadius="100%"
//               display="inline-flex"
//               justifyContent="center"
//               alignItems="center"
//             >
//               <Icon
//                 className="icon icon--primary"
//                 as={GiTalk}
//                 width="40px"
//                 height="40px"
//                 color="var(--color-primary)"
//               />
//             </Box>
//             <Text
//               className="h3 feature__heading"
//               color="var(--color-headings)"
//               fontSize={{ base: "2.8rem", lg: "2.4rem" }}
//               fontWeight="bold"
//               lineHeight="1.3"
//               margin="1rem 0"
//             >
//               Super Easy to Use
//             </Text>
//             <Text className="p" marginTop="0">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
//               voluptate tempora qui distinctio consequatur aliquid pariatur
//               cupiditate quas cum fugit.
//             </Text>
//             <ChakraLink
//               className="link-arrow"
//               href="#"
//               fontSize={{ base: "2rem", lg: "1.5rem" }}
//               fontWeight="bold"
//               color="#ff3400"
//               textTransform="uppercase"
//               _hover={{
//                 "::after": {
//                   marginLeft: "10px",
//                 },
//               }}
//               sx={{
//                 "::after": {
//                   content: '">"',
//                   marginLeft: "5px",
//                   transition: "margin 0.15s",
//                 },
//               }}
//             >
//               Learn More
//             </ChakraLink>
//           </Box>
//           <Box as="picture">
//             <source
//               type="image/webp"
//               srcSet={`${easyWebp} 1x, ${easyWebp2x} 2x`}
//             />
//             <source
//               type="image/png"
//               srcSet={`${easyJpg} 1x, ${easyJpg2x} 2x`}
//             />
//             <Image
//               className="feature__image"
//               src={easyJpg2x}
//               alt="easy"
//               width="100%"
//             />
//           </Box>
//         </Grid>
//       </Box>

//       <Box className="grid grid--1x2 feature">
//         <Grid
//           display="grid"
//           templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
//           gap="4rem 2rem"
//           margin="12rem 0"
//         >
//           <Box className="feature__content">
//             <Box
//               className="icon-container"
//               background="#f3f9fa"
//               width="64px"
//               height="64px"
//               borderRadius="100%"
//               display="inline-flex"
//               justifyContent="center"
//               alignItems="center"
//             >
//               <Icon
//                 className="icon icon--primary"
//                 as={GiTalk}
//                 width="40px"
//                 height="40px"
//                 color="var(--color-primary)"
//               />
//             </Box>
//             <Text
//               className="h3 feature__heading"
//               color="var(--color-headings)"
//               fontSize={{ base: "2.8rem", lg: "2.4rem" }}
//               fontWeight="bold"
//               lineHeight="1.3"
//               margin="1rem 0"
//             >
//               Super Easy to Use
//             </Text>
//             <Text className="p" marginTop="0">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
//               voluptate tempora qui distinctio consequatur aliquid pariatur
//               cupiditate quas cum fugit.
//             </Text>
//             <ChakraLink
//               className="link-arrow"
//               href="#"
//               fontSize={{ base: "2rem", lg: "1.5rem" }}
//               fontWeight="bold"
//               color="#ff3400"
//               textTransform="uppercase"
//               _hover={{
//                 "::after": {
//                   marginLeft: "10px",
//                 },
//               }}
//               sx={{
//                 "::after": {
//                   content: '">"',
//                   marginLeft: "5px",
//                   transition: "margin 0.15s",
//                 },
//               }}
//             >
//               Learn More
//             </ChakraLink>
//           </Box>
//           <Box as="picture">
//             <source
//               type="image/webp"
//               srcSet={`${easyWebp} 1x, ${easyWebp2x} 2x`}
//             />
//             <source
//               type="image/png"
//               srcSet={`${easyJpg} 1x, ${easyJpg2x} 2x`}
//             />
//             <Image
//               className="feature__image"
//               src={easyJpg2x}
//               alt="easy"
//               width="100%"
//             />
//           </Box>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default BlockFeatures;

// *********** This is the refactored version ***********

const featuresData = [
  {
    icon: GiTalk,
    iconColor: "var(--color-primary)",
    title: "TED",
    description: `TED (Technology, Entertainment, Design) is a nonprofit organization known for its short,
    powerful talks on diverse topics centered around "Ideas Worth Spreading".
    TED aims to uncover and share concepts that ignite creativity and drive meaningful changes. It
    revolves around curiosity, reason, wonder and the pursuit of knowledge. TED gladly embraces
    individuals from all fields and backgrounds who are in search of profound insights into the world
    and meaningful interactions with fellow beings.`,
    linkText: "Explore More",
    linkUrl: "https://www.ted.com/about/our-organization",
    image: {
      src: img1,
      alt: "easy",
    },
    size: "40px",
  },
  {
    icon: GiTalk,
    iconColor: "var(--color-primary)",
    title: "TEDx",
    description: `Imagine a day brimming with remarkable speakers, thought-provoking videos, and discussions
    that broaden perspectives. By participating in a TEDx event, you open the door to engaging with a
    unique gathering in your local community that unleashes fresh ideas, inspires, and imparts
    knowledge.
    A TEDx event is a community-based gathering where live talks and performances resembling TED
    talks are shared. These events are meticulously arranged and managed by independent organizers,
    tailored to each community's specific needs. While the content and structure of each TEDx event
    are distinct and self-developed, they all share certain common elements.`,
    linkText: "Explore More",
    linkUrl:
      "https://www.ted.com/participate/organize-a-local-tedx-event/before-you-start/what-is-a-tedx-event",
    image: {
      src: img3,
      alt: "easy",
      // srcSetWebp: `${fastWebp} 1x, ${fastWebp2x} 2x`,
      // srcSetPng: `${fastJpg} 1x, ${fastJpg2x} 2x`,
    },
    size: "40px",
  },

  {
    icon: GiTalk,
    iconColor: "var(--color-primary)",
    title: "TEDxAveLorne",
    description: `Introducing ourselves as TEDxAveLorne, a fresh and dynamic TEDx team rooted in Montreal.
    Our name holds the significance of the place where the inspiration to embark on the TEDx journey
    was conceived. This led us to become an integral part of the TEDx global community, where we're
    dedicated to creating a platform for our local community to share their invaluable, world-changing
    ideas Ideas Worth Spreading.We are fervently preparing for our first event, a captivating full-day experience set against the
    backdrop of a Fall day in the heart of downtown Montreal.`,
    linkText: "Explore More",
    linkUrl: "https://www.ted.com/tedx/events/53037",
    image: {
      src: img2,
      alt: "easy",
      // srcSetWebp: `${wordpressWebp} 1x, ${wordpressWebp2x} 2x`,
      // srcSetPng: `${wordpressJpg} 1x, ${wordpressJpg2x} 2x`,
    },
    size: "40px",
  },
  // Add more feature objects as needed
];

interface FeatureProps {
  // icon: React.ElementType;
  // iconColor: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  image: {
    src: string;
    alt: string;
    // srcSetWebp: string;
    // srcSetPng: string;
  };
  size: string;
}

const Feature: React.FC<FeatureProps> = ({
  // icon: IconComponent,
  // iconColor,
  title,
  description,
  linkText,
  linkUrl,
  image,
  size,
}) => (
  <Box
    className="feature__content"
    // border={"1px solid red"}
    // padding="2rem"
  >
    {/* <Box
      className="icon-container"
      background="#f3f9fa"
      width="64px"
      height="64px"
      borderRadius="100%"
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
    >
      <IconComponent
        className="icon icon--primary"
        boxSize={size}
        color={iconColor}
      />
    </Box> */}
    <Text
      className="h3 feature__heading"
      // color="var(--color-white)"
      color="white"
      fontSize={{ base: "2.8rem", lg: "2.5rem" }}
      fontWeight="bold"
      lineHeight="1.3"
      margin="1rem 0"
    >
      {title}
    </Text>
    <Text
      className="p"
      marginTop="0"
      marginBottom="1.5rem"
      color={useColorModeValue("gray.400", "gray.400")}
      // textAlign={"justify"}
    >
      {description}
    </Text>
    <ChakraLink
      className="link-arrow"
      href={linkUrl}
      fontSize={{ base: "2rem", lg: "1.7rem" }}
      fontWeight="bold"
      color="tomato"
      textTransform="uppercase"
      target="_blank"
      _hover={{
        "::after": {
          marginLeft: "10px",
        },
      }}
      sx={{
        "::after": {
          content: '">"',
          marginLeft: "5px",
          transition: "margin 0.15s",
        },
      }}
    >
      {linkText}
    </ChakraLink>
  </Box>
);

interface FeatureImageProps {
  image: {
    src: string;
    alt: string;
    // srcSetWebp: string;
    // srcSetPng: string;
  };
}

const FeatureImage: React.FC<FeatureImageProps> = ({ image }) => (
  <Box as="picture">
    {/* <source type="image/webp" srcSet={image.srcSetWebp} />
    <source type="image/png" srcSet={image.srcSetPng} /> */}
    <Image
      className="feature__image"
      src={image.src}
      alt={image.alt}
      width="100%"
      borderRadius={"5%"}
      boxShadow="0 0 30px 1px black"
    />
  </Box>
);

// const BlockFeatures: React.FC = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-in-out",
//     });
//   }, []);

const BlockFeatures: React.FC = () => {
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
      className="block block--dark"
      bg={useColorModeValue("gray.800", "gray.800")}
      width="100%"
      overflow={"hidden"}
      // clipPath="polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%)"
    >
      <Box
        className="block container"
        padding="6rem 2rem"
        maxWidth="114rem"
        margin="0 auto"
      >
        <Box
          className="block__header"
          textAlign="center"
          // marginBottom="-4rem"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <Text
            className="h2 block__heading"
            color="#E1DCA9"
            marginBottom="1rem"
            marginTop="0"
            fontSize={{ base: "5.5rem", lg: "7rem" }}
            fontWeight="bold"
            lineHeight="1.1"
          >
            Unveiling the TED Universe
          </Text>
          <Text
            className="p"
            color="silver"
            fontSize={{ base: "2.0rem", lg: "2.8rem" }}
            // fontWeight="bold"
            marginBottom="11rem"
          >
            Understanding TED, TEDx, and TEDxAveLorne
          </Text>
        </Box>
        {featuresData.map((feature, index) => (
          <Box
            key={index}
            className={`grid grid--1x2 feature feature-${
              index % 2 === 0 ? "even" : "odd"
            }`}
          >
            <Grid
              display="grid"
              templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
              gap="4rem 2rem"
              margin="10rem 0"
              sx={{
                order: index % 2 === 0 ? 1 : 2,
                // textAlign: index % 2 === 0 ? "right" : "left",
              }}
            >
              {index % 2 === 0 ? (
                <>
                  <Box data-aos="fade-right" data-aos-duration="500">
                    <Feature {...feature} size={feature.size} />
                  </Box>
                  <Box data-aos="fade-left" data-aos-duration="500">
                    <FeatureImage image={feature.image} />
                  </Box>
                </>
              ) : (
                <>
                  <Box data-aos="fade-right" data-aos-duration="500">
                    <FeatureImage
                      image={feature.image}
                      data-aos-duration="500"
                    />
                  </Box>
                  <Box data-aos="fade-left" data-aos-duration="500">
                    <Feature {...feature} size={feature.size} />
                  </Box>
                </>
              )}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BlockFeatures;
