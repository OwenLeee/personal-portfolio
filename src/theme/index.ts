// theme/index.js
import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";
import config from "./config";
import colors from "./colors";
import Heading from "./components/heading";

const overrides = {
  config,
  styles,
  colors,
  components: {
    Heading,
  },
};

export default extendTheme(overrides);
