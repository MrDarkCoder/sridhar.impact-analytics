import React from "react";
import { useLocation } from "react-router-dom";
import CandidateContainer from "../containers/CandidateContainer";

const CandidateProfile = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <>
      <CandidateContainer data={location.state} />
    </>
  );
};

export default CandidateProfile;
