export default function Footer() {
  return (
    <footer
      className="bg-dark text-center text-white mt-5 p-3"
      data-bs-theme="dark"
    >
      <nav
        className="navbar navbar-expand-lg sticky-top bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div className="col-md-4 mb-3 ml-0">
            <span>© 2026 Screamford Academy</span>
          </div>
          <div className="col-md-8 mb-3 mb-md-0">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="./TermsAndConditions">
                  Terms and Conditions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./CookiesPolicy">
                  Cookies Policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./PrivacyPolicy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <ul>
                <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
}
