import logo from "../img/screamford-logo.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useState(null);
  const [villainName, setVillainName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  const stored = localStorage.getItem("user");
  if (stored) {
    try {
      const parsedUser = JSON.parse(stored);
      setUser(parsedUser);
    } catch (error) {
      console.error("Invalid user in localStorage");
      localStorage.removeItem("user"); // limpia dato antiguo
    }
  }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setVillainName(null);
    navigate("/login"); // redirect to login page after logout
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top bg-dark border-bottom border-body"
      data-bs-theme="dark"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <div className="container-fluid" style={{ display: "flex", gap: "1rem" }}>
        <a className="navbar-brand" href="./">
          <img
            src={logo}
            alt="Logo Screamford Academy"
            width="50"
            height="50"
          ></img>
        </a>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="./">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./Methodology">
              Methodology
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./CivilServiceExams">
              Civil Service Exams
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./Subjects">
              Subjects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./InternationalMobility">
              International Mobility
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./Contact">
              Contact Us
            </a>
          </li>
            <li className="nav-item">
            <a className="nav-link" href="./SignUp">
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            {user ? (
              <a className="nav-link" href="#" onClick={handleLogout}>
                Logout
              </a>
            ) : (
              <>
                <a className="nav-link" href="./LogIn">
                  Log In
                </a>
              </>
            )}
          </li>
        </ul>
        <div className="navbar-user">
          {user && <span>Welcome, {user.villainName || user.name}</span>}
        </div>
      </div>
    </nav>
  );
}
