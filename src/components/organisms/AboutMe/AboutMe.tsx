import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import content from "../../../data";
import { SectionOutline, SectionTitle } from "../../molecules";

const AboutMe: React.FC<{}> = () => {
  const { about } = content;

  return (
    <SectionOutline id={about.title}>
      <SectionTitle title={about.title} />

      {/* <CustomDivider /> */}
      <Accordion defaultIndex={[0]} allowMultiple w="100%" mb={10} mt={5}>
        {about?.funFacts &&
          about.funFacts.map((funFact, index) => (
            <AccordionItem key={index + "funFact"}>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={["xl", "2xl"]}
                    color="primary"
                  >
                    {funFact.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {funFact?.answer &&
                  funFact.answer.map((answer, index) => (
                    <Text
                      mb={2}
                      fontSize={["md", "lg"]}
                      textAlign="left"
                      key={index + "answer"}
                    >
                      {answer}
                    </Text>
                  ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
      </Accordion>
      <a href={about.resumePath} download={about.resumeName}>
        <Button textTransform="uppercase">Download Resume</Button>
      </a>
    </SectionOutline>
  );
};
export default AboutMe;
