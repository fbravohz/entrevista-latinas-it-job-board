"use client";

import IndividualJobBody from "@/components/individualJob/IndividualJobBody";
import IndividualJobFooter from "@/components/individualJob/IndividualJobFooter";
import IndividualJobHeader from "@/components/individualJob/IndividualJobHeader";

const Page = ({ params: { id } }) => {
  return (
    <>
      <header>
        <IndividualJobHeader />
      </header>
      <main>
        <IndividualJobBody />
      </main>
      <footer>
        <IndividualJobFooter />
      </footer>
    </>
  );
};

export default Page;
