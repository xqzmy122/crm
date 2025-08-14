import styles from "./Clients.module.css"
import Header from "../../shared/ui/Header/Header"

function Clients() {
  return <div className={styles.clientsPageContent}>
    <Header></Header>
    <hr className={styles.solidDivider} />
    <div className={styles.filter}>
      <input type="text" placeholder="Search client" className={styles.filter__input}/>
    </div>
  </div>
}

export default Clients