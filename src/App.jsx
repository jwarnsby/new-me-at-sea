import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { CruiseItinerary } from "./components/cruiseitinerary";
import { ImageGallery } from "./components/ImageGallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [isDesktop, setIsDesktop] = useState(true); // Default to true for initial render

  useEffect(() => {
    setLandingPageData(JsonData);

    // Update screen size state on resize
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Example breakpoint for desktop
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Services data={landingPageData.Services} /> 
      {isDesktop ? (
        <Gallery data={landingPageData.Gallery} />
      ) : (
        <ImageGallery data={landingPageData.Gallery} />
      )}
      <Features data={landingPageData.Features} />
      <CruiseItinerary />
      {landingPageData.About && landingPageData.About.length > 0 && (
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">Meet the Experts!</h2>
            </div>
          </div>
          {landingPageData.About.map((person, index) => (
            <About key={index} data={person} />
          ))}
        </div>
      )}
      <Testimonials data={landingPageData.Testimonials} /> 
      <Team data={landingPageData.Team} /> 
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
