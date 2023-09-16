"use client";

import IndividualJobBody from "@/components/individualJob/IndividualJobBody";
import IndividualJobFooter from "@/components/individualJob/IndividualJobFooter";
import IndividualJobHeader from "@/components/individualJob/IndividualJobHeader";
import { useIndividualJobRequest } from "@/hooks/useIndividualJobRequest";
import moment from "moment";


const Page = ({ params: { id } }) => {
  const { serverResponse: job } = useIndividualJobRequest(id);

  return (
    <>
      {job && <header>
        <IndividualJobHeader
          title={job.jobTitle}
          company={job.companyName}
          location={job.locationFull}
          companyTagline={job.functionalArea}
          typeWork={job.jobType}
          level={job.seniority}
          postedTime={`Posted ${moment(
            job.datePublished,
            "YYYYMMDD"
          ).fromNow()}`}
          tags={String(job.perks).split(';').map(perk => perk.trim())}
        />
      </header>}
      {job &&<main>
        <IndividualJobBody id={id} url={job.url}/>
      </main>}
      {job &&<footer>
        <IndividualJobFooter />
      </footer>}
    </>
  );
};

export default Page;
