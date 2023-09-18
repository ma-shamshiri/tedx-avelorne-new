// const BlockPlans = () => {
//   return (
//     <section className="block container block-plans">
//       <div className="grid grid--1x3">
//         <div className="plan">
//           <div className="card card--secondary">
//             <header className="card__header">
//               <h3 className="plan__name">Entry</h3>
//               <span className="plan__price">$14</span>
//               <span className="plan__billing-cycle">/month</span>
//               <span className="badge badge--secondary badge--small">
//                 10% OFF
//               </span>
//               <span className="plan__description">East start on the cloud</span>
//             </header>
//             <div className="card__body">
//               <ul className="list list--tick">
//                 <li className="list__item">Unlimited Websites</li>
//                 <li className="list__item">Unlimited Bandwidth</li>
//                 <li className="list__item">100 GB SSD Sotrage</li>
//                 <li className="list__item">3 GB RAM</li>
//               </ul>
//               <button className="btn btn--outline btn--block">Buy Now</button>
//             </div>
//           </div>
//         </div>
//         <div className="plan plan--popular">
//           <div className="card card--primary">
//             <header className="card__header">
//               <h3 className="plan__name">Entry</h3>
//               <span className="plan__price">$14</span>
//               <span className="plan__billing-cycle">/month</span>
//               <span className="badge badge--primary badge--small">10% OFF</span>
//               <span className="plan__description">East start on the cloud</span>
//             </header>
//             <div className="card__body">
//               <ul className="list list--tick">
//                 <li className="list__item">Unlimited Websites</li>
//                 <li className="list__item">Unlimited Bandwidth</li>
//                 <li className="list__item">100 GB SSD Sotrage</li>
//                 <li className="list__item">3 GB RAM</li>
//               </ul>
//               <button className="btn btn--outline btn--block">Buy Now</button>
//             </div>
//           </div>
//         </div>
//         <div className="plan">
//           <div className="card card--secondary">
//             <header className="card__header">
//               <h3 className="plan__name">Entry</h3>
//               <span className="plan__price">$14</span>
//               <span className="plan__billing-cycle">/month</span>
//               <span className="badge badge--secondary badge--small">
//                 10% OFF
//               </span>
//               <span className="plan__description">East start on the cloud</span>
//             </header>
//             <div className="card__body">
//               <ul className="list list--tick">
//                 <li className="list__item">Unlimited Websites</li>
//                 <li className="list__item">Unlimited Bandwidth</li>
//                 <li className="list__item">100 GB SSD Sotrage</li>
//                 <li className="list__item">3 GB RAM</li>
//               </ul>
//               <button className="btn btn--outline btn--block">Buy Now</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlockPlans;

import {
  Badge,
  Box,
  Flex,
  Grid,
  Image,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import React, { useEffect } from "react";
import popular from "../assets/images/popular.svg";
import sponsor from "../assets/images/sponsor.jpg";
// import teamMember from "../assets/images/teamMember.jpg";
// import teamMember2 from "../assets/images/teamMember2.jpg";
// import teamMember3 from "../assets/images/teamMember3.jpg";
import teamMember4 from "../assets/images/teamMember4.jpg";
import tickImage from "../assets/images/tick.svg";

import speaker from "../assets/images/speaker.jpg";

// const BlockPlans: React.FC = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-in-out",
//     });
//   }, []);

const BlockPlans: React.FC = () => {
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
      bg="#E6E3D3"
      color="#7b858b"
      // clipPath="polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)"
    >
      <Box
        className="block__header container"
        padding="0rem 2rem"
        textAlign="center"
        maxWidth="100rem"
        margin="0 auto"
      >
        <Box data-aos="fade-up" data-aos-duration="500">
          <Text
            className="h2 block__heading"
            color={useColorModeValue("gray.700", "gray.700")}
            marginBottom="4rem"
            marginTop="0"
            fontSize={{ base: "5.5rem", lg: "7rem" }}
            fontWeight="bold"
            lineHeight="1.1"
          >
            Be a Part of Something Extraordinary
          </Text>
          <Text
            className="p"
            color={useColorModeValue("gray.600", "gray.600")}
            marginBottom="10rem"
            marginTop="0"
            fontSize={{ base: "2.0rem", lg: "2.8rem" }}
            lineHeight="1.1"
          >
            Connect with Visionaries, Innovators, and Changemakers <br />{" "}
            Speakers, Team Members, and Sponsors Welcome!
          </Text>
        </Box>
        <Box className="grid grid--1x3">
          <Grid
            display="grid"
            templateColumns={["1fr", null, null, "repeat(3, 1fr)"]}
            gap="8rem 4rem"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <Box
              className="plan"
              _hover={{ transform: "scale(1.05)" }}
              transition="transform 0.2s ease-out"
            >
              <Box
                className="card card--secondary"
                borderRadius="7px"
                boxShadow="0 0 20px 10px gray"
                overflow="hidden"
                justifyContent="center"
                alignItems="center"
                maxWidth="500px"
                margin="0 auto"
                // data-aos="fade-right"
                // data-aos-duration="500"
              >
                <Image
                  src={speaker}
                  width="100%"
                  // objectFit="cover"
                  opacity="0.99"
                  // p="0.1rem 0.5%"
                  // borderRadius="7px"
                  borderTopRadius="7px"
                />
                <Box
                  className="card__header"
                  bg="linear-gradient(to bottom, #6322BF, #F226AA)"
                  color="#fff"
                  p="2rem 7%"
                >
                  <Text
                    className="plan__name"
                    color="#fff"
                    margin="0"
                    fontSize={{ base: "6rem", lg: "3.6rem" }}
                    fontWeight="bold"
                  >
                    Speaker
                  </Text>
                </Box>
                <Box className="card__body" p="2rem 7%">
                  <List
                    className="list list--tick"
                    color="var(--color-headings)"
                    padding={0}
                    // paddingLeft={"3rem"}
                    style={{
                      listStyleImage: `url(${tickImage})`,
                    }}
                  >
                    <Text>
                      Join us as a Speaker to share your expertise and passion
                      on the TED Talks stage, where your ideas can inspire the
                      world.
                    </Text>

                    <Link
                      className="btn btn--secondary btn--block"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSc54Ba2B975pYmKBXZVaXN0xdQ97e18fE8NmGb-WfT27KXJyw/viewform"
                      target="_blank"
                      border="2px solid var(--color-headings)"
                      borderRadius="40px"
                      cursor="pointer"
                      fontSize={{ base: "1.8rem", lg: "1.5rem" }}
                      fontWeight="600"
                      margin="1rem 0"
                      outline="0"
                      padding="2rem 4vw"
                      textAlign="center"
                      textTransform="uppercase"
                      whiteSpace="nowrap"
                      bg="#fff"
                      color="var(--color-headings)"
                      display="inline-block"
                      width="100%"
                      _hover={{
                        bg: "var(--color-headings)",
                        color: "#fff",
                      }}
                    >
                      Join Us
                    </Link>
                  </List>
                </Box>
              </Box>
            </Box>

            <Box
              className="plan plan--popular"
              transform="scale(1.1)"
              _hover={{ transform: "scale(1.15)" }}
              transition="transform 0.2s ease-out"
              // data-aos="fade-up"
              // data-aos-duration="500"
            >
              {/* <Box
                className="card card--primary"
                borderRadius="7px"
                boxShadow="0 0 20px 10px #f3f3f3"
                overflow="hidden"
                justifyContent="center"
                alignItems="center"
                maxWidth="500px"
                margin="0 auto"
              >
                <Box
                  className="card__header"
                  bg="#F926AE"
                  color="#fff"
                  p="2rem 7%"
                  position="relative"
                >
                  <Image
                    src={popular}
                    width="40px"
                    display="inline-block"
                    position="absolute"
                    top="-6px"
                    right="5%"
                  />
                  <Text
                    className="plan__name"
                    color="#fff"
                    margin="0"
                    fontSize={{ base: "2.4rem", lg: "1.4rem" }}
                    fontWeight="500"
                  >
                    Entry
                  </Text>
                  <Flex
                    // alignItems="center"
                    // justifyContent="space-between"
                    flexDirection="row" // Set direction to row
                    // alignItems="flex-end"
                    alignItems="baseline"
                  >
                    <Text
                      className="plan__price"
                      fontSize={{ base: "6rem", lg: "5rem" }}
                    >
                      $14
                    </Text>
                    <Text
                      className="plan__billing-cycle"
                      fontSize={{ base: "2.4rem", lg: "1.6rem" }}
                      fontWeight="300"
                      opacity="0.8"
                      marginRight="1rem"
                    >
                      /month
                    </Text>
                    <Badge
                      className="badge badge--primary badge--small"
                      as={Box}
                      borderRadius="20px"
                      fontSize={{ base: "1.6rem", lg: "1.2rem" }}
                      fontWeight="600"
                      padding={"0.5rem 1.5rem"}
                      whiteSpace="nowrap"
                      bg="#116ade"
                      color="#fff"
                    >
                      10% Off
                    </Badge>
                  </Flex>

                  <Text
                    className="plan__description"
                    fontSize="2rem"
                    fontWeight="300"
                    letterSpacing="1px"
                    display="block"
                  >
                    East start on the cloud
                  </Text>
                </Box>
                <Box className="card__body" p="2rem 7%">
                  <List
                    className="list list--tick"
                    color="var(--color-headings)"
                    padding={0}
                    paddingLeft={"3rem"}
                    style={{
                      listStyleImage: `url(${tickImage})`,
                    }}
                  >
                    <ListItem
                      className="list__item"
                      paddingLeft={{ base: "0.5rem", lg: "0" }}
                      marginBottom={"1rem"}
                    >
                      Unlimited Websites
                    </ListItem>
                    <ListItem
                      className="list__item"
                      paddingLeft={{ base: "0.5rem", lg: "0" }}
                      marginBottom={"2rem"}
                    >
                      Unlimited Bandsith
                    </ListItem>
                    <ListItem
                      className="list__item"
                      paddingLeft={{ base: "0.5rem", lg: "0" }}
                      marginBottom={"2rem"}
                    >
                      100 GB SSD Storage
                    </ListItem>
                    <ListItem
                      className="list__item"
                      paddingLeft={{ base: "0.5rem", lg: "0" }}
                      marginBottom={"2rem"}
                    >
                      3 GB RAM
                    </ListItem>
                    <Link
                      className="btn btn--secondary btn--block"
                      href="#"
                      border="2px solid var(--color-headings)"
                      borderRadius="40px"
                      cursor="pointer"
                      fontSize={{ base: "1.8rem", lg: "1.5rem" }}
                      fontWeight="600"
                      margin="1rem 0"
                      outline="0"
                      padding="2rem 4vw"
                      textAlign="center"
                      textTransform="uppercase"
                      whiteSpace="nowrap"
                      bg="#fff"
                      color="var(--color-headings)"
                      display="inline-block"
                      width="100%"
                      _hover={{ bg: "var(--color-headings)", color: "#fff" }}
                    >
                      Join Us
                    </Link>
                  </List>
                </Box>
              </Box> */}
              <Box
                className="card card--secondary"
                borderRadius="7px"
                boxShadow="0 0 20px 10px gray"
                overflow="hidden"
                justifyContent="center"
                alignItems="center"
                maxWidth="500px"
                margin="0 auto"
                // data-aos="fade-right"
                // data-aos-duration="500"
              >
                <Image
                  src={teamMember4}
                  width="100%"
                  // height="100%"
                  // objectFit="fill"
                  opacity="0.99"
                  // p="0.1rem 0.5%"
                  // borderRadius="7px"
                  borderTopRadius="7px"
                />
                <Box
                  className="card__header"
                  bg="linear-gradient(to bottom, rgba(31,191,88, 1), rgba(1,186,234, 1))"
                  color="#fff"
                  p="2rem 7%"
                >
                  <Text
                    className="plan__name"
                    color="#fff"
                    margin="0"
                    fontSize={{ base: "6rem", lg: "3.6rem" }}
                    fontWeight="bold"
                  >
                    Team Member
                  </Text>
                </Box>
                <Box className="card__body" p="2rem 7%">
                  <List
                    className="list list--tick"
                    color="var(--color-headings)"
                    padding={0}
                    // paddingLeft={"3rem"}
                    style={{
                      listStyleImage: `url(${tickImage})`,
                    }}
                  >
                    <Text>
                      Are you passionate about our mission and want to be part
                      of a dynamic team working towards a common goal?
                    </Text>

                    <Link
                      className="btn btn--secondary btn--block"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSc0UPKkrAe914FpkjrmzyIRu0WEwJlS23JAEAx8KC8A3Vv4Tg/viewform"
                      target="_blank"
                      border="2px solid var(--color-headings)"
                      borderRadius="40px"
                      cursor="pointer"
                      fontSize={{ base: "1.8rem", lg: "1.5rem" }}
                      fontWeight="600"
                      margin="1rem 0"
                      outline="0"
                      padding="2rem 4vw"
                      textAlign="center"
                      textTransform="uppercase"
                      whiteSpace="nowrap"
                      bg="#fff"
                      color="var(--color-headings)"
                      display="inline-block"
                      width="100%"
                      _hover={{
                        bg: "var(--color-headings)",
                        color: "#fff",
                      }}
                    >
                      Join Us
                    </Link>
                  </List>
                </Box>
              </Box>
            </Box>

            <Box
              className="plan"
              _hover={{ transform: "scale(1.05)" }}
              transition="transform 0.2s ease-out"
              // data-aos="fade-up"
              // data-aos-duration="500"
            >
              {/* <Box
                className="card card--secondary"
                borderRadius="7px"
                boxShadow="0 0 20px 10px #f3f3f3"
                overflow="hidden"
                justifyContent="center"
                alignItems="center"
                maxWidth="500px"
                margin="0 auto"
              >
                <Box
                  className="card__header"
                  bg="var(--color-secondary)"
                  color="#fff"
                  p="2rem 7%"
                >
                  <Text
                    className="plan__name"
                    color="#fff"
                    margin="0"
                    fontSize={{ base: "2.4rem", lg: "1.4rem" }}
                    fontWeight="500"
                  >
                    Entry
                  </Text>
                  <Flex flexDirection="row" alignItems="baseline">
                    <Text
                      className="plan__price"
                      fontSize={{ base: "6rem", lg: "5rem" }}
                    >
                      $14
                    </Text>
                    <Text
                      className="plan__billing-cycle"
                      fontSize={{ base: "2.4rem", lg: "1.6rem" }}
                      fontWeight="300"
                      opacity="0.8"
                      marginRight="1rem"
                    >
                      /month
                    </Text>
                    <Badge
                      className="badge badge--secondary badge--small"
                      as={Box}
                      borderRadius="20px"
                      fontSize={{ base: "1.6rem", lg: "1.2rem" }}
                      fontWeight="600"
                      padding={"0.5rem 1.5rem"}
                      whiteSpace="nowrap"
                      bg="#02CDF1"
                      color="#fff"
                    >
                      10% Off
                    </Badge>
                  </Flex>

                  <Text
                    className="plan__description"
                    fontSize="2rem"
                    fontWeight="300"
                    letterSpacing="1px"
                    display="block"
                  >
                    East start on the cloud
                  </Text>
                </Box>
                <Box className="card__body" p="2rem 7%">
                  <List
                    className="list list--tick"
                    color="var(--color-headings)"
                    padding={0}
                    paddingLeft={"3rem"}
                    style={{
                      listStyleImage: `url(${tickImage})`,
                    }}
                  >
                    <ListItem
                      className="list__item"
                      paddingLeft={{ base: "0.5rem", lg: "0" }}
                      marginBottom={"1rem"}
                    >
                      Unlimited Websites
                    </ListItem>
                    <ListItem
                      className="list__item"
                      paddingLeft={{ base: "0.5rem", lg: "0" }}
                      marginBottom={"2rem"}
                    >
                      Unlimited Bandsith
                    </ListItem>
                    <ListItem
                      className="list__item"
                      paddingLeft={{ base: "0.5rem", lg: "0" }}
                      marginBottom={"2rem"}
                    >
                      100 GB SSD Storage
                    </ListItem>
                    <ListItem
                      className="list__item"
                      paddingLeft={{ base: "0.5rem", lg: "0" }}
                      marginBottom={"2rem"}
                    >
                      3 GB RAM
                    </ListItem>
                    <Link
                      className="btn btn--secondary btn--block"
                      href="#"
                      border="2px solid var(--color-headings)"
                      borderRadius="40px"
                      cursor="pointer"
                      fontSize={{ base: "1.8rem", lg: "1.5rem" }}
                      fontWeight="600"
                      margin="1rem 0"
                      outline="0"
                      padding="2rem 4vw"
                      textAlign="center"
                      textTransform="uppercase"
                      whiteSpace="nowrap"
                      bg="#fff"
                      color="var(--color-headings)"
                      display="inline-block"
                      width="100%"
                      _hover={{
                        bg: "var(--color-headings)",
                        color: "#fff",
                      }}
                    >
                      Join Us
                    </Link>
                  </List>
                </Box>
              </Box> */}
              <Box
                className="card card--secondary"
                borderRadius="7px"
                boxShadow="0 0 20px 10px gray"
                overflow="hidden"
                justifyContent="center"
                alignItems="center"
                maxWidth="500px"
                margin="0 auto"
                // data-aos="fade-right"
                // data-aos-duration="500"
              >
                <Image
                  src={sponsor}
                  width="100%"
                  // objectFit="cover"
                  opacity="0.99"
                  // p="0.1rem 0.5%"
                  // borderRadius="7px"
                  borderTopRadius="7px"
                />
                <Box
                  className="card__header"
                  bg={
                    "linear-gradient(to bottom, rgba(214, 20, 91, 1.0), rgba(251, 176, 59, 0.99))"
                  }
                  color="#fff"
                  p="2rem 7%"
                >
                  <Text
                    className="plan__name"
                    color="#fff"
                    margin="0"
                    fontSize={{ base: "6rem", lg: "3.6rem" }}
                    fontWeight="bold"
                  >
                    Sponsor
                  </Text>
                </Box>
                <Box className="card__body" p="2rem 7%">
                  <List
                    className="list list--tick"
                    color="var(--color-headings)"
                    padding={0}
                    // paddingLeft={"3rem"}
                    style={{
                      listStyleImage: `url(${tickImage})`,
                    }}
                  >
                    <Text>
                      Support our mission, be a crucial part! Join us as a
                      Sponsor and make a lasting impact with TED Talks.
                    </Text>

                    <Link
                      className="btn btn--secondary btn--block"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfkWbg1-z8OWOk6cJEPULsA8dPKrqdZVDUO6k36biPD1ydkQQ/viewform"
                      target="_blank"
                      border="2px solid var(--color-headings)"
                      borderRadius="40px"
                      cursor="pointer"
                      fontSize={{ base: "1.8rem", lg: "1.5rem" }}
                      fontWeight="600"
                      margin="1rem 0"
                      outline="0"
                      padding="2rem 4vw"
                      textAlign="center"
                      textTransform="uppercase"
                      whiteSpace="nowrap"
                      bg="#fff"
                      color="var(--color-headings)"
                      display="inline-block"
                      width="100%"
                      _hover={{
                        bg: "var(--color-headings)",
                        color: "#fff",
                      }}
                    >
                      Join Us
                    </Link>
                  </List>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default BlockPlans;
