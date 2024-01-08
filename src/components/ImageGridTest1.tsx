import React, { useState } from "react";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import { FaThLarge } from "react-icons/fa";
import { ImEnlarge, ImEnlarge2 } from "react-icons/im";

interface ImageGridTest1Props {
  images: string[];
  onImageClick: (index: number) => void;
}

const ImageGridTest1: React.FC<ImageGridTest1Props> = ({
  images,
  onImageClick,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 3, lg: 5, xl: 6 }}
      spacing={10}
      padding="10px"
    >
      {images.map((image, index) => (
        <Box
          key={index}
          position="relative"
          cursor="pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => onImageClick(index)}
          //   overflow="hidden"
          //   transition="transform 0.3s ease-in-out"
          //   transform={`scale(${hoveredIndex === index ? 1.1 : 1})`}
        >
          {/* <FlipCard frontImageHref={image} backImageHref={image} /> */}

          <Image
            src={image}
            alt={`Image ${index}`}
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
      ))}
    </SimpleGrid>
  );
};

// const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
//   return (
//     <Box
//       display="grid"
//       gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
//       gap={4}
//     >
//       {images.map((image, index) => (
//         <Box
//           key={index}
//           position="relative"
//           onClick={() => onImageClick(index)}
//         >
//           <Image
//             src={image}
//             alt={`Image ${index}`}
//             width="100%"
//             height="100%"
//             objectFit="cover"
//           />
//         </Box>
//       ))}
//     </Box>
//   );
// };

export default ImageGridTest1;
