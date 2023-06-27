import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
  Box,
  HStack,
  Tag,
  ThemeTypings,
} from "@chakra-ui/react";

type PortfolioCardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  tags: { name: string; colorScheme: ThemeTypings["colorSchemes"] }[];
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  src,
  alt,
  title,
  description,
  link,
  tags,
}) => {
  return (
    <Card maxW={["sm", "none"]} mx={5} mb={5}>
      <LinkBox
        as="article"
        maxW={["sm", "none"]}
        borderWidth="1px"
        rounded="md"
      >
        <CardBody display={["block", "block", "block", "flex"]}>
          <Image
            src={src}
            alt={alt}
            borderRadius="lg"
            maxW={["100%", "100%", "100%", "50%"]}
            maxH={["100%", "100%", "100%", "50%"]}
          />
          <Box px={[0, 0, 0, 10]}>
            <Stack mt={["6", "6", "6", "1"]} spacing="3">
              <Heading size={["md", "lg"]}>{title}</Heading>
              <Text fontSize={["md", "lg"]}>{description}</Text>
            </Stack>
          </Box>
        </CardBody>
        <HStack spacing={[2, 2, 2, 4]} wrap={"wrap"} px="1.25em" pb="1.25em">
          {tags?.length > 0 &&
            tags.map((tag, index) => (
              <Tag
                size={"md"}
                variant="solid"
                colorScheme={tag.colorScheme}
                key={index + "tag"}
              >
                {tag.name}
              </Tag>
            ))}
        </HStack>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <LinkOverlay href={link} isExternal>
              <Button variant="solid" colorScheme="blue">
                View more
              </Button>
            </LinkOverlay>
          </ButtonGroup>
        </CardFooter>
      </LinkBox>
    </Card>
  );
};
export default PortfolioCard;
