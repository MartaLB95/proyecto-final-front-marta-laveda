import SectionCard from "../components/SectionCard";
import contactImage from "../img/contact.jpg";
import subjectImage from "../img/subjects.jpg";
import methodologyImage from "../img/methodology.jpg";
import examsImage from "../img/exams.jpg";
import internationalImage from "../img/international-mobility.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Banner
          text="Next Civil Service Exam: Vampires Ambassador - September 15, 2026"
          buttonText="Exams"
          buttonLink="/CivilServiceExams"
        />
      </div>
      <div className="card-group m-4">
        <SectionCard
          imageSource={methodologyImage}
          imageDescription="Poisoned apple"
          title="Our Methodology"
          text="At Screamford Academy, learning should be as thrilling as a midnight ritual. Our methodology combines theoretical knowledge with practical application, ensuring students can summon the right answer in any real-world scenario."
          buttonText="Learn More"
          link="/methodology"
        />
        <SectionCard
          imageSource={subjectImage}
          imageDescription="Hacker"
          title="Subjects We Offer"
          text="We offer a wide range of subjects tailored to prepare students for their professional villain careers, from Emotional Manipulation to Geopolitics of Horror, covering all essential topics with dark academic rigor."
          buttonText="Learn More"
          link="/subjects"
        />
        <SectionCard
          imageSource={examsImage}
          imageDescription="Haunted house ghost"
          title="Civil Service Exams"
          text="Preparing for civil service exams can be daunting, but at Screamford Academy you are in good hands. Our expert instructors and comprehensive study materials will guide you every step of the way."
          buttonText="Learn More"
          link="/civilserviceexams"
        />
        <SectionCard
          imageSource={internationalImage}
          imageDescription="Map by Jakob Braun"
          title="International Mobility"
          text="Screamford Academy offers international mobility programs that allow students to study abroad, gain experience in different countries, and discover the darkest academic institutions in the world."
          buttonText="Learn More"
          link="/internationalmobility"
        />
        <SectionCard
          imageSource={contactImage}
          imageDescription="Raven"
          title="Get in Touch"
          text="Have questions or need more information? Our friendly support team is here to help. Contact us today to learn more about our programs and how we can assist you in achieving your career goals."
          buttonText="Contact Us"
          link="/contact"
        />
      </div>
    </div>
  );
}
