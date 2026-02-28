import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';

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
          <div className="col-auto mb-3 mb-md-0">
            <span className="nav-item">© 2026 Screamford Academy</span>
          </div>
          <div className="col-auto mb-3 mb-md-0">
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
          <div className="col-auto mb-3 mb-md-0">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.linkedin.com">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" color="white"/>LinkedIn
                </a></li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.instagram.com">
                  <FontAwesomeIcon icon={faInstagram} size="lg" color="white"/>Instagram
                </a></li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.facebook.com">
                  <FontAwesomeIcon icon={faFacebookF} size="lg" color="white"/>Facebook
                </a></li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
}
