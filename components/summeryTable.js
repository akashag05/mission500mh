import React, { useState, useEffect } from "react";
import data from "../data.json";
import Image from "next/image";
import Link from "next/link";

const SummeryTable = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    // Set the default selected year to the last year in the data array
    const lastYear = data[data.length - 1].YEAR;
    setSelectedYear(lastYear);
  }, []);

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };
  const scrollToMaps = () => {
    const element = document.getElementById("maps"); // Get the target element by its ID
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Scroll to the target element smoothly
    }
  };
  const handleClick = (item) => {
    handleYearClick(item.YEAR);
    setSelectedItem(item.YEAR);
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
              <th
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontWeight: 600,
                }}
              >
                YEAR
              </th>
              <th
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontWeight: 600,
                }}
              >
                NUMBER OF VILLAGES
              </th>
              <th
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontWeight: 600,
                }}
              >
                NO OF HOURS
              </th>
              <th
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontWeight: 600,
                }}
              >
                CONTRIBUTION BY FARMERS(RS)
              </th>
              <th
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontWeight: 600,
                }}
              >
                CONTRIBUTION FROM SPONSOR (RS)
              </th>
              {/* <th>RESERVOIR CREATED IN LITRE</th> */}
              <th
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontWeight: 600,
                }}
              >
                RESERVOIR CREATED IN CRORE LITRE
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index} id={index == 3 && "maps"}>
                  {/* <td>{item.SR_NO}</td> */}
                  <td
                    onClick={() => {
                      handleYearClick(item.YEAR);
                      setSelectedItem(item.YEAR);
                      scrollToMaps();
                
                    }}
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    {/* <a href="#maps" style={{ cursor: "pointer" }}>
                      {item.YEAR}
                    </a> */}
                    <a href={`https://mission500mh.com/${item.YEAR}-Projects`} target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                      {item.YEAR}
                    </a>
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
                3,11,43,775
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
      <section
        className="d-flex justify-content-around"
        style={{ paddingTop: "0rem" }}
      >
        <div
          className="p-4 ml-3 justify-start"
          style={{
            border: "2px solid grey",
            borderRadius: "12px",
            height: "fit-content",
          }}
        >
          {data.map((item, index) => {
            return (
              <ul className="d-flex justify-content-evenly" key={index}>
                <li
                  onClick={() => handleClick(item)}
                  style={{
                    cursor: "pointer",
                    fontWeight: selectedItem === item.YEAR ? "bold" : "normal",
                    fontSize: selectedItem === item.YEAR && "18px",
                  }}

                >
                  - {item.YEAR}
                </li>
              </ul>
              
            );
          })}
        </div>
        <div>

        </div>

        <div className="justify-end">
          <div className="d-flex p-4">
            <p>Year {selectedYear}</p>
            {selectedYear && selectedYear == 2023 ? (
              <Image src="../images/map_23.svg" width={700} height={500} />
            ) : selectedYear == 2022 ? (
              <Image src="../images/map_22.svg" width={700} height={500} />
            ) : selectedYear == 2021 ? (
              <Image src="../images/map_21.svg" width={700} height={500} />
            ) : selectedYear == 2020 ||
              selectedYear == 2019 ||
              selectedYear == 2018 ? (              <Image
                src="../images/map_18_19_20.svg"
                width={700}
                height={500}
              />
            ) : (
              "/"
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SummeryTable;
