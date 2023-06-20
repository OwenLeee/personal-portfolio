import { ChakraBaseProvider } from "@chakra-ui/react";
import Home from "./pages";
import theme from "./theme";

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Home />
    </ChakraBaseProvider>
  );
}

export default App;
