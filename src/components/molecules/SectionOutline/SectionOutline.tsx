import { Flex } from "@chakra-ui/react";

type SectionOutlineProps = {
  id?: string;
  children?: React.ReactNode;
};

const SectionOutline: React.FC<SectionOutlineProps> = ({ id, children }) => {
  return (
    <Flex flexGrow="1" py={10} justify="center" align="start" id={id}>
      <Flex
        w={["78%", "68%"]}
        direction="column"
        justify="start"
        align="center"
      >
        {children}
      </Flex>
    </Flex>
  );
};
export default SectionOutline;
