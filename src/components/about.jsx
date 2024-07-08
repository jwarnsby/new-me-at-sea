import React from "react";

export const About = (props) => {
  const data = props.data;

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src={data.image} className="img-responsive" alt={data.name} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{data.name}</h2>
              <p>{data.paragraph ? data.paragraph : "loading..."}</p>
              <p>{data.paragraph2 ? data.paragraph2 : ""}</p>
              <p>{data.paragraph3 ? data.paragraph3 : ""}</p>
              {data.website ? (
                <p>
                  <a href={data.website} target="_blank" rel="noopener noreferrer">
                    Click here to learn more!
                  </a>
                </p>
              ) : (
                <p></p>
              )}
              {/* <h3>{data.name} Offers:</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data.Why
                      ? data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : ""}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data.Why2
                      ? data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : ""}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
