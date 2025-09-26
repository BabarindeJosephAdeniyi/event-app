import React from "react";
import { Link } from "react-router-dom";
import events from "./events";
import "./event.css";

const EventList = () => {
  return (
    <>
    <h1 style={{textAlign:"center", margin:"5% 0"}}>Events & Conferences</h1>
    
     <div className="event-list">
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <div className="event-card-header">
            <h3>{event.title}</h3>
            <span className="event-date">{event.date}</span>
          </div>
          <p className="event-description">{event.description}</p>
          <div className="event-footer">
            <span className="event-location">{event.location.slice(0,25)}...</span>
            <Link to={`/events/${event.id}`} className="view-btn">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
    </>
   
  );
};

export default EventList;


