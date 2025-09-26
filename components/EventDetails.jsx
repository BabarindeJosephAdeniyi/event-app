import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import events from "./events.js";
import "./eventdetail.css";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));
  const [tickets, setTickets] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (!event) {
    return <h2>Event not found</h2>;
  }

  const handleNext = () => {
    if (!selectedTicket) {
      setError("⚠️ Please select a ticket type.");
      return;
    }
    if (!tickets || tickets < 1) {
      setError("⚠️ Please select the number of tickets.");
      return;
    }

    setError("");

    const ticketData = {
    eventId: event.id,
    eventName: event.name,
    ticketType: selectedTicket,
    ticketCount: tickets,
    eventDate: event.date,
    eventTime: event.time,
    eventLocation: event.location,
  };

  localStorage.setItem("ticketData", JSON.stringify(ticketData));

  navigate("/attendeedetails", { state: ticketData });
  };

  return (
    <div className="event-details">
      <div className="event-header">
        <h1>Ticket Selection</h1>
        <p>Step 1/3</p>
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: "33.3%" }}></div>
      </div>

      <div className="all">
        <div className="event-cards">
          <h2 className="event-title">{event.name}</h2>
          <p className="event-subtitle">{event.description}</p>
          <p className="event-meta">
            📍 {event.location} &nbsp;&nbsp;||&nbsp;&nbsp; {event.date} | {event.time}
          </p>
        </div>

        <hr className="divider" />

        <h3 className="section-title">Select Ticket Type:</h3>
        <div className="ticket-options">
          {event.tickets.map((ticket, index) => (
            <div
              key={index}
              tabIndex="0"
              className={`ticket-box ${selectedTicket === ticket.type ? "selected" : ""}`}
              onClick={() => setSelectedTicket(ticket.type)}
            >
              <h4>{ticket.price}</h4>
              <p className="ticket-type">{ticket.type.toUpperCase()} ACCESS</p>
              <p className="ticket-left">{ticket.remaining}</p>
            </div>
          ))}
        </div>

        <div tabIndex="0" className="ticket-select">
          <label>Number of Tickets</label>
          <select value={tickets} onChange={(e) => setTickets(parseInt(e.target.value))}>
            {[...Array(10).keys()].map((n) => (
              <option key={n + 1} value={n + 1}>
                {n + 1}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="action-buttons">
          <button className="cancel-btn">
            <Link
              style={{ background: "#033039", color: "#00cfff", textDecoration: "none" }}
              to="/"
            >
              Cancel
            </Link>
          </button>
          <button className="next-btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
