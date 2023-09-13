// import { AiOutlineLine } from "react-icons/ai";

// const Quotes = () => {
//   return (
//     <blockquote className="quote">
//       <p className="quote__text">
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt optio
//         officiis dolore earum error eaque perferendis laudantium sed praesentium
//         dolorum.
//       </p>
//       <footer>
//         <div className="media">
//           <div className="media__image">
//             <AiOutlineLine className="icon icon--primary quote__line" />
//           </div>
//           <div className="media__body">
//             <h3 className="media__title quote__author">John Smith</h3>
//             <p className="quote__organization">ABC Company</p>
//           </div>
//         </div>
//       </footer>
//     </blockquote>
//   );
// };

// export default Quotes;

import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { AiOutlineLine } from "react-icons/ai";
import { BsWordpress } from "react-icons/bs"; // Import the Wordpress icon

const Quotes = () => {
  return (
    <Box
      className="quote"
      as="blockquote"
      fontSize={{ base: "3rem", lg: "2rem" }}
      fontStyle="italic"
      color="var(--color-body-darker)"
      lineHeight="1.3"
    >
      <Text
        className="quote__text"
        _before={{ content: "open-quote" }}
        _after={{ content: "close-quote" }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt optio
        officiis dolore earum error eaque perferendis laudantium sed praesentium
        dolorum.
      </Text>
      <footer>
        <Box>
          <Flex className="media" marginBottom="4rem">
            <Box className="media__image" marginTop="1rem">
              <Icon
                className="icon icon--primary quote__line"
                as={AiOutlineLine}
                width="40px"
                height="40px"
                color="var(--color-primary)"
                position="relative"
                bottom="10px"
              />
            </Box>
            <Box className="media__body" margin="0 2rem">
              <Text
                className="media__title quote__author"
                fontSize={{ base: "3rem", lg: "2.4rem" }}
                fontWeight="500"
                fontStyle="normal"
                marginTop="0"
                marginBottom="0"
              >
                John Smith
              </Text>
              <Text
                className="quote__organization"
                color="var(--color-headings)"
                opacity="0.4"
                fontSize={{ base: "2rem", lg: "1.6rem" }}
                fontStyle="normal"
              >
                ABC Company
              </Text>
            </Box>
          </Flex>
        </Box>
      </footer>
    </Box>
  );
};

export default Quotes;
