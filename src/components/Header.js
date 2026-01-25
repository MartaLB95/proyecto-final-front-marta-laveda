import logo from "../img/screamford-logo.png";

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
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
            <a className="nav-link" href="./LogIn">
              Log In
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./SignUp">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
