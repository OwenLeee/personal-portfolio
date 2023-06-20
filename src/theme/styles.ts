import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: "Pridi"
      // color: mode("gray.800", "#9C824A")(props),
    }
  })
};

export default styles