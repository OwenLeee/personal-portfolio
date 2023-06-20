import { Divider } from "@chakra-ui/react";

type CustomDividerProps = {
  color?: string;
};

const CustomDivider: React.FC<CustomDividerProps> = ({ color = "white" }) => {
  return <Divider w="100%" color={color} borderBottom="1px" my={5} />;
};
export default CustomDivider;
