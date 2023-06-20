import { EmailIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Link, Text } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import content from "../../../data";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

const Landing: React.FC<{}> = () => {
  const { landing } = content;

  const iconMapping = {
    Linkedin: <BsLinkedin />,
    GitHub: <BsGithub />,
    Email: <EmailIcon />,
  };

  return (
    <>
      <Flex w="100%" h="100%" align="center" justify="center">
        <Flex
          align="start"
          justify="center"
          direction="column"
          w="60%"
          my={[20, 0]}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ x: [-1000, 100, 0], opacity: 1 }}
            transition={{
              ease: "easeOut",
              duration: 1,
            }}
          >
            <Box mb={1}>
              <Text textTransform={"uppercase"} fontSize={["lg", "xl"]}>
                {landing.greetingWord}
              </Text>
            </Box>
            <Box mb={7}>
              <Heading size={["2xl", "3xl"]} color="primary">
                {landing.myName}
              </Heading>
            </Box>
            <Box mb={2}>
              {landing?.briefDescriptions &&
                landing.briefDescriptions.map((briefDescription, index) => (
                  <Text
                    mb={2}
                    key={index + "briefDescription"}
                    fontSize={["md", "lg"]}
                  >
                    {briefDescription}
                  </Text>
                ))}
            </Box>
            <Box>
              <Flex justify="space-between" w="20%">
                {landing?.socialMediasMetadata &&
                  landing.socialMediasMetadata.map((meta, index) => (
                    <Link
                      href={meta.link}
                      isExternal
                      key={index + "socialMediaLink"}
                    >
                      <IconButton
                        variant="outline"
                        color="secondary"
                        aria-label={meta.ariaLabel}
                        mr="3"
                        size={["md", "lg"]}
                        icon={iconMapping[meta.socialMedia as keyof IconType]}
                      />
                    </Link>
                  ))}
              </Flex>
            </Box>
          </motion.div>
        </Flex>
      </Flex>
    </>
  );
};
export default Landing;
