import { useState } from "react"
import { useAppSelector } from "../../app/redux/hooks"
import styles from "./Clients.module.css"
import Header from "../../shared/ui/Header/Header"
import ClientCard from "../../shared/ui/ClientCard/ClientCard"


function Clients() {
  const clients = useAppSelector((state) => state.clients);
  const [filter, setFilter] = useState("")

  const filteredClients = clients.filter((client) => {
    return client.name.includes(filter)
  })

  return <div className={styles.clientsPageContent}>
    <Header></Header>
    <hr className={styles.solidDivider} />
    <div className={styles.filter}>
      <input type="text" placeholder="Search client" className={styles.filter__input} value={filter} onChange={(e) => setFilter(e.target.value)}/>
    </div>
    <div className={styles.clients}>
      {filteredClients.map((client) => {
        return <ClientCard name={client.name} key={client.id}/>
      })}
    </div>
  </div>
}

export default Clients