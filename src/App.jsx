import { BrowserRouter, Routes, Route } from "react-router-dom";
import Eventlist from "../components/Eventlist";
import EventDetails from "../components/EventDetails";
import AttendeeDetail from "../components/AttendeeDetail";
import Navbar from "../components/Navbar";
import TicketPreview from "../components/TicketPreview";
import MyTickets from "../components/MyTickets";
import About from '../components/About'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Eventlist />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/attendeedetails" element={<AttendeeDetail />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/ticket-preview" element={<TicketPreview />} />
        <Route path="/my-tickets" element={<MyTickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
