import { Box, Flex, Text } from "@chakra-ui/react";
import { CustomDivider } from "../../atoms";
import content from "../../../data";
import { SectionOutline, SectionTitle } from "../../molecules";

const Education: React.FC<{}> = () => {
  const { education, certificates } = content;

  return (
    <SectionOutline id={education.title}>
      <SectionTitle title={education.title} />
      <CustomDivider />

      {education?.educationDetails &&
        education.educationDetails.map((educationDetail, index) => (
          <Flex
            justify={["start", "space-between"]}
            direction={["column", "row"]}
            align="start"
            w="100%"
            pb={5}
            fontSize={"lg"}
            key={index + "educationDetail"}
          >
            <Flex direction="column" grow="1" justify="start" align="start">
              <Text textTransform={"uppercase"}>{educationDetail.school}</Text>
              <Text>{educationDetail.course}</Text>
            </Flex>
            <Flex justify="end" align="start">
              <Text>{educationDetail.date}</Text>
            </Flex>
          </Flex>
        ))}

      <Box p={5} />

      <SectionTitle title={certificates.title} />
      <CustomDivider />

      {certificates?.certificateDetails &&
        certificates.certificateDetails.map((certificateDetail, index) => (
          <Flex
            justify={["start", "space-between"]}
            direction={["column", "row"]}
            align="start"
            w="100%"
            pb={5}
            fontSize={"lg"}
            key={index + "certificateDetail"}
          >
            <Flex direction="column" grow="1" justify="start" align="start">
              <Text textTransform={"uppercase"}>
                {certificateDetail.company}
              </Text>
              <Text>{certificateDetail.certificate}</Text>
            </Flex>
            <Flex justify="end" align="start">
              <Text>{certificateDetail.date}</Text>
            </Flex>
          </Flex>
        ))}
    </SectionOutline>
  );
};
export default Education;
