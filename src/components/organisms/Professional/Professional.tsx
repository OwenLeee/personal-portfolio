import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import JobDetail from "../../molecules/JobDetail";
import { CustomDivider } from "../../atoms";
import content from "../../../data";
import { SectionOutline, SectionTitle } from "../../molecules";

const Professional: React.FC<{}> = () => {
  const { professionals } = content;

  return (
    <SectionOutline id={professionals.title}>
      <SectionTitle title={professionals.title} />

      {professionals?.jobDetails &&
        professionals.jobDetails.map((jobDetail, index) => (
          <Box key={index + "jobDetail"} w="100%">
            <CustomDivider color="gray.400" />
            <JobDetail
              company={jobDetail.company}
              position={jobDetail.position}
              date={jobDetail.date}
              logo={jobDetail.logo}
            >
              <UnorderedList>
                {jobDetail?.description &&
                  jobDetail.description.map((description, index) => (
                    <ListItem key={index + "description"}>
                      {description}
                    </ListItem>
                  ))}
              </UnorderedList>
            </JobDetail>
          </Box>
        ))}
    </SectionOutline>
  );
};
export default Professional;
