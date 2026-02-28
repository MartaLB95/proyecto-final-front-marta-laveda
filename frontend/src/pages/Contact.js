import AcademyROImage from '../img/academy.jpg';
import AcademyUKImage from '../img/british-campus.jpg';
import ContactForm from '../components/ContactForm';
import SectionCard from '../components/SectionCard';

export default function Contact() {
    return(
        <div className="container my-5">
    <h1>Contact Us</h1>
    <div className="d-flex flex-wrap justify-content-center gap-4 my-5">
  <SectionCard
    title="Transylvania Campus"
    text="123 Strada Terorii, Transylvania, 750001, Romania"
    imageSource={AcademyROImage}
    imageDescription="Screamford Academy Transylvania Campus"
    horizontal={false}
    hideButton={true}
  />
  <SectionCard
    title="London Campus"
    text="456 Haunted Road, London, UK SW1A 1AA"
    imageSource={AcademyUKImage}
    imageDescription="Screamford Academy London Campus"
    horizontal={false}
    hideButton={true}
  />
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