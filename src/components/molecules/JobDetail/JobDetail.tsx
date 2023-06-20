import { Box, Flex, Image, Text } from "@chakra-ui/react";

type JobDetailProps = {
  company: string;
  position: string;
  date: string;
  logo: string;
  children?: React.ReactNode;
};

const JobDetail: React.FC<JobDetailProps> = ({
  company,
  position,
  date,
  logo,
  children,
}) => {
  return (
    <Box>
      <Flex direction={["column", "row"]} align={["start", "start"]}>
        <Box w={["100%", "40%"]}>
          <Image
            objectFit="contain"
            w="100%"
            src={logo}
            bgColor="white"
            mr={[0, 6]}
            mb={[4, 2]}
          />
        </Box>
        <Flex direction="column" w={["100%", "60%"]} pl={[0, 6]}>
          <Text mb={3} textTransform="uppercase" fontSize={"2xl"}>
            {company}
          </Text>
          <Text textTransform="uppercase" fontSize={"lg"}>
            {position}
          </Text>
          <Text fontSize={"lg"}>{date}</Text>
        </Flex>
      </Flex>
      <Box py={4} fontSize={"lg"}>
        {children}
      </Box>
    </Box>
  );
};
export default JobDetail;
