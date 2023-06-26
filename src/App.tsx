import { ChakraBaseProvider } from "@chakra-ui/react";
import Home from "./pages";
import theme from "./theme";
import { NavBar } from "./components/molecules";

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <NavBar />
      <Home />
    </ChakraBaseProvider>
  );
}

export default App;
