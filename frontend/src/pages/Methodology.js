import Banner from "../components/Banner";
import ScheduleTable from "../components/ScheduleTable";

export default function Methodology() {
  return (
    <div className="container my-5">
        <h1>Our Methodology</h1>
        <p>
        At Screamford Academy, we believe that learning should be an exciting and engaging experience. Our methodology combines theoretical knowledge with practical application, ensuring that students not only understand the concepts but also know how to apply them in real-world scenarios.
        </p>
           <Banner
                  text="No discrimination policy: even the cutest creatures are welcome!"
                  buttonText="Join the Dark Side"
                  buttonLink="/Contact"
                />
          <p><strong>Our curriculum is designed to be comprehensive and interdisciplinary, covering a wide range of subjects that are essential for a successful career in the world of horror and evil.</strong></p>
          <p>From the art of emotional manipulation to the science of nightmare creation, our courses are tailored to equip students with the skills and knowledge they need to excel in their chosen fields. We also emphasize the importance of creativity and innovation, encouraging students to think outside the box and develop their unique approaches to problem-solving.</p>  
          <p>In addition to our rigorous academic program, we also offer a variety of extracurricular activities and opportunities for hands-on experience. Our students have access to state-of-the-art facilities, including our haunted house laboratory and our dark arts workshop, where they can put their skills to the test and gain practical experience in a safe and supportive environment.</p>
          <p>You can find below the schedule of our courses during the first semester:</p>

        <ScheduleTable 
        Subject1="Emotional Manipulation"
        Subject2="Evil Plan Speech"
        Subject3="Geopolitcs of Horror"
        Subject4="Psychology of the Hero: Getting to Know your Enemy"
        Subject5="Hacking 101"
        Subject6="Nightmare Creation"
        Subject7="Evil Laughter Workshop"
        Subject8="Style and Mannerisms: Dress to Impress"/>
    </div>
    );
}
























