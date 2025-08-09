import { useState } from "react"
import styles from "./Procedure.module.css"
import arrow from "/images/arrow.svg"

function Procedure() {
  const [procedure, setProcedure] = useState<string>("Procedure")
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function onArrowButtobClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setIsOpen((prev) => !prev)
  }

  function onListClick(e: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    setProcedure((e.target as HTMLLIElement).textContent)
    setIsOpen(false)
  }

  return <div className={styles.procedureInfo}>
    <label htmlFor="">Procedure:</label>
    <div className={styles.procedure}>
      <p className={styles.procedureTitle}>{procedure}</p>
      <button className={styles.arrowButton} onClick={onArrowButtobClick} type="button">
        <img src={arrow} alt="arrow-down" className={`${styles.arrowIcon} ${isOpen ? styles.active : ""}`}/>
      </button>
      {isOpen ? (<div className={styles.procedureTypes}>
        <ul onClick={onListClick}>
          <li>Extension</li>
          <li>Gel</li>
          <li>Correction</li>
          <li>Coating</li>
          <li>Design</li>
        </ul>
      </div>) : null}
    </div>
    
  </div>
}

export default Procedure