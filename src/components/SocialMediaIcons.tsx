// import {
//   Box,
//   Flex,
//   IconButton,
//   Stack,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

// const SocialMediaIcons = () => {
//   return (
//     <Flex>
//       <Stack direction={"row"} spacing={6}>
// <Box as="a" href="#" target="_blank">
//   <IconButton
//     aria-label="linkedin"
//     variant="ghost"
//     size="lg"
//     icon={<BsLinkedin size="20px" />}
//     _hover={{
//       bg: useColorModeValue("blue.500", "white"),
//       color: useColorModeValue("white", "gray.700"),
//     }}
//     isRound
//   />
// </Box>
//         <Box as="a" href="#" target="_blank">
//           <IconButton
//             aria-label="linkedin"
//             variant="ghost"
//             size="lg"
//             icon={<BsTwitter size="25px" />}
//             _hover={{
//               bg: useColorModeValue("blue.500", "white"),
//               color: useColorModeValue("white", "gray.700"),
//             }}
//             isRound
//           />
//         </Box>
//         <Box
//           as="a"
//           href="https://www.instagram.com/tedxavelorne/"
//           target="_blank"
//         >
//           <IconButton
//             aria-label="instagram"
//             variant="ghost"
//             size="lg"
//             icon={<BsInstagram size="25px" />}
//             _hover={{
//               bg: useColorModeValue("blue.500", "white"),
//               color: useColorModeValue("white", "gray.700"),
//             }}
//             isRound
//           />
//         </Box>
//       </Stack>
//     </Flex>
//   );
// };

// export default SocialMediaIcons;

import {
  Box,
  Flex,
  Grid,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const SocialMediaIcons = () => {
  return (
      <Stack display="flex" flexDirection="row" spacing={6}>
        <Box as="a" href="#" target="_blank">
          <IconButton
            aria-label="linkedin"
            variant="ghost"
            size="xl"
            icon={<BsLinkedin size="20px" />}
            _hover={{
              bg: useColorModeValue("#0077b5", "gray.200"),
              color: useColorModeValue("white", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
        <Box as="a" href="#" target="_blank">
          <IconButton
            aria-label="linkedin"
            variant="ghost"
            size="xl"
            icon={<BsTwitter size="20px" />}
            _hover={{
              bg: useColorModeValue("#4DA6E9", "gray.200"),
              color: useColorModeValue("white", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
        <Box as="a" href="#" target="_blank">
          <IconButton
            aria-label="linkedin"
            variant="ghost"
            size="xl"
            icon={<BsInstagram size="20px" />}
            _hover={{
              bg: useColorModeValue("#E1186C", "gray.200"),
              color: useColorModeValue("white", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
      </Stack>
  );
};

export default SocialMediaIcons;
