import { Box, Flex } from "@chakra-ui/react";
import { CustomDivider } from "../../atoms";
import { SectionOutline, SectionTitle, SkillCard } from "../../molecules";
import content from "../../../data";

const Skill: React.FC<{}> = () => {
  const { skills } = content;

  return (
    <SectionOutline id={skills.title}>
      <SectionTitle title={skills.title} />

      <CustomDivider color="gray.400" />

      <Flex w="100%" direction={["column", "row"]} wrap="wrap">
        {skills?.skillDetails &&
          skills.skillDetails.map((skillDetail, index) => (
            <Box w={["100%", "50%"]} p={2} key={index + "skillDetail"}>
              <SkillCard
                stack={skillDetail.category}
                skills={skillDetail.skillsRating}
                colorScheme={skillDetail.colorScheme}
              />
            </Box>
          ))}
      </Flex>
    </SectionOutline>
  );
};
export default Skill;
