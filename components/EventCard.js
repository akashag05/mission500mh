import React from "react";

const EventCard = () => {
  return (
    <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="/images/helping-img.jpg"
          className="card-img-top"
          alt="Save Water Event 1"
        ></img>
        <div className="card-body">
          <h3>Save Water Event 1</h3>
          <p style={{ padding: "5px 0px" }}>
            Join us for an informative session on water conservation.
          </p>
          <p style={{ padding: "5px 0px" }}>Participants: John, Jane, Smith</p>
          <a href="#">Learn More</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="/images/helping-img.jpg"
          className="card-img-top"
          alt="Save Water Event 2"
        ></img>
        <div className="card-body">
          <h3>Save Water Event 2</h3>
          <p style={{ padding: "5px 0px" }}>
            Discover innovative ways to reduce water usage in your home.
          </p>
          <p style={{ padding: "5px 0px" }}>Participants: Emily, Michael</p>
          <a href="#">Learn More</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="/images/helping-img.jpg"
          className="card-img-top"
          alt="Save Water Event 3"
        ></img>
        <div className="card-body">
          <h3>Save Water Event 3</h3>
          <p style={{ padding: "5px 0px" }}>
            Workshop on sustainable landscaping practices for water
            conservation.
          </p>
          <p style={{ padding: "5px 0px" }}>Participants: Sarah, David</p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
