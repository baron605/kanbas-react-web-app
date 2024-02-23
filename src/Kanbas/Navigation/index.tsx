import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaDesktop, FaArrowAltCircleRight, FaQuestionCircle } from "react-icons/fa";
import logo from "./logo.png";

function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
    { label: "History",  icon: <FaClock className="fs-2" /> },
    { label: "Studio",  icon: <FaDesktop className="fs-2" /> },
    { label: "Commons",  icon: <FaArrowAltCircleRight className="fs-2" /> },
    { label: "Help",  icon: <FaQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation list-group">
        <img src={logo} className="list-group-item p-0" alt="logo" />
      {links.map((link, index) => (
        <Link 
        key={index} 
        to={`/Kanbas/${link.label}`}
        className={`list-group-item text-center  ${pathname.includes(link.label) && "active"}`}>
<div className="link-icon">{link.icon}</div>
			<div className="link-name">{link.label}</div>        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;