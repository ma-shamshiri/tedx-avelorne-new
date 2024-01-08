import React, { FC } from "react";
import {
  Flex,
  Stack,
  Text,
  Avatar,
  AvatarGroup,
  useColorModeValue,
  VStack,
  HStack,
} from "@chakra-ui/react";

import AppAvatar from "./AppAvatar";
import profile1 from "../assets/images/Samin.webp";
import profile2 from "../assets/images/Fatemeh.webp";
import profile3 from "../assets/images/Erfan.webp";
import profile4 from "../assets/images/Reihaneh.webp";
import profile5 from "../assets/images/Melika.webp";
import profile6 from "../assets/images/Hamidreza.webp";
import profile7 from "../assets/images/Baharan.webp";
import unknownProfile from "../assets/images/unknown.jpeg";

interface AvatarInfo {
  id: number;
  name: string;
  url: string;
}

const AvatarIcon: FC = () => {
  const avatarsRow1: AvatarInfo[] = [
    {
      id: 1,
      name: "profile1",
      url: profile1,
    },
    {
      id: 2,
      name: "profile2",
      url: profile2,
      // url: unknown,
    },
    {
      id: 3,
      name: "profile3",
      url: profile3,
      // url: unknown,
    },
    {
      id: 4,
      name: "profile4",
      url: profile4,
      // url: unknown,
    },
    {
      id: 5,
      name: "profile5",
      // url: profile5,
      url: profile5,
    },
    {
      id: 6,
      name: "profile6",
      url: profile6,
    },
    {
      id: 7,
      name: "profile7",
      url: profile7,
    },
    // {
    // id: 8,
    //   name: "unknown",
    //   url: unknownProfile,
    // },
    //   ];

    //   const avatarsRow2: AvatarInfo[] = [
    //     {
    //       name: "unknown",
    //       url: unknown,
    //     },
    //     {
    //       name: "unknown",
    //       url: unknown,
    //     },
    //     {
    //       name: "unknown",
    //       url: unknown,
    //     },
    //     {
    //       name: "unknown",
    //       url: unknown,
    //     },
    //     {
    //       name: "unknown",
    //       url: unknown,
    //     },
    //     {
    //       name: "unknown",
    //       url: unknown,
    //     },
  ];

  //   const avatarsRow3: AvatarInfo[] = [
  // {
  //   name: "unknown",
  //   url: unknown,
  // },
  // {
  //   name: "unknown",
  //   url: unknown,
  // },
  // {
  //   name: "unknown",
  //   url: unknown,
  // },
  // {
  //   name: "unknown",
  //   url: unknown,
  // },
  // {
  //   name: "unknown",
  //   url: unknown,
  // },
  // {
  //   name: "unknown",
  //   url: unknown,
  // },
  //   ];

  return (
    <Flex justifyContent="center">
      <VStack spacing={4} align={"center"}>
        <HStack
          // marginLeft={{ base: "3rem", lg: "1rem" }}
          // marginRight={{ base: "3rem", lg: "1rem" }}
          spacing={4}
          align={"center"}
        >
          <AvatarGroup>
            {avatarsRow1.map((avatar) => (
              <AppAvatar
                key={avatar.name}
                name={avatar.name}
                url={avatar.url}
                opacity={
                  avatar.id == 3
                    ? "0.7"
                    : avatar.id == 4
                    ? "0.6"
                    : avatar.id == 5
                    ? "0.4"
                    : avatar.id == 6
                    ? "0.2"
                    : avatar.id == 7
                    ? "0.1"
                    : "1"
                }
              />
            ))}
          </AvatarGroup>
          <Text
            // fontFamily={"heading"}
            fontSize={{ base: "4xl", md: "6xl" }}
          >
            +
          </Text>
          <Flex
            align={"center"}
            justify={"center"}
            fontSize={{ base: "sm", md: "1.5rem" }}
            fontWeight="bold"
            bg={useColorModeValue("gray.800", "gray.800")}
            color={useColorModeValue("white", "white")}
            rounded={"full"}
            minWidth={{ base: "4.7rem", lg: "7rem" }}
            minHeight={{ base: "4.7rem", lg: "7rem" }}
            position={"relative"}
            _before={{
              content: '""',
              width: "full",
              height: "full",
              rounded: "full",
              transform: "scale(1.125)",
              bgGradient: "linear(to-bl, orange.400, yellow.400)",
              position: "absolute",
              zIndex: -1,
              top: 0,
              left: 0,
            }}
          >
            YOU
          </Flex>
        </HStack>
        {/* <VStack marginTop={-5} spacing={4} align={"center"}>
          <AvatarGroup marginTop={3}>
          {avatarsRow2.map((avatar) => (
            <AppAvatar key={avatar.name} name={avatar.name} url={avatar.url} />
          ))}
        </AvatarGroup>
        <AvatarGroup marginTop={4}>
          {avatarsRow3.map((avatar) => (
            <AppAvatar key={avatar.name} name={avatar.name} url={avatar.url} />
          ))}
        </AvatarGroup>
        </VStack> */}
      </VStack>
    </Flex>
  );
};

export default AvatarIcon;
