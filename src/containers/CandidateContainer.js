import React from "react";
import { useNavigate } from "react-router-dom";

const CandidateContainer = ({ data }) => {
  // console.log("[candi pro]", data);
  const navigate = useNavigate();
  const handleShortList = (id, name) => {
    alert(
      `This Candidate Has Been Shortlisted ${id} : ${name}, Click Okay To Navigate to Home`
    );
    navigate("/", { replace: true });
  };
  const handleRejected = (id, name) => {
    alert(
      `This Candidate Has Been Rejected ${id} : ${name}, Click Okay To Navigate to Home`
    );
    navigate("/", { replace: true });
  };

  return (
    <div className="profileContainer">
      <div className="profileContent">
        <img src={data.Image} alt={data.name} />
        <div className="profileBody">
          <h2>{data.name}</h2>
          <div className="profileButtons">
            <button
              className="but butSucces"
              disabled={data.isShortListed}
              onClick={() => {
                handleShortList(data.id, data.name);
              }}
            >
              Shortlist
            </button>
            <button
              className={"but butDanger"}
              disabled={data.isShortListed === false ? true : false}
              onClick={() => {
                handleRejected(data.id, data.name);
              }}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateContainer;
