import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>VIP Package</h2>
          <h4>Our VIP Package deal includes:</h4>
          <p>3 Day Interactive Workshops and Classes about Mindfullness, Holistic Health & Resilience, Self Growth, and Leadership</p>
          <p>E-Books and Additional Course Material</p>
          <p>Exclusive Merchandise</p>
          <h3>$695/person, valued at $6,500</h3>
          <p>Please contact Jane at (949) 273-5444 or send a message below for pricing on cruise cabins.</p>
        </div>
        {/* <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
      </div>
    </div>
  );
};
