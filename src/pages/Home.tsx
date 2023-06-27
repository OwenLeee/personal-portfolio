import { Box } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
import { AboutMe, Landing, Portfolio, Skill } from "../components/organisms";

const Home: React.FC<{}> = () => {
  return (
    <Box>
      <Landing />

      <Divider />

      <AboutMe />

      <Divider />

      <Portfolio />

      <Divider />

      <Skill />
    </Box>
  );
};
export default Home;
