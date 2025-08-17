import { useState } from "react";
import { useAppDispatch } from "../../app/redux/hooks";
import { nanoid } from "nanoid";
import DatePicker from "react-datepicker";
import styles from "./Modal.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { addEvent } from "../../shared/redux/eventSlice";
import Procedure from "./Procedure/Prodecure";
import closeIcon from "/images/close.svg";
import { useAppSelector } from "../../app/redux/hooks";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ isOpen, setIsOpen }: IProps) {
  const clients = useAppSelector((state) => state.clients);
  const dispatch = useAppDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [clientName, setClientName] = useState<string>("");
  const [appointmentNotes, setAppointmentNotes] = useState<string>("");
  const [clientInst, setClientInst] = useState<string>("");
  const [procedure, setProcedure] = useState<string>("");

  async function addEventToDB(client_id: string, title: string) {
    const res = await fetch("http://localhost:3000/db/appointment", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title,
        id: nanoid(),
        date: selectedDate.toISOString(),
        notes: appointmentNotes,
        procedure,
        client_id,
      }),
    });
  }

  async function addClientToDB(client_id: string) {
    const res = await fetch("http://localhost:3000/db/client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: client_id,
        name: clientName,
        insta: clientInst,
      }),
    });
  }

  function onSubmitPreventDefault(
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) {
    e.preventDefault();
  }

  function onSubmitForm() {
    let isClientInDB = false;
    let client_id = ""
    for (let i = 0; i < clients.length; ++i) {
      if (clients[i].name === clientName) {
        isClientInDB = true;
        client_id = clients[i].id;
        break;
      }
    }

    if (isClientInDB) {
      console.log("yes");
      addEventToDB(client_id, clientName)
      dispatch(
        addEvent({
          title: clientName,
          id: nanoid(),
          date: selectedDate,
          procedure: procedure,
          notes: appointmentNotes,
          client_id,
        })
      );
    } else {
      console.log("no");
      const client_id = nanoid()
      addClientToDB(client_id)
      addEventToDB(client_id, clientName)
      dispatch(
        addEvent({
          title: clientName,
          id: nanoid(),
          date: selectedDate,
          procedure: procedure,
          notes: appointmentNotes,
          client_id: client_id,
        })
      );
    }

    setIsOpen(false);
    setClientInst("");
    setClientName("");
    setAppointmentNotes("");
    setSelectedDate(new Date());
    setProcedure("");
  }

  return (
    <>
      {isOpen ? (
        <form
          action=""
          className={styles.formBox}
          onSubmit={onSubmitPreventDefault}
        >
          <div className={styles.formBoxBody}>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
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
