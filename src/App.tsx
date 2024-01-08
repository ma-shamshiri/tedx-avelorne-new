import { Grid, GridItem, Show } from "@chakra-ui/react";

import { useState } from "react";
import BlockHero from "./components/BlockHero";
import BlockPlans from "./components/BlockPlans";
import BlockFeatures from "./components/BlockFeatures";
import BlockShowcase from "./components/BlockShowcase";
import BlockFooter from "./components/BlockFooter";
import BlockSpeakers from "./components/BlockSpeakers";
import BlockEvent from "./components/BlockEvent";
import Navigationbar from "./components/Navigationbar";
import BlockTestimonials from "./components/BlockTestimonials";
import BlockSponsors from "./components/BlockSponsors";
// import PreviewContainer from "./components/PreviewContainer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area={"nav"}>
          <Navigationbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"tomato"}>
          Main
        </GridItem>
      </Grid> */}
      {/* <Navigationbar /> */}
      {/* <Navbar /> */}
      {/* <BlockHero />
      <BlockFeatures />
      <BlockEvent />
      <BlockSpeakers />
      <BlockShowcase />
      <BlockPlans />
      <BlockSponsors />
      <BlockTestimonials />
      <BlockFooter /> */}
    </>
  );
}

export default App;
