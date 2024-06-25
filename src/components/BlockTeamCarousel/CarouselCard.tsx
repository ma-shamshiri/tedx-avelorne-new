import React, { useState } from 'react';
import {
    Box,
    Text,
    Avatar,
    VStack,
    HStack,
    Flex,
    useColorModeValue,
    Link,
    useBreakpointValue
} from '@chakra-ui/react';
import Badges from './Badges';
import { BsPersonLinesFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

interface CarouselCardProps {
    name?: string;
    title?: string;
    avatarUrl?: string;
    profileUrl?: string;
    badgeText?: string;
    badgeTextColor?: { light: string; dark: string };
    badgeBackgroundColor?: { light: string; dark: string };
    badgeBorderColor?: { light: string; dark: string };
    testimonial?: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
    name,
    title,
    avatarUrl,
    profileUrl,
    badgeText = 'role',
    badgeTextColor = { light: 'black', dark: 'white' },
    badgeBackgroundColor = { light: 'dodgerblue', dark: 'dodgerblue' },
    badgeBorderColor = { light: 'blue', dark: 'blue' },
    testimonial,
}) => {
    const { t } = useTranslation();

    const [isHoveredButton, setIsHoveredButton] = useState(false);

    const handleHoverButton = () => {
        setIsHoveredButton(true);
    };

    const handleUnHoverButton = () => {
        setIsHoveredButton(false);
    };

    const iconSize = useBreakpointValue({ base: "20px", md: "20px", lg: "20px" });

    const cardBackgroundColor = useColorModeValue(
        "linear-gradient(to right bottom, #DDC887, #DDC887, #F0E2B6, #F0E2B6)",
        "linear-gradient(to right bottom, #0e0e29, #0e0e29, #272763, #272763)"
    );

    const separatorColor = useColorModeValue(
        // "linear-gradient(to left, transparent, #7C42F3, transparent",
        "linear-gradient(to left, transparent, #9E7CFF, transparent",
        "linear-gradient(to left, transparent, #9E7CFF, transparent"
    );

    return (
        <Box
            className='carouselCard'
            width="100%"
            height="fit-content"
            minH="37.5rem"
            bg={cardBackgroundColor}
            color="white"
            padding="1.5rem"
            borderRadius="7px"
            boxShadow="0 0 10px 1px black"
        >
            <VStack spacing={10} align="right">
                <HStack spacing={4}>
                    <Avatar name={name} src={avatarUrl} width="9rem" height="9rem" />

                    <VStack align="start" spacing={7}>
                        <Text className='name' fontSize="1.8rem" fontWeight="bold">{name}</Text>
                        {/* <Text fontSize="1rem">{title}</Text> */}
                        <Badges
                            text={badgeText}
                            textColor={{ light: badgeTextColor.light, dark: badgeTextColor.dark }}
                            backgroundColor={{ light: badgeBackgroundColor.light, dark: badgeBackgroundColor.dark }}
                            borderColor={{ light: badgeBorderColor.light, dark: badgeBorderColor.dark }}
                        />
                    </VStack>
                </HStack>

                <Flex className='separatorContainer' justifyContent="center" alignItems="center">
                    <Box
                        className="separator"
                        width="30rem"
                        height="1px"
                        style={{
                            background: separatorColor,
                        }}
                    />
                </Flex>

                <Text className='testimonial' fontSize="1.6rem">&ldquo;{testimonial}&rdquo;</Text>

                <Box
                    className="buttonContainer"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Link
                        className="button"
                        position="relative"
                        href={profileUrl}
                        width={{ base: "90%", lg: "11rem" }}
                        bg="#7B4CF6"
                        color="#fff"
                        fontSize={{ base: "2rem", lg: "1.5rem" }}
                        padding="0.5rem"
                        border="2px solid #7B4CF6"
                        borderRadius="3px"
                        cursor="pointer"
                        _hover={{
                            bg: "#272763",
                            color: "white",
                        }}
                        transition="background-color 0.2s ease-out"
                        onMouseEnter={handleHoverButton}
                        onMouseLeave={handleUnHoverButton}
                    >
                        <HStack justifyContent="center" alignItems="center">
                            <BsPersonLinesFill size={iconSize} color={isHoveredButton ? "white" : "white"} />

                            <Text
                                fontSize={{ base: "1rem", lg: "1.2rem" }}
                                textAlign="center"
                            >
                                {t("seeProfile")}
                            </Text>
                        </HStack>
                    </Link>
                </Box>
            </VStack>
        </Box>
    );
};

export default CarouselCard;
