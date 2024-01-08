import React, { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import FlipCardTest2 from "./FlipCardTest2";

interface ImageGridProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
  onClick: (index: number) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ data, onClick }) => {
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
