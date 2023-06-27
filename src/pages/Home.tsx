import { Box } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
import {
  AboutMe,
  Landing,
  Portfolio,
  Professional,
  Skill,
} from "../components/organisms";

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

      <Divider />

      <Professional />
    </Box>
  );
};
export default Home;
