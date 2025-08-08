import { useState } from "react";
import { useAppDispatch } from "../../app/redux/hooks";
import DatePicker from "react-datepicker";
import styles from "./Modal.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { addEvent } from "../../shared/ui/redux/eventSlice";

interface IProps {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Modal({ isOpen, setIsOpen }: IProps) {
  const dispatch = useAppDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [clientName, setClientName] = useState<string>("");
  const [appointmentDesc, setAppointmentDesc] = useState<string>("");
  const [clientInst, setClientInst] = useState<string>("");

  function onSubmitHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch(addEvent({ title: clientName, start: selectedDate }));
    setIsOpen(false)
  }

  return (
    <>
      {isOpen ? (
        <form action="" className={styles.formBox}>
          <div className={styles.formBoxBody}>
            <div className={styles.clientInfo}>
              <label htmlFor="">Name:</label>
              <input
                type="text"
                placeholder="Enter client name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </div>
            <div className={styles.clientInfo}>
              <label htmlFor="">Inst:</label>
              <input
                type="text"
                placeholder="Enter client inst"
                value={clientInst}
                onChange={(e) => setClientInst(e.target.value)}
              />
            </div>
            <div className={styles.clientInfo}>
              <label htmlFor="">Notes:</label>
              <input
                type="text"
                placeholder=""
                value={appointmentDesc}
                onChange={(e) => setAppointmentDesc(e.target.value)}
              />
            </div>
            <div className={styles.clientInfo}>
              <label htmlFor="">Date:</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date!);
                }}
                showTimeSelect
              />
            </div>
          </div>

          <button onClick={onSubmitHandler} className={styles.sendClientInfo}>
            Add
          </button>
        </form>
      ) : (
        ""
      )}
    </>
  );
}

export default Modal;
