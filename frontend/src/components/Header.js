import logo from "../img/screamford-logo.png";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useState(null);
  const [villainName, setVillainName] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        const parsedUser = JSON.parse(stored);
        setUser(parsedUser);
      } catch (error) {
        console.error("Invalid user in localStorage");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setVillainName(null);
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top bg-dark border-bottom border-body"
      id="mainNav"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="./">
          <img src={logo} alt="Logo Screamford Academy" width="50" height="50" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={isActive("/")} href="./">Home</a>
            </li>
            <li className="nav-item">
              <a className={isActive("/Methodology")} href="./Methodology">Methodology</a>
            </li>
            <li className="nav-item">
              <a className={isActive("/CivilServiceExams")} href="./CivilServiceExams">Civil Service Exams</a>
            </li>
            <li className="nav-item">
              <a className={isActive("/Subjects")} href="./Subjects">Subjects</a>
            </li>
            <li className="nav-item">
              <a className={isActive("/InternationalMobility")} href="./InternationalMobility">International Mobility</a>
            </li>
            <li className="nav-item">
              <a className={isActive("/Contact")} href="./Contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className={isActive("/SignUp")} href="./SignUp">Sign Up</a>
            </li>
            <li className="nav-item">
              {user ? (
                <a className="nav-link" href="#" onClick={handleLogout}>Logout</a>
              ) : (
                <a className={isActive("/LogIn")} href="./LogIn">Log In</a>
              )}
            </li>
          </ul>
          <div className="navbar-user">
            {user && <span className="welcome-span">Welcome, {user.villainName || user.name}</span>}
          </div>
        </div>
      </div>
    </nav>
  );
}