import { Box, Heading } from "@chakra-ui/react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <Box pb={[0, 5]}>
      <Heading size="xl" textTransform="uppercase">
        {title}
      </Heading>
    </Box>
  );
};
export default SectionTitle;
