import { NavLink } from "react-router-dom";
import { FiBell, FiBarChart2, FiBook, FiCalendar } from "react-icons/fi";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <p className="logoName">CRM</p>
        <span className="logoSubtext">for nailmasters</span>
      </div>
      <div className="linkList">
        <NavLink to=".">
          <FiCalendar />
          <p>Calendar</p>
        </NavLink>
        <NavLink to="/clients">
          <FiBook />
          Clients
        </NavLink>
        <NavLink to="/analytics">
          <FiBarChart2 />
          Analytics
        </NavLink>
        <NavLink to="/notifications">
          <FiBell />
          Notifications
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
