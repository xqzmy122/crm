import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import styles from "./Calendar.module.css";
import Header from "../../shared/ui/Header/Header";
import { useAppSelector } from "../../app/redux/hooks";
import SoonAppointments from "../../widgets/SoonAppointments/SoonAppointments";

function CalendarPage() {
  const events = useAppSelector((state) => state.events);

  return (
    <div className={styles.content}>
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
          />
        </div>
        <SoonAppointments></SoonAppointments>
      </div>
    </div>
  );
}

export default CalendarPage;
