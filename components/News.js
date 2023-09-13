import Link from "next/link";
import React from "react";

const NewsContent = () => {
  return (
    <div className="">
      <div className="col-md-12">
        <div class="card mt-4">
          <div class="card-header">
            <ul
              class="nav nav-tabs nav-tabs-neutral justify-content-start shadow p-3 mb-5 bg-body rounded"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link active tabs_list"
                  data-toggle="tab"
                  href="#2023"
                  role="tab"
                >
                  Year 2022
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link tabs_list"
                  data-toggle="tab"
                  href="#2022"
                  role="tab"
                >
                  {" "}
                  Year 2021
                </a>
              </li>
              {/* <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#2021" role="tab">
                    Events of Year 2021
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#2020" role="tab">
                    Events of Year 2020
                  </a>
                </li> */}
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content text-center">
              <div class="tab-pane active" id="2023" role="tabpanel">
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <Link href="https://www.newindianexpress.com/good-news/2022/feb/13/barren-hamlet-to-land-bristling-with-life-2418728.html">
                    <div class="card" style={{ width: "18rem" }}>
                      <img
                        src="./images/news1.png"
                        class="card-img-top"
                        alt="..."
                        style={{ width: "250px", height: "150px" }}
                      ></img>
                      <div class="card-body">
                        <h5>Barren hamlet to land bristling with life</h5>
                        <p style={{ padding: "5px 0px" }}>
                          {" "}
                          IRS officer’s initiative & efforts of villagers turn
                          region hit by drought into zone with sufficient
                          rainwater storage
                        </p>
                        <p style={{ padding: "5px 0px" }}>
                          Participents : Dr. Ujjwalkumar Chavhan – IRS
                        </p>
                        {/* <a href="https://www.facebook.com/1226814592/posts/10228332773244243/?extid=0&d=n">
                          {" "}
                          Link
                        </a> */}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="tab-pane" id="2022" role="tabpanel">
                <Link href="https://www.thebetterindia.com/247424/irs-hero-ujjwal-chavan-income-tax-commissioner-water-conservation-dhamangaon-maharashtra-farmers-jalyukt-shivar-abhiyan-agriculture-gop94/">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src="/images/news4.png
                      "
                      class="card-img-top"
                      alt="..."
                      style={{ width: "250px", height: "150px" }}
                    ></img>
                    <div class="card-body">
                      <h5> Saves Cr's Litres</h5>
                      <p style={{ padding: "5px 0px" }}>
                        IRS Officer Saves 102 Cr Litres of Water, Makes 16
                        Villages Drought-Free in 3 Years
                      </p>
                      <p style={{ padding: "5px 0px" }}>
                        Participents : Dr. Ujjwalkumar Chavhan – IRS
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              {/* <div class="tab-pane" id="2021" role="tabpanel">
                  <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it’s supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
                </div>
                <div class="tab-pane" id="2020" role="tabpanel">
                  <p>
                    "I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers. I understand
                    culture. I am the nucleus. I think that’s a responsibility
                    that I have, to push possibilities, to show people, this is
                    the level that things could be at."
                  </p>
                </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-5">
        <h4>Barren hamlet to land bristling with life</h4>
        <p className="py-3">
          IRS officer’s initiative & efforts of villagers turn region hit by
          drought into zone with sufficient rainwater storage, <br />
          <span className="pl-3">
            <i>-by Sudhir Suryawanshi</i>
          </span>
        </p>
        <p>
          Published: 13th February 2022 08:13 AM | Last Updated: 13th February
          2022 08:13 AM
        </p>
        <img
          src="/images/news2.png"
          alt="..."
          style={{ width: "70%", height: "450px", padding: "1rem 0" }}
        />
        <p className="py-3 w-75">
          MAHARASHTRA: Ujjwal Chavan, a 2010 batch IRS officer who works in a
          central government agency in Mumbai, has changed the face of his
          drought-prone barren village. Perennial water shortages are over in
          other villages as well, as check dams have come up in this area of
          Maharashtra’s Jalgaon district, to preserve rainwater. Chavan has set
          a target of preserving 500 crore-litre of it this year.
        </p>
        <img
          src="/images/news3.png"
          alt="..."
          style={{ width: "70%", height: "450px", padding: "1rem 0" }}
        />
        <p className="py-3 w-75">
          Chavan and his team have helped 40 villages to store 200 crore-litre
          in various check dams. The villagers also planted 45,000 trees,
          turning the once barren land into a thick green cover, bringing back
          peacocks and other birds. Chavan said his hamlet called Dhamangaon in
          Chalisgaon taluka always faced an acute water problem. One, which had
          multiple adverse ramifications.
        </p>
        <p className="py-3 w-75">
          “Women had to spend the entire day just to get drinking water.
          School-going children were engaged in this,” said Chavan. He recalled
          an incident that moved him. A farmer who owned 40 acres committed
          suicide due to consecutive droughts in 2017-2018. “It forced me to
          think that if a man owning 40 acres could not bear the water crisis,
          what about marginal farmers and labourers? I decided to look for
          long-term solutions,” he said.
        </p>
        <p className="py-3 w-75">
          Agriculture in this area is dependent on an erratic monsoon. “I alone
          could not reach a conclusion on what should be done.” Chavan then
          called a meeting of villagers and this is what he told them: “I am
          ready to travel 350 km every weekend from Mumbai to work on a mission
          that will change everyone’s life. But you too have to chip in.”
        </p>
        <p className="py-3 w-75">
          The officer focussed on community effort, which led villagers to
          construct dams to store as much water as they could. Chavan said under
          Jalyukta Shivir, they received Rs 80 lakh, plus Rs 40 lakh from
          Siddhivinayak Trust and Rs 10 lakh from relief fund organisations. “We
          started constructing major check dams in the first year that resulted
          in storing 14 crore-litre of water”. He and the villagers prepared an
          integrated development plan for Dhamangaon. The model was to replicate
          in other villages. “We were surprised after seeing the success of our
          efforts in this village. That encouraged us to carry it forward.”
          “While undertaking the construction of small check dams, sites were
          identified where maximum rainwater could be stored. Then, we formed a
          five-member team to execute the plan. These five were from village
          panchayats. We gave them leadership training as well.”
        </p>
        <p className="py-3 w-75">
          In 2018, they stored 20 crore-litre in five villages. “Next year, we
          collected 121 crore-litre in 43 check dams. We decided that each
          village would have a maximum of 30 check dams. In 2020, 200
          crore-litre was stored in 34 villages.” For 2022-23, they have set a
          target of 500 in 70 villages in five districts.
        </p>
        <p className="py-3 w-75">
          High storage of water has recharged the groundwater table. “Women have
          stopped going out for miles. Farmers have started two or three-season
          crops that has increased their income substantially,” said Chavan. Big
          and marginal farmers are earning well. Labourers don’t have to shift
          to other places for livelihood. The Spin-offs are impressive. Mud
          houses have been replaced with concrete ones. Plantations have helped
          reduce the temperature in the region
        </p>
      </div> */}
    </div>
  );
};

export default NewsContent;
