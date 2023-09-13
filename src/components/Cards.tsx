// const Cards = () => {
//   return (
//     <div
//       style={{
//         width: "30%",
//         padding: "4rem",
//       }}
//     >
//       <div className="card card--primary">
//         <header className="card__header">Card Title</header>
//         <div className="card__body">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
//           assumenda?
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;

import { Box, Grid } from "@chakra-ui/react";

const Cards = () => {
  return (
    // w="30%" is just for showing the card (should be removed)
    <Box w="30%" p="4rem">
      <Box
        className="card card--primary"
        borderRadius="7px"
        boxShadow="0 0 20px 10px #f3f3f3"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          className="card__header"
          bg="var(--color-primary)"
          color="#fff"
          p="2rem 7%"
        >
          Card Title
        </Box>
        <Box className="card__body" p="2rem 7%">
          <Box className="grid grid--1x2">
            <Grid
              display="grid"
              templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
            >
              <Box height="100px" background="gold"></Box>
              <Box height="100px" background="dodgerblue"></Box>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
