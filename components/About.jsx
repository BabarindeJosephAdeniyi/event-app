import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
      <div className='event-detail'>
        <div>
            <h1>Event Ticket Booking UI</h1>
            <li style={{listStyleType:"none"}}>A sleek and beginner-friendly Conference Ticket Generator UI for developers to clone, explore, and enhance. This design ensures a seamless ticket reservation experience with an elegant interface.</li>
        </div>

        <div>
            <p>Ticket Selection</p>
            <ul>
                <li>Browse available tickets (Free & Paid).</li>
                <li>List and card view for ticket display.</li>
                <li>One-click ticket reservation for free tickets.</li>
                <li>Payment modal for purchasing tickets.</li>
            </ul>
        </div>

        <div>
            <p>Attendee Details</p>
            <ul>
                <li>Input Name, Email, and optional Phone Number.</li>
                <li>Profile picture upload with real-time preview.</li>
                <li>Instant ticket summary before confirmation.</li>
            </ul>
        </div>

        <div>
            <p>Tech Stack (React + CSS)</p>
            <ul>
                <li>TicketSelection.jsx Displays ticket details</li>
                <li>AttendeeDetails.jsx Captures user details</li>
                <li>SuccessScreen.jsx Shows final ticket preview</li>
                <li>Profile pictures handled via Local Storage, Cloudinary, or URL.createObjectURL().</li>
            </ul>
        </div>


        <h1>Enjoy a seamless booking experience!</h1>


        <div style={{display:"flex", justifyContent:"center", margin:"20px 0"}}>
            <button>Figma File</button>
            <button>Github Repository</button>
        </div>
      </div>
    </>
  )
}

export default About
