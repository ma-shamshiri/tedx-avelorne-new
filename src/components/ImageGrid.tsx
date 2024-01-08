import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import FlipCardTest2 from "./FlipCardTest2";
import AOS from "aos";
import "aos/dist/aos.css";

interface ImageGridProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
  onClick: (index: number) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ data, onClick }) => {
  useEffect(() => {
    window.onload = () => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
      });
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, base: 1, md: 3, lg: 4, xl: 5 }}
      spacing={35}
      padding="10px"
    >
      {data.map((slide, index) => (
        // <Box
        //   className="image"
        //   key={index}
        //   position="relative"
        //   cursor="pointer"
        //   onMouseEnter={() => setHoveredIndex(index)}
        //   onMouseLeave={() => setHoveredIndex(null)}
        //   onClick={() => onClick(index)}
        //   //   overflow="hidden"
        //   //   transition="transform 0.3s ease-in-out"
        //   //   transform={`scale(${hoveredIndex === index ? 1.1 : 1})`}
        // >
        //   <Image
        //     src={slide.src}
        //     alt={slide.description}
        //     width="100%"
        //     height="100%"
        //     objectFit="cover"
        //     borderRadius={7}
        //   />
        //   <Box
        //     position="absolute"
        //     top={0}
        //     left={0}
        //     right={0}
        //     bottom={0}
        //     backgroundColor="rgba(0, 0, 0, 0.3)"
        //     display="flex"
        //     justifyContent="center"
        //     alignItems="center"
        //     opacity={hoveredIndex === index ? 1 : 0}
        //     transition="opacity 0.3s ease-in-out"
        //   >
        //     <MdOutlinePhotoSizeSelectLarge size={"5rem"} />
        //   </Box>
        // </Box>

        <Box
          key={index}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box width="100%">
            <Box
              className="image"
              key={index}
              position="relative"
              cursor="pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onClick(index)}
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <FlipCardTest2
                frontImageHref={slide.src}
                backImageHref={slide.src}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ImageGrid;

// import React, { useState } from "react";
// import { Box, SimpleGrid } from "@chakra-ui/react";
// import FlipCardTest2 from "./FlipCardTest2";

// interface ImageGridProps {
//   data: {
//     src: string;
//     title: string;
//     description: string;
//   }[];
//   onClick: (index: number) => void;
// }

// const ImageGrid: React.FC<ImageGridProps> = ({ data, onClick }) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   if (!data || data.length === 0) {
//     return <div>No data available</div>;
//   }

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center">
//       <Box width="100%">
//         <SimpleGrid
//           columns={{ sm: 1, base: 1, md: 3, lg: 4, xl: 5 }}
//           spacing={5}
//           padding="10px"
//         >
//           {data.map((slide, index) => (
//             <Box
//               className="image"
//               key={index}
//               position="relative"
//               cursor="pointer"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               onClick={() => onClick(index)}
//             >
//               <FlipCardTest2
//                 frontImageHref={slide.src}
//                 backImageHref={slide.src}
//               />
//             </Box>
//           ))}
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// };

// export default ImageGrid;
