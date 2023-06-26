import { Box } from "@chakra-ui/layout";
import { Divider, Flex } from "@chakra-ui/react";
import { NavBar } from "../components/molecules";
import {
  AboutMe,
  Landing,
  Skill,
} from "../components/organisms";

const Home: React.FC<{}> = () => {
  return (
    <Box>
      <Flex direction="column" minH="100vh" id="Home" justify={"center"}>
        <NavBar />
        <Landing />
      </Flex>

      <Divider />

      <AboutMe />

      <Divider />

      <Skill />

    </Box>
  );
};
export default Home;
