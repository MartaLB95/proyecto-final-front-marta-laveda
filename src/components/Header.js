import logo from '../img/screamford-logo.png';

export default function Header() {
    return (
<nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="./Home"><img src={logo} alt="Logo Screamford Academy" width="80" height="0"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./Methodology">Methodology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./CivilServiceExams">Civil Service Exams</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="./Subjects">Subjects</a>
        </li>
          <li className="nav-item">
          <a className="nav-link" href="./LogIn">Log In</a>
        </li>
          <li className="nav-item">
          <a className="nav-link" href="./SignUp">Sign Up</a>
        </li>
      </ul>
      <span className="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
);
}