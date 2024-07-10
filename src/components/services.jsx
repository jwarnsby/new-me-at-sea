import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>A New Me @ Sea</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <h3 className="vision-statement">At New Me @ Sea, we're redefining what it means to nurture your physical, mental, and overall well-being with immersive seminars and hands-on workshops led by renowned experts, each dedicated to guiding you toward a higher state of mind. Life-changing experiences designed to inspire and uplift, promising a transformation in your health, business, mindset, and beyond. Let the waves carry you to a place where motivation meets luxury, where every moment is an opportunity to become the best version of yourself, with a path to a brighter, healthier future as vast and limitless as the ocean.</h3>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
      </div>
    </div>
  );
};
