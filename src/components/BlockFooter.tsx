// import { useState } from "react";
// import { BsChevronDown } from "react-icons/bs";

// import logo from "../assets/images/logo.svg";

// const BlockFooter = () => {
//   const [column1Expanded, setColumn1Expanded] = useState(true);
//   const [column2Expanded, setColumn2Expanded] = useState(false);
//   const [column3Expanded, setColumn3Expanded] = useState(false);
//   const [column4Expanded, setColumn4Expanded] = useState(false);

//   const handleColumn1Toggle = () => {
//     setColumn1Expanded(!column1Expanded);
//   };

//   const handleColumn2Toggle = () => {
//     setColumn2Expanded(!column2Expanded);
//   };

//   const handleColumn3Toggle = () => {
//     setColumn3Expanded(!column3Expanded);
//   };

//   const handleColumn4Toggle = () => {
//     setColumn4Expanded(!column4Expanded);
//   };

//   return (
//     <footer className="block block--dark footer">
//       <div className="container grid footer__sections">
//         <section
//           className={`collapsible footer__section ${
//             column1Expanded ? "collapsible--expanded" : ""
//           }`}
//         >
//           <header className="collapsible__header" onClick={handleColumn1Toggle}>
//             <h2 className="collapsible__heading footer__heading">Products</h2>
//             <BsChevronDown
//               className={`icon icon--white collapsible__chevron ${
//                 column1Expanded ? "collapsible--expanded" : ""
//               }`}
//             />
//           </header>
//           <div className="collapsible__content">
//             <ul className="list">
//               <li>
//                 <a href="#">Website Hosting</a>
//               </li>
//               <li>
//                 <a href="#">Free Automated Wordpress</a>
//               </li>
//               <li>
//                 <a href="#">Migrations</a>
//               </li>
//             </ul>
//           </div>
//         </section>

//         <section
//           className={`collapsible footer__section ${
//             column2Expanded ? "collapsible--expanded" : ""
//           }`}
//         >
//           <header className="collapsible__header" onClick={handleColumn2Toggle}>
//             <h2 className="collapsible__heading footer__heading">Company</h2>
//             <BsChevronDown
//               className={`icon icon--white collapsible__chevron ${
//                 column2Expanded ? "collapsible--expanded" : ""
//               }`}
//             />
//           </header>
//           <div className="collapsible__content">
//             <ul className="list">
//               <li>
//                 <a href="#">About</a>
//               </li>
//               <li>
//                 <a href="#">Affiliates</a>
//               </li>
//               <li>
//                 <a href="#">Blog</a>
//               </li>
//             </ul>
//           </div>
//         </section>

//         <section
//           className={`collapsible footer__section ${
//             column3Expanded ? "collapsible--expanded" : ""
//           }`}
//         >
//           <header className="collapsible__header" onClick={handleColumn3Toggle}>
//             <h2 className="collapsible__heading footer__heading">Support</h2>
//             <BsChevronDown
//               className={`icon icon--white collapsible__chevron ${
//                 column3Expanded ? "collapsible--expanded" : ""
//               }`}
//             />
//           </header>
//           <div className="collapsible__content">
//             <ul className="list">
//               <li>
//                 <a href="#">Contact</a>
//               </li>
//               <li>
//                 <a href="#">Knowledge Base</a>
//               </li>
//               <li>
//                 <a href="#">FAQ</a>
//               </li>
//             </ul>
//           </div>
//         </section>

//         <section
//           className={`collapsible footer__section ${
//             column4Expanded ? "collapsible--expanded" : ""
//           }`}
//         >
//           <header className="collapsible__header" onClick={handleColumn4Toggle}>
//             <h2 className="collapsible__heading footer__heading">Domains</h2>
//             <BsChevronDown
//               className={`icon icon--white collapsible__chevron ${
//                 column4Expanded ? "collapsible--expanded" : ""
//               }`}
//             />
//           </header>
//           <div className="collapsible__content">
//             <ul className="list">
//               <li>
//                 <a href="#">Domain Checker</a>
//               </li>
//               <li>
//                 <a href="#">Domain Transfer</a>
//               </li>
//               <li>
//                 <a href="#">Free Domain</a>
//               </li>
//             </ul>
//           </div>
//         </section>
//         <section className="footer__brand">
//           <img src={logo} alt="" />
//           <p className="footer__copyright">Copyright 2020 Mosh Hamedani</p>
//         </section>
//       </div>
//     </footer>
//   );
// };

// export default BlockFooter;

// import { useState } from "react";
// import { BsChevronDown } from "react-icons/bs";

// import logo from "../assets/images/logo.svg";

// const columnsData = [
//   {
//     title: "Products",
//     items: ["Website Hosting", "Free Automated Wordpress", "Migrations"],
//   },
//   { title: "Company", items: ["About", "Affiliates", "Blog"] },
//   { title: "Support", items: ["Contact", "Knowledge Base", "FAQ"] },
//   {
//     title: "Domains",
//     items: ["Domain Checker", "Domain Transfer", "Free Domain"],
//   },
// ];

// const BlockFooter = () => {
//   const [expandedColumns, setExpandedColumns] = useState([
//     true,
//     false,
//     false,
//     false,
//   ]);

//   const handleToggle = (index: number) => {
//     const updatedColumns = [...expandedColumns];
//     updatedColumns[index] = !updatedColumns[index];
//     setExpandedColumns(updatedColumns);
//   };

//   return (
//     <footer className="block block--dark footer">
//       <div className="container grid footer__sections">
//         {columnsData.map((column, index) => (
//           <section
//             key={column.title}
//             className={`collapsible footer__section ${
//               expandedColumns[index] ? "collapsible--expanded" : ""
//             }`}
//           >
//             <div
//               className="collapsible__header"
//               onClick={() => handleToggle(index)}
//             >
//               <h2 className="collapsible__heading footer__heading">
//                 {column.title}
//               </h2>
//               <BsChevronDown
//                 className={`icon icon--white collapsible__chevron ${
//                   expandedColumns[index] ? "collapsible--expanded" : ""
//                 }`}
//               />
//             </div>
//             <div className="collapsible__content">
//               <ul className="list">
//                 {column.items.map((item, itemIndex) => (
//                   <li key={itemIndex}>
//                     <a href="#">{item}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>
//         ))}
//         <div className="footer__brand">
//           <img src={logo} alt="" />
//           <p className="footer__copyright">Copyright 2020 Mosh Hamedani</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default BlockFooter;

import { BsChevronDown } from "react-icons/bs";
import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Text,
  Icon,
  Flex,
  Image,
  List,
  HStack,
  ListItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
// import logo from "../assets/images/logo.svg";
import logo from "../assets/images/logo.png";
import tedxWhite from "../assets/images/tedxWhite.png";
import tedxBlack from "../assets/images/tedxBlack.png";

import { IconButton, Stack, useColorModeValue } from "@chakra-ui/react";
import { BsInstagram, BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";

const BlockFooter = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); // Set your large screen breakpoint

  const [column1Expanded, setColumn1Expanded] = useState(true);
  const [column2Expanded, setColumn2Expanded] = useState(false);
  const [column3Expanded, setColumn3Expanded] = useState(false);
  const [column4Expanded, setColumn4Expanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Update the state when the window is resized
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  const handleColumn1Toggle = () => {
    setColumn1Expanded(!column1Expanded);
  };

  const handleColumn2Toggle = () => {
    setColumn2Expanded(!column2Expanded);
  };

  const handleColumn3Toggle = () => {
    setColumn3Expanded(!column3Expanded);
  };

  const handleColumn4Toggle = () => {
    setColumn4Expanded(!column4Expanded);
  };

  return (
    <Box
      className="block block--dark footer"
      padding="6rem 2rem"
      paddingBottom="10rem"
      bg="#232323"
      color="#7b858b"
      overflow={"hidden"}
    >
      <Box className="grid grid--1x2" maxWidth="1140px" margin="0 auto">
        <Grid
          display="grid"
          templateColumns={[
            "1fr",
            null,
            null,
            "repeat(auto-fit, minmax(10rem, 1fr))",
          ]}
        >
          {isLargeScreen ? (
            <Box
              className={`footer__section`}
              padding="2rem"
              borderBottom={{ base: "1px solid #393939", lg: "0" }}
              marginLeft={{ lg: "6rem" }}
            >
              <Text
                className="h2 collapsible__heading footer__heading"
                color="#ddd"
                marginBottom="1rem"
                fontSize="1.6rem"
                fontWeight="bold"
                lineHeight="1.1"
                marginTop="0"
                textTransform="uppercase"
              >
                PROGRAMS
              </Text>
              <Box className="collapsible__content">
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      TED
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      TEDx
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      TEDxAveLorne
                    </ChakraLink>
                  </ListItem>
                </List>
              </Box>
            </Box>
          ) : (
            <Box
              className={`collapsible footer__section ${
                column1Expanded ? "collapsible--expanded" : ""
              }`}
              padding="2rem"
              borderBottom={{ base: "1px solid #393939", lg: "0" }}
            >
              <Box
                className="collapsible__header"
                display="flex"
                justifyContent="space-between"
                onClick={handleColumn1Toggle}
              >
                <Text
                  className="h2 collapsible__heading footer__heading"
                  color="#ddd"
                  marginBottom="1rem"
                  fontSize="2.5rem"
                  fontWeight="bold"
                  lineHeight="1.1"
                  marginTop="0"
                  textTransform="uppercase"
                >
                  PROGRAMS
                </Text>
                <Icon
                  className={`icon icon--white collapsible__chevron ${
                    column1Expanded ? "collapsible--expanded" : ""
                  }`}
                  as={IoIosArrowDropdownCircle}
                  width="40px"
                  height="40px"
                  color="#393939"
                  style={{
                    transform: column1Expanded ? "rotate(0)" : "rotate(-90deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </Box>
              <Box
                className="collapsible__content"
                style={{
                  maxHeight: column1Expanded ? "1000px" : "0",
                  opacity: column1Expanded ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s, opacity 0.3s",
                }}
              >
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="1rem">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      TED
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="1rem">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      TEDx
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      TEDxAveLorne
                    </ChakraLink>
                  </ListItem>
                </List>
              </Box>
            </Box>
          )}
          {isLargeScreen ? (
            <Box
              className={`footer__section`}
              padding="2rem"
              borderBottom={{ base: "1px solid #393939", lg: "0" }}
              marginLeft={{ lg: "6rem" }}
            >
              <Text
                className="h2 collapsible__heading footer__heading"
                color="#ddd"
                marginBottom="1rem"
                fontSize="1.6rem"
                fontWeight="bold"
                lineHeight="1.1"
                marginTop="0"
                textTransform="uppercase"
              >
                SECTION
              </Text>
              <Box className="collapsible__content">
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Item1
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Item2
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Item3
                    </ChakraLink>
                  </ListItem>
                </List>
              </Box>
            </Box>
          ) : (
            <Box
              className={`collapsible footer__section ${
                column2Expanded ? "collapsible--expanded" : ""
              }`}
              padding="2rem"
              borderBottom={{ base: "1px solid #393939", lg: "0" }}
            >
              <Box
                className="collapsible__header"
                display="flex"
                justifyContent="space-between"
                onClick={handleColumn2Toggle}
              >
                <Text
                  className="h2 collapsible__heading footer__heading"
                  color="#ddd"
                  marginBottom="1rem"
                  fontSize="2.5rem"
                  fontWeight="bold"
                  lineHeight="1.1"
                  marginTop="0"
                  textTransform="uppercase"
                >
                  TITLE
                </Text>
                <Icon
                  className={`icon icon--white collapsible__chevron ${
                    column2Expanded ? "collapsible--expanded" : ""
                  }`}
                  as={IoIosArrowDropdownCircle}
                  width="40px"
                  height="40px"
                  color="#393939"
                  style={{
                    transform: column2Expanded ? "rotate(0)" : "rotate(-90deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </Box>
              <Box
                className="collapsible__content"
                style={{
                  maxHeight: column2Expanded ? "1000px" : "0",
                  opacity: column2Expanded ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s, opacity 0.3s",
                }}
              >
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="1rem">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Item1
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="1rem">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Item2
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Item3
                    </ChakraLink>
                  </ListItem>
                </List>
              </Box>
            </Box>
          )}
          {isLargeScreen ? (
            <Box
              className={`footer__section`}
              padding="2rem"
              borderBottom={{ base: "1px solid #393939", lg: "0" }}
              marginLeft={{ lg: "4rem" }}
            >
              <Text
                className="h2 collapsible__heading footer__heading"
                color="#ddd"
                marginBottom="1rem"
                fontSize="1.6rem"
                fontWeight="bold"
                lineHeight="1.1"
                marginTop="0"
                textTransform="uppercase"
              >
                OUR COMMUNITY
              </Text>
              <Box className="collapsible__content">
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <ChakraLink
                      className="link-arrow"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSc0UPKkrAe914FpkjrmzyIRu0WEwJlS23JAEAx8KC8A3Vv4Tg/viewform"
                      target="_blank"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Organizers
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Speakers
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <ChakraLink
                      className="link-arrow"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfkWbg1-z8OWOk6cJEPULsA8dPKrqdZVDUO6k36biPD1ydkQQ/viewform"
                      target="_blank"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Sponsors
                    </ChakraLink>
                  </ListItem>
                </List>
              </Box>
            </Box>
          ) : (
            <Box
              className={`collapsible footer__section ${
                column3Expanded ? "collapsible--expanded" : ""
              }`}
              padding="2rem"
              borderBottom={{ base: "1px solid #393939", lg: "0" }}
            >
              <Box
                className="collapsible__header"
                display="flex"
                justifyContent="space-between"
                onClick={handleColumn3Toggle}
              >
                <Text
                  className="h2 collapsible__heading footer__heading"
                  color="#ddd"
                  marginBottom="1rem"
                  fontSize="2.5rem"
                  fontWeight="bold"
                  lineHeight="1.1"
                  marginTop="0"
                  textTransform="uppercase"
                >
                  OUR COMMUNITY
                </Text>
                <Icon
                  className={`icon icon--white collapsible__chevron ${
                    column3Expanded ? "collapsible--expanded" : ""
                  }`}
                  as={IoIosArrowDropdownCircle}
                  width="40px"
                  height="40px"
                  color="#393939"
                  style={{
                    transform: column3Expanded ? "rotate(0)" : "rotate(-90deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </Box>
              <Box
                className="collapsible__content"
                style={{
                  maxHeight: column3Expanded ? "1000px" : "0",
                  opacity: column3Expanded ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s, opacity 0.3s",
                }}
              >
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="1rem">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Organizers
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="1rem">
                    <ChakraLink
                      className="link-arrow"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSc54Ba2B975pYmKBXZVaXN0xdQ97e18fE8NmGb-WfT27KXJyw/viewform"
                      target="_blank"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Speakers
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="1rem">
                    <ChakraLink
                      className="link-arrow"
                      href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Sponsors
                    </ChakraLink>
                  </ListItem>
                </List>
              </Box>
            </Box>
          )}
          {isLargeScreen ? (
            <Box
              className={`footer__section`}
              padding="2rem"
              borderBottom={{ base: "1px solid #393939", lg: "0" }}
              marginLeft={{ lg: "6rem" }}
            >
              <Text
                className="h2 collapsible__heading footer__heading"
                color="#ddd"
                marginBottom="1rem"
                fontSize="1.6rem"
                fontWeight="bold"
                lineHeight="1.1"
                marginTop="0"
                textTransform="uppercase"
              >
                FOLLOW US
              </Text>
              <Box className="collapsible__content">
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <ChakraLink
                      className="link-arrow"
                      href="https://www.linkedin.com/company/tedxavelorne/"
                      target="_blank"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      LinkedIn
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <ChakraLink
                      className="link-arrow"
                      href="https://instagram.com/tedxavelorne?igshid=MzRIODBiNWFIZA=="
                      target="_blank"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Instagram
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <ChakraLink
                      className="link-arrow"
                      href="https://twitter.com/tedxavelorne?=gQ5JPPcDU0I54uaHmdPlew&s=35"
                      target="_blank"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Twitter
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <ChakraLink
                      className="link-arrow"
                      // href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Facebook
                    </ChakraLink>
                  </ListItem>
                </List>
              </Box>
            </Box>
          ) : (
            <Box
              className={`collapsible footer__section ${
                column4Expanded ? "collapsible--expanded" : ""
              }`}
              padding="2rem"
              borderBottom={{ base: "1px solid #393939", lg: "0" }}
            >
              <Box
                className="collapsible__header"
                display="flex"
                justifyContent="space-between"
                onClick={handleColumn4Toggle}
              >
                <Text
                  className="h2 collapsible__heading footer__heading"
                  color="#ddd"
                  marginBottom="1rem"
                  fontSize="2.5rem"
                  fontWeight="bold"
                  lineHeight="1.1"
                  marginTop="0"
                  textTransform="uppercase"
                >
                  FOLLOW US
                </Text>
                <Icon
                  className={`icon icon--white collapsible__chevron ${
                    column4Expanded ? "collapsible--expanded" : ""
                  }`}
                  as={IoIosArrowDropdownCircle}
                  width="40px"
                  height="40px"
                  color="#393939"
                  style={{
                    transform: column4Expanded ? "rotate(0)" : "rotate(-90deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </Box>
              <Box
                className="collapsible__content"
                style={{
                  maxHeight: column4Expanded ? "1000px" : "0",
                  opacity: column4Expanded ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s, opacity 0.3s",
                }}
              >
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="1rem">
                    <ChakraLink
                      className="link-arrow"
                      href="https://www.linkedin.com/company/tedxavelorne/"
                      target="_blank"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      LinkedIn
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="1rem">
                    <ChakraLink
                      className="link-arrow"
                      href="https://instagram.com/tedxavelorne?igshid=MzRIODBiNWFIZA=="
                      target="_blank"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Instagram
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="1rem">
                    <ChakraLink
                      className="link-arrow"
                      href="https://twitter.com/tedxavelorne?=gQ5JPPcDU0I54uaHmdPlew&s=35"
                      target="_blank"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Twitter
                    </ChakraLink>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="1rem">
                    <ChakraLink
                      className="link-arrow"
                      // href="#"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color="#777"
                      // textTransform="uppercase"
                      _hover={{ color: "#fff" }}
                    >
                      Facebook
                    </ChakraLink>
                  </ListItem>
                </List>
              </Box>
            </Box>
          )}
          <Flex
            className="footer__brand"
            marginTop={{ base: "5rem", lg: "1rem" }}
            textAlign="center"
            maxWidth="230px"
            order={{ lg: "-1" }}
            flexDir="column"
            alignSelf="start"
            marginRight={0}
            justifyContent={"center"}
            alignItems={"center"}
            // marginLeft={{ lg: "-8rem" }}
          >
            <ChakraLink>
              {/* <Image
                  src={logo}
                  width="6.5rem"
                  alt="logo"
                  marginRight="1rem"
                /> */}
              <Image
                className="hero__image"
                src={tedxWhite}
                width={{ lg: "50rem" }}
                marginBottom="1rem"
              />
            </ChakraLink>
            <Text
              className="p footer__copyright"
              marginTop="0"
              fontSize={{ base: "2.1rem", lg: "1.7rem" }}
              color="#fff"
              opacity="0.3"
            >
              Copyright 2023 TEDxAveLorne
            </Text>
          </Flex>
        </Grid>
      </Box>
      <Stack
        display="flex"
        flexDirection="row"
        spacing={6}
        justifyContent={"center"}
        marginTop={{ base: "5rem", lg: "2rem" }}
      >
        <Box
          as="a"
          href="https://www.linkedin.com/company/tedxavelorne/"
          target="_blank"
        >
          <IconButton
            aria-label="linkedin"
            variant="ghost"
            size="xl"
            icon={<BsLinkedin size="20px" />}
            _hover={{
              bg: useColorModeValue("gray.200", "gray.200"),
              color: useColorModeValue("gray.700", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
        <Box
          as="a"
          href="https://twitter.com/tedxavelorne?=gQ5JPPcDU0I54uaHmdPlew&s=35"
          target="_blank"
        >
          <IconButton
            aria-label="twitter"
            variant="ghost"
            size="xl"
            icon={<BsTwitter size="20px" />}
            _hover={{
              bg: useColorModeValue("gray.200", "gray.200"),
              color: useColorModeValue("gray.700", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
        <Box
          as="a"
          href="https://instagram.com/tedxavelorne?igshid=MzRIODBiNWFIZA=="
          target="_blank"
        >
          <IconButton
            aria-label="instagram"
            variant="ghost"
            size="xl"
            icon={<BsInstagram size="20px" />}
            _hover={{
              bg: useColorModeValue("gray.200", "gray.200"),
              color: useColorModeValue("gray.700", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
        <Box
          as="a"
          // href="#"
          target="_blank"
        >
          <IconButton
            aria-label="facebook"
            variant="ghost"
            size="xl"
            icon={<BsFacebook size="20px" />}
            _hover={{
              bg: useColorModeValue("gray.200", "gray.200"),
              color: useColorModeValue("gray.700", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default BlockFooter;
