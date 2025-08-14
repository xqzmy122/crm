import { useState } from "react";
import userProfileImg from "../../../assets/images/5465321609461101185.jpg";
import plusIcon from "/images/plus.svg";
import notificationIcon from "/images/notification.svg";
import Modal from "../../../widgets/Modal/Modal";
import styles from "./Header.module.css";


function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const time = new Date();
  let greet: string;

  if (time.getHours() >= 12 && time.getHours() <= 18) {
    greet = "Good afternoon, Miron!";
  } else if (time.getHours() >= 18 && time.getHours() <= 24) {
    greet = "Good evening, Miron!";
  } else {
    greet = "Good night, Miron!";
  }

  const handleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <header className={styles.header}>
      <p>{greet}</p>
      <div className={styles.userInfo}>
        <button className={styles.plusButton} onClick={handleModal}>
          <img src={plusIcon} alt="" className={styles.plusButtonIcon} />
        </button>

        <div className={styles.userInfoNotification}>
          <button>
            <img
              src={notificationIcon}
              alt=""
              className={styles.notificationButton}
            />
          </button>
        </div>
        <div className={styles.userInfoImage}>
          <img src={userProfileImg} alt="user-profile-image" />
        </div>
      </div>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
      
    </header>
    
  );
}

export default Header;
