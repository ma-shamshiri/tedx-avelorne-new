import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";
import MemberBadge from "./MemberBadge";

import popular from "../assets/images/popular.svg";

const SimpleCard = () => {
  return (
    <Box
      className="block block--dark"
      // padding="6rem 30rem"
      // paddingBottom="10rem"
      bg="#000"
      // color="#7b858b"
      width="100%"
      height="100vw"
      // overflow={"hidden"}
    >
      {/* <Box
        width="100px"
        height="100px"
        borderRadius="50px"
        backgroundColor="white"
        transform={"scaleX(2)"}
      /> */}

      <Box width="300px" height="300px" bg="gray" position="relative">
        <Image
          position="relative"
          top="10"
          right="-240"
          src={popular}
          transform={"rotate(90deg)"}
          width="38px"
          height="88px"
        />
        <Box
          position="absolute"
          right="0"
          top="0"
          width="120px"
          height="30px"
          bg="linear-gradient(to left, #F226AA, #6322BF)"
          textAlign="right"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            paddingTop="0.2rem"
            paddingRight="1rem"
            fontSize="1.7rem"
            fontWeight="bold"
          >
            sdfsdf
          </Text>
        </Box>
        <Box
          position="absolute"
          right="91"
          top="0"
          width="0"
          height="0"
          backgroundColor="transparent"
          borderStyle="solid"
          borderLeftWidth="15px"
          borderRightWidth="15px"
          borderBottomWidth="30px"
          borderLeftColor="transparent"
          borderRightColor="transparent"
          borderBottomColor="gray"
          transform="rotate(90deg)"
        ></Box>
      </Box>
      <SimpleGrid columns={3} spacing={4}>
        <Box textAlign="center" padding={4}>
          <Box
            width={0}
            height={0}
            borderTop={"50px solid transparent"}
            borderBottom={"100px solid white"}
          ></Box>
        </Box>

        <Box textAlign="center" padding={4}>
          <Box
            width={0}
            height={0}
            borderTop="50px solid transparent"
            borderBottom="100px solid red"
          ></Box>
        </Box>

        <Box bg="gold" height="10rem"></Box>
        <Box bg="tomato" height="10rem"></Box>
        <Box bg="dodgerblue" height="10rem"></Box>
      </SimpleGrid>
    </Box>
  );
};

export default SimpleCard;
