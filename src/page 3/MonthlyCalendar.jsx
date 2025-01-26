import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

const MonthlyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventName, setEventName] = useState("");
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem("calendarEvents");
    if (storedEvents) {
      return JSON.parse(storedEvents);
    }
    return []; // Return empty array if no events are stored
  });
  const navigate = useNavigate();

  // Save events to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleEventInput = (e) => {
    setEventName(e.target.value);
  };

  const addEvent = () => {
    if (selectedDate && eventName) {
      const newEvent = {
        id: new Date().getTime(),
        date: selectedDate,
        title: eventName,
      };
      setEvents([...events, newEvent]);
      setEventName("");
    }
  };

  const updateEvent = (eventId, newTitle) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId ? { ...event, title: newTitle } : event
      )
    );
  };

  const deleteEvent = (eventId) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
              {/* Navigation Buttons */}
      <div className="text-center mb-4">
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Back to Home
        </button>
        <button className="btn btn-secondary ms-3" onClick={() => navigate("/performance")}>
          View Performance
        </button>
      </div>
  
      {/* Page Title */}
      <h1 className="mb-4 headings text-center">Monthly Calendar</h1>
  

      {/* Calendar */}
      <div className="calendar-container mb-5">
        <Calendar
          value={selectedDate}
          onClickDay={handleDateClick}
          tileClassName={({ date }) =>
            events.some((event) => new Date(event.date).toDateString() === date.toDateString())
              ? "event-marked"
              : ""
          }
        />
      </div>
  
      {/* Create Event Section */}
      {selectedDate && (
        <div className="event-form mb-4 text-center">
          <h2 className="mt-2 mb-4 headings">Create Event</h2>
          <p className="text-white">Selected Date: {selectedDate.toDateString()}</p>
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={handleEventInput}
            className="form-control"
            style={{ maxWidth: '300px', margin: '0 auto' }} // Center input field
          />
          <button className="btn btn-primary mt-3" onClick={addEvent}>
            Add Event
          </button>
        </div>
      )}
  
      {/* Event List */}
      {events.length > 0 && (
        <div className="event-list text-center">
          <h2 className="mt-2 mb-4 headings">My Events</h2>
          {events.map((event) => (
            <div key={event.id} className="event-card mb-3">
              <span className="text-white">{new Date(event.date).toDateString()}</span>
              <span className="text-white ms-3">{event.title}</span>
              <button
                className="btn btn-sm btn-secondary ms-3"
                onClick={() => updateEvent(event.id, prompt("Enter new title", event.title))}
              >
                Update
              </button>
              <button
                className="btn btn-sm btn-danger ms-2"
                onClick={() => deleteEvent(event.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}  

export default MonthlyCalendar;
