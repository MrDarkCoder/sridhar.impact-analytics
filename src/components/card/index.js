import React from "react";
import { useNavigate } from "react-router-dom";

const CanditateCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/candidate/${id}`, { state: data });
  };

  return (
    <>
      <button
        className="card"
        onClick={() => {
          handleClick(data?.id);
        }}
      >
        <img className="cardImage" src={data?.Image} alt={data?.name} />

        <div className="cardBody">
          <h2>{data?.name}</h2>
        </div>
      </button>
    </>
  );
};

export default CanditateCard;
