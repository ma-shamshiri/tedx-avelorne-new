import { Box, List, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import { SubLinksBoxProps } from "./interfaces";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SubLinksBox = (props: SubLinksBoxProps) => {
  const { subLinks, extraLinks } = props;

  const { t } = useTranslation();

  return (
    <Box
      position="absolute"
      top="3.2rem"
      width="fit-content"
      boxShadow="0 0 30px 1px black"
      display={{ base: 'none', groupHover: 'flex' }}
      borderRadius="2rem"
    >
      <List
        padding="2rem"
        width="35rem"
        height="fit-content"
        flexDirection="column"
        bg={useColorModeValue("gray.200", "gray.800")}
        borderRadius="2rem"
      >
        {subLinks.map((subLink) => (
          <ListItem
            key={subLink.name}
            height="16"
            borderRadius="xl"
            display="flex"
            alignItems="center"
            justifyContent="start"
            fontWeight="bold"
            _hover={{ backgroundColor: useColorModeValue("gray.300", "gray.700") }}
            cursor="pointer"
            paddingY="3.5rem"
          >
            <Link to={subLink.link} className="flex items-center">
              <Box
                className="ml-5"
                height="4rem"
                width="4rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="lg"
                backgroundColor={subLink.color}
              >
                <Box
                  className="h-3/5 w-3/5"
                  color={useColorModeValue("gray.800", "gray.200")}
                  textAlign="center"
                >
                  {subLink.icon}
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" marginLeft="5">
                <Text
                  fontSize="1.8rem"
                  color={useColorModeValue("gray.600", "gray.200")}
                  marginBottom="1"
                >
                  {t(subLink.name)}
                </Text>
                <Text
                  fontSize="1.5rem"
                  color={useColorModeValue("gray.500", "gray.500")}
                >
                  {t(subLink.description)}
                </Text>
              </Box>
            </Link>
          </ListItem>
        ))}
      </List>
      {extraLinks && (
        <div className="flex">
          <div className="h-[calc(100%-3em)] my-auto w-[1px] bg-gray-300 dark:bg-gray-700" />
          <ul className="w-56 p-2">
            {extraLinks?.map((extraLink) => (
              <Link to={extraLink.link} className="flex items-center w-full">
                <li
                  key={extraLink.name}
                  className="p-2 h-10 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg flex items-center justify-start cursor-pointer text-sm font-semibold text-gray-600 dark:text-gray-200"
                >
                  {extraLink.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </Box>
  );
};
