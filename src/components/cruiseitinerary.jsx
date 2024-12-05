import React from 'react';

export const CruiseItinerary = () => {
  return (
    <div className="outer-container">
      <div id="itinerary" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Cruise Itinerary</h2>
          </div>
        </div>
      </div>
      <div className="itinerary-container">
        <h1>7 Nights | Hellenic Inspiration | Oceania Cruises: Vista</h1>
        <div className="itinerary-details">
          <div className="day">
            <div className="day-location">
              <strong>Sep 26 Fri: </strong> <i>Istanbul, Turkey</i>
            </div>
            <span>Embark 1 PM, Depart 9 PM</span>
          </div>
          <div className="day">
            <div className="day-location">
              <strong>Sep 27 Sat: </strong> <i>At Sea</i>
            </div>
          </div>
          <div className="day">
            <div className="day-location">
              <strong>Sep 28 Sun: </strong> <i>Ephesus, Turkey</i>
            </div>
            <span>Arrive: 7 AM, Depart: 8 PM</span>
          </div>
          <div className="day">
            <div className="day-location">
              <strong>Sep 29 Mon: </strong> <i>Rhodes, Greece</i>
            </div>
            <span>Arrive: 8 AM, Depart: 7 PM</span>
          </div>
          <div className="day">
            <div className="day-location">
              <strong>Sep 30 Tue: </strong> <i>Heraklion, Greece</i>
            </div>
            <span>Arrive: 8 AM, Depart: 9 PM</span>
          </div>
          <div className="day">
            <div className="day-location">
              <strong>Oct 1 Wed: </strong> <i>Santorini, Greece</i>
            </div>
            <span>Arrive: 8 AM, Depart: 10 PM</span>
          </div>
          <div className="day">
            <div className="day-location">
              <strong>Oct 2 Thu: </strong> <i>Mykonos, Greece</i>
            </div>
            <span>Arrive: 8 AM, Depart: 9 PM</span>
          </div>
          <div className="day">
            <div className="day-location">
              <strong>Oct 3 Fri: </strong> <i>Athens (Piraeus), Greece</i>
            </div>
            <span>Disembark 8 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
