import AcademyROImage from '../img/academy.jpg';
import AcademyUKImage from '../img/british-campus.jpg';
import Button from '../components/Button';

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
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>   
                <input type="text" className="form-control" id="name" required />
            </div>  
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" required></textarea>
            </div>
            <Button text="Submit" link="#" />
        </form>
    </div>
</div>
)}