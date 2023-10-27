import {
  getAllEventsNews,
  getInfoByYearAndEvent,
  getYearBYEvent,
} from "@/api/media";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Events = () => {
  const [mediaData, setMediaData] = useState({});
  const [responseType, setResponseType] = useState("false");
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [eventType, setEventType] = useState("news");
  const [expanded, setExpanded] = useState(false);
  const [openTooltip, setOpenToolTip] = useState(false);

  // const toggleExpand = () => {
  //   setExpanded(!expanded);
  // };

  const handleToggle = () => {
    // Toggle the button text
    if (eventType === "news") {
      setEventType("events");
    } else {
      setEventType("news");
    }
  };
  // console.log("button name", eventType);
  useEffect(() => {
    const getYear = async () => {
      const response = await getYearBYEvent(eventType);
      setYears(response.data);
      // console.log("years", response.data);
    };
    getYear();
  }, [eventType]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await getAllEventsNews();
  //     // console.log(response);
  //     const events =
  //       response && response.filter((item) => item.eventNewsType === "Events");
  //     const news =
  //       response && response.filter((item) => item.eventNewsType === "News");
  //     setMediaData({ events, news });
  //   };
  //   getData();
  // }, []);

  useEffect(() => {
    const getData = async () => {
      // console.log("event", eventType, "year", years[0]);
      const response = await getInfoByYearAndEvent(years[0], eventType);
      // console.log("-----------", response.data);
      setMediaData(response.data);
      setSelectedYear(years[0]);
      if (response.type) {
        setResponseType("true");
      }
    };
    getData();
  }, [years, eventType]);
  const handleYearButtonClick = async (year) => {
    const response = await getInfoByYearAndEvent(year, eventType);
    setMediaData(response.data);
    if (response.type) {
      setResponseType("true");
    }
    setSelectedYear(year);
  };

  const toggleTooltip = () => {
    setOpenToolTip(!openTooltip);
  };

  console.log("Media Data", openTooltip);
  return (
    <Layout pageTitle="Mission 500 | Media">
      <NavOne />
      <PageHeader title="Events & News" />
      <div className="d-flex justify-content-end p-3 px-4">
        <span style={{ margin: "5px" }}>NEWS</span>
        <label className="switch">
          <input type="checkbox" onClick={handleToggle} />
          <span className="slider round"></span>
        </label>
        <span style={{ margin: "5px" }}>EVENTS</span>
      </div>

      <div className="col-md-12">
        <div className="card mt-4">
          <div className="card-header">
            <ul className="nav nav-tabs nav-tabs-neutral justify-content-start shadow p-3 mb-5 bg-body rounded">
              {years.map((year, index) => (
                <li className="nav-item" key={index}>
                  <button
                    className={`nav-link tabs_list ${
                      year === selectedYear ? "active" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleYearButtonClick(year)}
                  >
                    Year {year}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-body" style={{ padding: "0 1.25rem" }}>
            <div className="tab-content text-center">
              <div className="d-flex">
                {responseType === "true" &&
                  mediaData.map((event, index) => (
                    <div className="tab-pane active" key={index}>
                      <div className="d-flex">
                        <div
                          className="card card_image"
                          style={{ width: "18rem" }}
                        >
                          <Link href={event.eventNewsLink} target="_blank">
                            <img
                              src={event.imagePath}
                              className="card-img-top"
                              alt="..."
                            ></img>
                          </Link>
                          <div className="card-body">
                            <h5>{event.title}</h5>
                            {expanded ? (
                              <p>{event.shortDesc}</p>
                            ) : (
                              <>
                                <p>
                                  {event.shortDesc.slice(0, 50)}...
                                  <span>
                                    {event.shortDesc.length > 50 && (
                                      <li
                                        class="tooltip-container"
                                        onClick={toggleTooltip}
                                      >
                                        More
                                        {openTooltip && (
                                          <span class="tooltipa">
                                            {event.shortDesc} hi
                                          </span>
                                        )}
                                      </li>
                                    )}
                                  </span>
                                </p>
                              </>
                            )}
                            <p>{event.participants}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Events;
