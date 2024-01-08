import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import FlipCardTest2 from "./FlipCardTest2";

interface ImageGridTest2Props {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
  onClick: (index: number) => void;
}

const ImageGridTest2: React.FC<ImageGridTest2Props> = ({ data, onClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SimpleGrid
      columns={{ sm: 1, base: 1, md: 3, lg: 4, xl: 5 }}
      spacing={10}
      padding="10px"
    >
      {data.map((slide, index) => (
        <Box
          className="image"
          key={index}
          position="relative"
          cursor="pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => onClick(index)}
          //   overflow="hidden"
          //   transition="transform 0.3s ease-in-out"
          //   transform={`scale(${hoveredIndex === index ? 1.1 : 1})`}
        >
          <Image
            src={slide.src}
            alt={slide.description}
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius={7}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor="rgba(0, 0, 0, 0.3)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            opacity={hoveredIndex === index ? 1 : 0}
            transition="opacity 0.3s ease-in-out"
          >
            <MdOutlinePhotoSizeSelectLarge size={"5rem"} />
          </Box>
        </Box>
        // <Box
        //   className="image"
        //   key={index}
        //   position="relative"
        //   cursor="pointer"
        //   onMouseEnter={() => setHoveredIndex(index)}
        //   onMouseLeave={() => setHoveredIndex(null)}
        //   onClick={() => onClick(index)}
        // >
        //   <FlipCardTest2 frontImageHref={slide.src} backImageHref={slide.src} />
        // </Box>
      ))}
    </SimpleGrid>
  );
};

export default ImageGridTest2;
