import { useState } from "react";
import { useAppDispatch } from "../../app/redux/hooks";
import { nanoid } from "nanoid";
import DatePicker from "react-datepicker";
import styles from "./Modal.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { addEvent } from "../../shared/redux/eventSlice";
import Procedure from "./Procedure/Prodecure";
import closeIcon from "/images/close.svg"

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ isOpen, setIsOpen }: IProps) {
  const dispatch = useAppDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [clientName, setClientName] = useState<string>("");
  const [appointmentNotes, setAppointmentNotes] = useState<string>("");
  const [clientInst, setClientInst] = useState<string>("");
  const [procedure, setProcedure] = useState<string>("");

  function onSubmitPreventDefault(e: React.MouseEvent<HTMLFormElement, MouseEvent>) {
    e.preventDefault();
  }

  function onSubmitForm() {
    dispatch(
      addEvent({
        id: nanoid(),
        title: clientName,
        start: selectedDate,
        inst: clientInst,
        procedure: procedure,
        notes: appointmentNotes,
      })
    );
    setIsOpen(false);
    setClientInst("");
    setClientName("");
    setAppointmentNotes("");
    setSelectedDate(new Date());
    setProcedure("")
  }

  return (
    <>
      {isOpen ? (
        <form action="" className={styles.formBox} onSubmit={onSubmitPreventDefault}>
          
          <div className={styles.formBoxBody}>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
              <img src={closeIcon} alt="" />
            </button>
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
                value={appointmentNotes}
                onChange={(e) => setAppointmentNotes(e.target.value)}
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
                dateFormat="Pp"
              />
            </div>
            <Procedure procedure={procedure} setProcedure={setProcedure} />
          </div>

          <button onClick={onSubmitForm} className={styles.sendClientInfo}>
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
