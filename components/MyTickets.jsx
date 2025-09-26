import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import html2pdf from "html2pdf.js";
import "./mytickets.css";

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("myTickets")) || [];
    setTickets(storedTickets);
  }, []);

  const handleDownload = (ticket, index) => {
    const element = document.getElementById(`ticket-${index}`);
    if (!element) return;

    const opt = {
      margin: 0.5,
      filename: `${ticket.eventName || "event"}-ticket.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  const handleDelete = (index) => {
    if (!window.confirm("Are you sure you want to delete this ticket?")) return;

    const updatedTickets = [...tickets];
    updatedTickets.splice(index, 1);
    setTickets(updatedTickets);
    localStorage.setItem("myTickets", JSON.stringify(updatedTickets));
  };

  if (tickets.length === 0) {
    return (
      <div className="no-tickets">
        <h2>No tickets booked yet!</h2>
        <Link to="/" className="book-first-btn">
          🎟️ Book Your First Ticket
        </Link>
      </div>
    );
  }

  return (
    <div className="my-tickets-containers">
      <h1>My Tickets</h1>
      <div className="tickets-lists">
        {tickets.map((ticket, index) => (
          <div key={index} className="ticket-cards" id={`ticket-${index}`}>
            <div className="ticket-headers">
              <h2>{ticket.eventName}</h2>
              <span className="ticket-types">{ticket.ticketType.toUpperCase()}</span>
            </div>

            <div className="ticket-infos">
              <div><strong>Name:</strong> {ticket.name}</div>
              <div><strong>Email:</strong> {ticket.email}</div>
              <div><strong>Tickets:</strong> {ticket.ticketCount}</div>
              <div><strong>Date:</strong> {ticket.eventDate} at {ticket.eventTime}</div>
              <div><strong>Location:</strong> {ticket.eventLocation}</div>
            </div>

            {ticket.image && (
              <img
                src={ticket.image}
                alt="Event"
                className="ticket-images"
                crossOrigin="anonymous"
              />
            )}

            <div className="ticket-qrs">
              <QRCode value={JSON.stringify(ticket)} size={100} />
            </div>

            <div className="ticket-actions">
              <button
                className="download-btn"
                onClick={() => handleDownload(ticket, index)}
              >
                📥 Download PDF
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Link to="/" className="book-more-btns">
        🎟️ Book More Tickets
      </Link>
    </div>
  );
};

export default MyTickets;
