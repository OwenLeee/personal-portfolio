import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Progress,
  Stack,
  StackDivider,
  ThemeTypings,
} from "@chakra-ui/react";

type Skillset = {
  skill: string;
  rating: number;
};

type SkillCardProps = {
  stack: string;
  skills: Skillset[];
  colorScheme: ThemeTypings["colorSchemes"];
};

const SkillCard: React.FC<SkillCardProps> = ({
  stack,
  skills,
  colorScheme = "blue",
}) => {
  return (
    <Card borderRadius="30px" borderColor="red">
      <CardHeader>
        <Heading size="md">{stack}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {skills &&
            skills.map((skill, index) => (
              <Box key={index + "skill"}>
                <Heading size="sm">{skill.skill}</Heading>
                <Progress
                  borderRadius="15px"
                  value={skill.rating}
                  hasStripe
                  isAnimated
                  colorScheme={colorScheme}
                />
              </Box>
            ))}
        </Stack>
      </CardBody>
    </Card>
  );
};
export default SkillCard;
