import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { MenuLinksProps } from "./interfaces";
import { SubLinksBox } from "./LinkSubItems";

export const MenuLinks = ({ menuLinks }: MenuLinksProps) => {
  return (
    <ul className="flex px-1 lg:px-4">
      {menuLinks.map((link) => (
        <div className="relative group" key={link.name}>
          <Box
            as="li"
            paddingX="3rem"
            borderRadius="lg"
            cursor="pointer"
          >
            <Text
              color={useColorModeValue("gray.800", "gray.200")}
              fontSize={{ md: "1rem", lg: "2.3rem" }}
              fontFamily="'Acme', sans-serif"
              // fontFamily="'Englebert', cursive"
              // fontWeight="semibold"
            >{link.name}
            </Text>
          </Box>

          <div className="hidden group-hover:block">
            <SubLinksBox
              subLinks={link.subLinks ?? []}
              extraLinks={link.extraLinks}
            />
          </div>
        </div>
      ))}
    </ul>
  );
};
