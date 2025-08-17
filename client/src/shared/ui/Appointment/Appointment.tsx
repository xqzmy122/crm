import styles from "./Appointment.module.css";
import type { eventState } from "../../redux/eventSlice";

type Appointment = Pick<eventState, "date" | "title">;

function Appointment({ date, title }: Appointment) {
  return (
    <div className={styles.appointment}>
      <div className={styles.appointmentInfo}>
        <h2 className={styles.appointmentTitle}>{title}</h2>
        <p className={styles.procedure}>Extension</p>
      </div>
      <div className={styles.appointmentTime}>
        {`${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`}
      </div>
    </div>
  );
}

export default Appointment;
