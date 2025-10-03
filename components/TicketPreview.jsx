import React from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";
import "./ticketpreview.css";

const TicketPreview = () => {
  const storedData = localStorage.getItem("ticketData");
  const ticketData = storedData ? JSON.parse(storedData) : null;

  if (!ticketData) {
    return <h2 className="no-ticket">No ticket data available</h2>;
  }

  const generatePDF = () => {
    const element = document.getElementById("ticket-preview");
    const opt = {
      margin: 0.5,
      filename: `${ticketData.eventName || "event"}-ticket.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  const handleDownload = () => {
    const img = document.getElementById("attendee-image");

    if (img && !img.complete) {
      img.onload = () => generatePDF();
      img.onerror = () => generatePDF();
    } else {
      generatePDF();
    }
  };

  return (
    <div className="ticket-preview-container">
      Completed
      <div className="progress-container">
        <div className="progress-bar" style={{ width: "100%" }}></div>
      </div>

      <h1 className="ticket-title">{ticketData.eventName}</h1>

      <div id="ticket-preview" className="ticket-card">
        <img
          id="attendee-image"
          src={ticketData.image}
          crossOrigin="anonymous"
          alt="Attendee"
          className="profile-photo"
        />

        <div className="ticket-details">
          <div><strong>Name:</strong> {ticketData.name}</div>
          <div><strong>Email:</strong> {ticketData.email}</div>
          <div><strong>Ticket Type:</strong> {ticketData.ticketType}</div>
          <div><strong>Tickets:</strong> {ticketData.ticketCount}</div>
          <div>
            <strong>Date:</strong> {ticketData.eventDate} at {ticketData.eventTime}
          </div>
          <div><strong>Location:</strong> {ticketData.eventLocation}</div>
        </div>

        <div className="qr-code">
          <QRCode value={JSON.stringify(ticketData)} size={140} />
        </div>
      </div>

      <div className="ticket-actions">
        <button onClick={handleDownload} className="download-btn">
          📥 Download Ticket
        </button>
        <Link to="/" className="book-another-btn">
          🎟️ Book Another Ticket
        </Link>
      </div>
    </div>
  );
};

export default TicketPreview;
