import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import styles from "./Calendar.module.css";
import Header from "../../shared/ui/Header/Header";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import SoonAppointments from "../../widgets/SoonAppointments/SoonAppointments";
import { deleteEvent, fetchAppointments } from "../../shared/redux/eventSlice";
import { fetchClients } from "../../shared/redux/clientSlice";
import type { EventClickArg, EventRemoveArg } from "@fullcalendar/core/index.js";

function CalendarPage() {
  const events = useAppSelector((state) => state.events);
  console.log(events);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAppointments("http://localhost:3000/db/appointment"))
    dispatch(fetchClients("http://localhost:3000/db/client"))
  }, [])

  async function deleteEventInDB(id: number) {
    const deletedEvent = await fetch(`http://localhost:3000/db/appointment/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE",
    })
  }

  
  function handleEventRemove(removeInfo: EventRemoveArg) {
    console.log(removeInfo);
    dispatch(deleteEvent(removeInfo.event.id))
    deleteEventInDB(Number(removeInfo.event.id))
  }
  
  function handleEventClick(clickInfo: EventClickArg) {
    console.log(typeof clickInfo);
    if (confirm(`Are you sure you want to delete the event ${clickInfo.event.title}`)) {
      clickInfo.event.remove()
    }
  }

  return (
    <div className={styles.calendarPageContent}>
      <Header />
      <hr className={styles.solidDivider} />
      <div className={styles.contentBody}>
        <div className={styles.calendar}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"} //timeGridDay, timeGridWeek - other options
            headerToolbar={{
              start: "today prev,next", // will normally be on the left. if RTL, will be on the right
              center: "title",
              end: "timeGridDay, timeGridWeek, dayGridMonth", // will normally be on the right. if RTL, will be on the left
            }}
            events={events}
            eventRemove={handleEventRemove}
            // selectable={true}
            eventClick={handleEventClick}
          />
        </div>
        <SoonAppointments></SoonAppointments>
      </div>
    </div>
  );
}

export default CalendarPage;
