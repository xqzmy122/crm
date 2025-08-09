import styles from "./SoonAppointments.module.css"
import { store } from "../../app/redux/store";
import Appointment from "../../shared/ui/Appointment/Appointment";


function SoonAppointments() {
  const currentDate = new Date()
    
  const events = store.getState().events
  const filteredEvents = events.filter((event) => {
    return (event.start.getTime() > currentDate.getTime() && event.start.getDay() === currentDate.getDay())
  })

  return <div className={styles.soonAppointments}>
    <h2>Appointments today:</h2>
    {filteredEvents.map((event) => {
      return <Appointment title={event.title} start={event.start}/> // should add id
    })}
  </div>
}

export default SoonAppointments