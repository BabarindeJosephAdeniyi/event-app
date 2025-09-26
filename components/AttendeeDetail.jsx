import React, { useState } from "react";
import { Upload, Mail } from "lucide-react";
import "./attendeedetail.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";

const AttendeeDetail = () => {
  const [, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [nameerr, setNameerr] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [texterr, setTexterr] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const ticketInfo = location.state; 

  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const handleImageUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "event-app");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dkutqxpfi/image/upload",
        formData
      );
      setFile(selectedFile);
      setImageUrl(res.data.secure_url);
    } catch (err) {
      console.error("Image upload error:", err);
      alert("Image upload failed. Please try again.");
    }
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  let valid = true;
  setNameerr("");
  setEmailerr("");
  setTexterr("");

  if (!name) {
    setNameerr("Name is required");
    valid = false;
  } else if (!nameRegex.test(name)) {
    setNameerr("Please input a valid name");
    valid = false;
  }

  if (!email) {
    setEmailerr("Email is required");
    valid = false;
  } else if (!emailRegex.test(email)) {
    setEmailerr("Please input a valid email");
    valid = false;
  }

  if (!text) {
    setTexterr("Please tell us about your project");
    valid = false;
  }

  if (!imageUrl) {
    alert("Please upload a profile photo.");
    valid = false;
  }

  if (valid) {
    const attendeeData = {
      name,
      email,
      text,
      image: imageUrl,
      ...ticketInfo,
    };

    const existingTickets = JSON.parse(localStorage.getItem("myTickets")) || [];
    existingTickets.push(attendeeData);
    localStorage.setItem("myTickets", JSON.stringify(existingTickets));

    localStorage.setItem("ticketData", JSON.stringify(attendeeData));

    alert("Form submitted successfully!");
    navigate("/ticket-preview");
  }
};

  return (
    <div className="event-details">
      <div style={{ textAlign: "center" }} className="attendee-header">
        <h1>Attendee Details</h1>
        <div style={{ marginTop: "10px" }}>Step 2/3</div>
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: "66.6%" }}></div>
      </div>

      <div className="all">
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>Upload Profile Photo</div>

          <div className="event-cards">
            <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />

              {!imageUrl && (
                <>
                  <Upload style={{ color: "white", margin: "0 auto", marginBottom: "20px" }} size={40} />
                  <p style={{ color: "white", fontSize: "20px" }}>
                    Drag & drop or click to upload
                  </p>
                </>
              )}

              {imageUrl && (
                <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className="preview-img"
                    style={{ width: "150px", height: "150px", borderRadius: "8px" }}
                  />
                </div>
              )}
            </label>
          </div>

          <div className="input-box">
            <label>
              Enter your Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              value={name}
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
            />
            <p className="error">{nameerr}</p>
          </div>

          <div className="input-boxx">
            <label>
              Enter your Email <span style={{ color: "red" }}>*</span>
            </label>
            <div className="itemss">
              <Mail size={20} className="mail" />
              <input
                type="email"
                placeholder="hello@avioflagos.io"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <p className="error">{emailerr}</p>
          </div>

          <div className="input-box">
            <label>About Project</label>
            <textarea
              rows={10}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Tell us something about your project..."
            />
            <p className="error">{texterr}</p>
          </div>

          <div className="action-buttons">
            <button type="button" className="cancel-btn">
              <Link to="" onClick={() => navigate(-1)}>
                Back
              </Link>
            </button>
            <button type="submit" className="next-btn">
              Get My Free Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttendeeDetail;
