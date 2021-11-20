import React, { useEffect, useState } from "react";
import CanditateCard from "../components/card";

const RejectedContainer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [candidateData, setCandidateData] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterSearch = candidateData.filter(
    (canditate) =>
      canditate.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  useEffect(() => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then(
        (res) => {
          const newCandi = res.map((c, i) => ({
            ...c,
            isShortListed: i < 3,
          }));
          const shortedCandi = newCandi.filter((c) => !c.isShortListed);
          setCandidateData(shortedCandi);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div className="error">Error : {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="loader">Loading... </div>;
  } else {
    return (
      <div className="container">
        <div className="content">
          <h2>Rejected Candidates</h2>
          <input label="Search Canditate" onChange={handleSearch} />
        </div>
        {/* {console.log(candidateData)} */}
        <div className="candidateContent wrap">
          {filterSearch.map((canditate) => (
            <CanditateCard key={canditate.id} data={canditate} />
          ))}
        </div>

        <div className="info">
          <h2>
            Initially some of the canditate are Rejected to show some state
          </h2>
          <h2>@sridhar</h2>
        </div>
      </div>
    );
  }
};

export default RejectedContainer;
