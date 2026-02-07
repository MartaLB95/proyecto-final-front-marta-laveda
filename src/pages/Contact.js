import AcademyROImage from '../img/academy.jpg';
import AcademyUKImage from '../img/british-campus.jpg';
import ContactForm from '../components/ContactForm';

export default function Contact() {
    return(
        <div className="container my-5">
    <h1>Contact Us</h1>
    <div>
        <h2>Transylvania Campus</h2>
        <p>123 Strada Terorii</p>
        <p>Transylvania, 750001, Romania</p>
        <img src={AcademyROImage} alt="Screamford Academy Transylvania Campus" style={{maxWidth: '400px', height: 'auto'}} />
    </div>

    <div className="mt-4">
        <h2>London Campus</h2>
        <p>456 Haunted Road</p>
        <p>London, UK SW1A 1AA</p>
        <img src={AcademyUKImage} alt="Screamford Academy London Campus" style={{maxWidth: '400px', height: 'auto'}} />
    </div>
    <div className="mt-4">
        <h2>Contact Information</h2>
        <p>Email: 
            <a href="mailto:screamfordacademy@gmail.com"> screamfordacademy@gmail.com</a>
        </p>
        <p>Phone: +44 20 7946 0958</p>
    </div>
    <div>
        <h2>Contact Form</h2>
        <ContactForm />
    </div>
</div>
)}