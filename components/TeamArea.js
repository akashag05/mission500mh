import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getMember } from "@/api/about";

const TeamArea = () => {
  const [temaData, setTeamData] = useState([]);

  const getData = async () => {
    let response = await getMember();
    setTeamData(response);
    console.log("get members response", response);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="team-area text-center" id="our_team">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading">
              <div className="section-icon">
                {/* <img src="/images/section-icon.png" alt="section-icon" /> */}
              </div>
              <h2 className="section__title">Our Team</h2>
              {/* <p className="section__meta">meet profesionals</p> */}
            </div>
          </div>
        </div>
        <div className="row team-content-wrap justify-content-between">
          {temaData.map((item, index) => {
            const isEven = index % 2 === 0;
            const teamItemClass = isEven ? "team-item1" : "team-item2";
            return (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className={`team-item ${teamItemClass}`}>
                  <div className="team__img">
                    <img
                      src={item.memberPhoto_path}
                      width={270}
                      height={295}
                      alt="team image"
                    />
                  </div>
                  <div className="team__title">
                    <h3 className="team__title-title">
                      <Link href="#">{item.memberName}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="col-lg-3 col-sm-6">
            <div className="team-item team-item2">
              <div className="team__img">
                <img
                  src="/images/Shekhar_Nimbalkar.png"
                  width={270}
                  height={295}
                  alt="team image"
                />
              </div>
              <div className="team__title">
                <h3 className="team__title-title">
                  <Link href="#">Shekhar Nimbalkar</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="team-item team-item1">
              <div className="team__img">
                <img
                  src="/images/Abhijit_Panwar.png"
                  width={270}
                  height={295}
                  alt="team image"
                />
              </div>
              <div className="team__title">
                <h3 className="team__title-title">
                  <Link href="#">Abhijit Panwar</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="team-item team-item2">
              <div className="team__img">
                <img
                  src="/images/Kiran_patil.png"
                  width={270}
                  height={295}
                  alt="team image"
                />
              </div>
              <div className="team__title">
                <h3 className="team__title-title">
                  <Link href="#">Kiran Patil</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="team-item team-item1">
              <div className="team__img">
                <img
                  src="/images/Milind_Deokar.png"
                  width={270}
                  height={295}
                  alt="team image"
                />
              </div>
              <div className="team__title">
                <h3 className="team__title-title">
                  <Link href="#">Milind Deokar</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="team-item team-item2">
              <div className="team__img">
                <img
                  src="/images/Sanjay_pate.png"
                  width={270}
                  height={295}
                  alt="team image"
                />
              </div>
              <div className="team__title">
                <h3 className="team__title-title">
                  <Link href="#">Sanjay Pate</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="team-item team-item1">
              <div className="team__img">
                <img
                  src="/images/Jitendra_kesharwani.png"
                  width={270}
                  height={295}
                  alt="team image"
                />
              </div>
              <div className="team__title">
                <h3 className="team__title-title">
                  <Link href="#">Jitendra Kesharwani</Link>
                </h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
