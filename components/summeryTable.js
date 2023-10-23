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
        <table className="table table-xs summery_table_heading">
          <thead>
            <tr>
              {/* <th>SR NO</th> */}
              <th style={{ textAlign: "center", verticalAlign: "middle" }}>
                YEAR
              </th>
              <th style={{ textAlign: "center", verticalAlign: "middle" }}>
                NUMBER OF VILLAGES
              </th>
              <th style={{ textAlign: "center", verticalAlign: "middle" }}>
                NO OF HOURS
              </th>
              <th style={{ textAlign: "center", verticalAlign: "middle" }}>
                CONTRIBUTION BY FARMERS(RS)
              </th>
              <th style={{ textAlign: "center", verticalAlign: "middle" }}>
                CONTRIBUTION FROM SPONSOR (RS)
              </th>
              {/* <th>RESERVOIR CREATED IN LITRE</th> */}
              <th style={{ textAlign: "center", verticalAlign: "middle" }}>
                RESERVOIR CREATED IN CRORE LITRE
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  {/* <td>{item.SR_NO}</td> */}
                  <td
                    onClick={() => handleYearClick(item.YEAR)}
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    {item.YEAR}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {item.NUMBER_OF_VILLAGES}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {item.NO_OF_HOURS}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {item.CONTRIBUTION_BY_FARMERS}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {item.CONTRIBUTION_FROM_SPONSER}
                  </td>
                  {/* <td>{item.RESERVOIR_CREATED_IN_LITRE}</td> */}
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {item.RESERVOIR_CREATED_IN_CRORE_LITRE}
                  </td>
                </tr>
              );
            })}
            <tr>
              {/* <td>{item.SR_NO}</td> */}
              <td
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                Total
              </td>
              <td
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                147
              </td>
              <td
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                42,351
              </td>
              <td
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                31,143,775
              </td>
              <td
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                35,376,732
              </td>
              {/* <td>{item.RESERVOIR_CREATED_IN_LITRE}</td> */}
              <td
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                337
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between">
        <div
          className="p-4 ml-3"
          style={{
            border: "2px solid grey",
            borderRadius: "12px",
            height: "fit-content",
          }}
        >
          {data.map((item, index) => {
            return (
              <ul className="d-flex justify-content-evenly">
                <li
                  onClick={() => handleYearClick(item.YEAR)}
                  style={{ cursor: "pointer" }}
                >
                  - {item.YEAR}
                </li>
              </ul>
            );
          })}
        </div>
        <div className="d-flex p-4" style={{ margin: "0 7rem 0 0" }}>
          <div className="">
            <p>Year {selectedYear}</p>
            {selectedYear && selectedYear == 2023 ? (
              <Image src="../images/map_23.svg" width={700} height={500} />
            ) : selectedYear == 2022 ? (
              <Image src="../images/map_22.svg" width={700} height={500} />
            ) : selectedYear == 2021 ? (
              <Image src="../images/map_21.svg" width={700} height={500} />
            ) : selectedYear == 2020 ||
              selectedYear == 2019 ||
              selectedYear == 2018 ? (
              <Image
                src="../images/map_18_19_20.svg"
                width={700}
                height={500}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SummeryTable;
