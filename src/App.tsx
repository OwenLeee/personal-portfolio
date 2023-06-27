import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./theme";
import { NavBar } from "./components/molecules";
import { Home, Portfolio } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/portfolio" Component={Portfolio} />
        </Routes>
      </BrowserRouter>
    </ChakraBaseProvider>
  );
}

export default App;
