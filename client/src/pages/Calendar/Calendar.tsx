import React, { Component } from "react"
import {Calendar, momentLocalizer} from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css";
import Header from "../../shared/ui/Header/Header";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Event 1',
    start: new Date('2025-07-20T10:00:00.000Z'),
    end: new Date('2025-07-20T12:00:00.000Z'),
  },
  {
    title: 'Programming',
    start: new Date('2025-07-19T22:00:00.000Z'),
    end: new Date('2025-07-19T23:00:00.000Z'),
  },
];

function Home() {
  return (
    <>
      <Header/>
      <div className=""></div>
      <div className="calendar">
        <Calendar 
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{height: "100vh"}}
      />
      </div>
    </>
  )
}


export default Home;