import { Box, Flex } from "@chakra-ui/react";
import {
  PortfolioCard,
  SectionOutline,
  SectionTitle,
} from "../components/molecules";
import content from "../data";

const Portfolio: React.FC<{}> = () => {
  const { portfolio } = content;

  return (
    <Box my={20}>
      <SectionOutline id={portfolio.title}>
        <SectionTitle title={portfolio.title} />
        <Box
          display={["flex", "flex", "flex", "block"]}
          justifyContent={["center", "center", "center", "space-between"]}
          alignItems={"center"}
          flexWrap={"wrap"}
          py={10}
          w={"100%"}
        >
          {portfolio?.projects &&
            portfolio.projects.map((project, index) => (
              <PortfolioCard
                src={project.src}
                alt={project.alt}
                title={project.title}
                description={project.description}
                link={project.link}
                tags={project.tags}
                key={index + "project"}
              />
            ))}
        </Box>
      </SectionOutline>
    </Box>
  );
};
export default Portfolio;
