import SectionCard from "../components/SectionCard";
export default function CivilServiceExams() {
    return (
        <div className="civil-service-exams-page">
            <h2>Civil Service Exams</h2>  
            <p>Preparing for civil service exams can be challenging, but with Screamford Academy, you're in good hands. Our expert instructors and comprehensive study materials will guide you every step of the way.</p>
            <p>We offer specialized courses tailored to help you succeed in various civil service examinations. Our curriculum is designed to cover all essential topics comprehensively, ensuring that you are well-prepared for the exam day.</p>
            <p>Join us at Screamford Academy and take the first step towards a successful career in civil service!</p>
       
        <SectionCard
        title="Narcissism Teacher"
        text="If loving yourself and nobody else is your passion, this is the job for you!"
        horizontal={true}/>
          <SectionCard
        title="Haunted House Ghost"
        text="The perfect role for those who love the countryside and are scared of people. We can relate."
        horizontal={true}/>
            <SectionCard
        title="Vampire Ambassador"
        text="If you love travelling, learning about new cultures and tasting the blood gastronomy all around, do not hesitate.
         Eternal life is too long to stay in one place."
        horizontal={true}/>
        <SectionCard
        title="Parsel Tongue Interpreter"
        text="Your parents were always ashamed of you because you were more interested in languages than evil?
         Now you can have both. Serve the dark side by interpreting for our reptile friends."
        horizontal={true}/>
         <SectionCard
        title="Public Servant for the Ministry of Mischief"
        text="Evil is a team effort. Join our Ministry of Mischief and help us make the world a(n even) darker place."
        horizontal={true}/>
        
         </div>
    );
}          
