import { FiBell } from "react-icons/fi";
import userProfileImg from "../../../assets/images/5465321609461101185.jpg";
import "./Header.css";

function Header() {
  const time = new Date();
  let greet: string;

  if (time.getHours() >= 12 || time.getHours() <= 18) {
    greet = "Good afternoon, Miron!";
  } else if (time.getHours() >= 18 || time.getHours() <= 24) {
    greet = "Good evening, Miron!";
  } else {
    greet = "Good night, Miron!";
  }

  return (
    <header>
      <p>{greet}</p>
      <div className="userInfo">
        <div className="userInfoNotification">
          <FiBell style={{marginTop: "10px"}}/>
        </div>
        <div className="userInfoImage">
          <img src={userProfileImg} alt="user-profile-image" />
        </div>

      </div>
    </header>
  );
}

export default Header;
