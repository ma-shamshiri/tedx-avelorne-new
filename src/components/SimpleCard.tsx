import { Box, SimpleGrid, Flex } from "@chakra-ui/react";

const SimpleCard = () => {
  return (
    <SimpleGrid columns={3} spacing={4}>
      <Box bg="gold" height="10rem"></Box>
      <Box bg="tomato" height="10rem"></Box>
      <Box bg="dodgerblue" height="10rem"></Box>
    </SimpleGrid>
  );
};

export default SimpleCard;
