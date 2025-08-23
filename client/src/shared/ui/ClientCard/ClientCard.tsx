import styles from "./ClientCard.module.css"

function ClientCard({name} : {name: string}) {
  return <div className={styles.clientCard}>
    <h2>{name}</h2>
  </div>
}

export default ClientCard