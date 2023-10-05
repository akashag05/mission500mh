import React, { useState, useEffect } from "react";
import data from "../data.json";
import Image from "next/image";

const SummeryTable = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    // Set the default selected year to the last year in the data array
    const lastYear = data[data.length - 1].YEAR;
    setSelectedYear(lastYear);
  }, []);

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <>
      <div
        className="overflow-x-auto p-4"
        style={{
          border: "2px solid black",
          borderRadius: "20px",
          margin: "1rem",
        }}
      >
        <table className="table table-xs">
          <thead>
            <tr>
              <th>SR NO</th>
              <th>YEAR</th>
              <th>NUMBER OF VILLAGES</th>
              <th>NO OF HOURS</th>
              <th>CONTRIBUTION BY FARMERS(RS)</th>
              <th>CONTRIBUTION FROM SPONSOR (RS)</th>
              <th>RESERVOIR CREATED IN LITRE</th>
              <th>RESERVOIR CREATED IN CRORE LITRE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{item.SR_NO}</th>
                  <th
                    onClick={() => handleYearClick(item.YEAR)}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    {item.YEAR}
                  </th>
                  <th>{item.NUMBER_OF_VILLAGES}</th>
                  <th>{item.NO_OF_HOURS}</th>
                  <th>{item.CONTRIBUTION_BY_FARMERS}</th>
                  <th>{item.CONTRIBUTION_FROM_SPONSER}</th>
                  <th>{item.RESERVOIR_CREATED_IN_LITRE}</th>
                  <th>{item.RESERVOIR_CREATED_IN_CRORE_LITRE}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="">
          <p>For Year {selectedYear}</p>
          {selectedYear && selectedYear == 2023 ? (
            <Image src="../images/map_23.svg" width={700} height={500} />
          ) : selectedYear == 2022 ? (
            <Image src="../images/map_22.svg" width={700} height={500} />
          ) : selectedYear == 2021 ? (
            <Image src="../images/map_21.svg" width={700} height={500} />
          ) : selectedYear == 2020 ||
            selectedYear == 2019 ||
            selectedYear == 2018 ? (
            <Image src="../images/map_18_19_20.svg" width={700} height={500} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default SummeryTable;
