import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./chakra-ui/theme";
import App from "./App";

// import "bootstrap/dist/css/bootstrap.css";
// import "./index.css";
import "./global.css";
import "./normalize.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
