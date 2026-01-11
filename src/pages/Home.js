import SectionCard from "../components/SectionCard";
import contactImage from "../img/contact.jpg";
import subjectImage from "../img/subjects.jpg";
import methodologyImage from "../img/methodology.jpg";
import examsImage from "../img/exams.jpg";
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
          text="Next Civil Service Exam: Vampires Ambassador - March 15, 2026"
          buttonText="Exams"
          buttonLink="/CivilServiceExams"
        />
      </div>
      <div className="card-group m-4">
        <SectionCard
          imageSource={methodologyImage}
          imageDescription="Poisoned apple"
          title="Our Methodology"
          text="At Screamford Academy, we believe that learning should be an exciting and engaging experience. Our methodology combines theoretical knowledge with practical application, ensuring that students not only understand the concepts but also know how to apply them in real-world scenarios."
          link="/methodology"
        />
        <SectionCard
          imageSource={subjectImage}
          imageDescription="Hacker"
          title="Subjects We Offer"
          text="We offer a wide range of subjects tailored to prepare students for civil service exams. From Public Administration to Law and Ethics, our curriculum is designed to cover all essential topics comprehensively."
          link="/subjects"
        />
        <SectionCard
          imageSource={examsImage}
          imageDescription="Haunted house ghost"
          title="Civil Service Exams"
          text="Preparing for civil service exams can be challenging, but with Screamford Academy, you're in good hands. Our expert instructors and comprehensive study materials will guide you every step of the way."
          link="/civilserviceexams"
        />
        <SectionCard
          imageSource={contactImage}
          imageDescription="Raven"
          title="Get in Touch"
          text="Have questions or need more information? Our friendly support team is here to help. Contact us today to learn more about our programs and how we can assist you in achieving your career goals."
          link="/contact"
        />
      </div>
    </div>
  );
}
