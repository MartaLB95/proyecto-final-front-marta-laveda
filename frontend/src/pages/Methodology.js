import Banner from "../components/Banner";
import ScheduleTable from "../components/ScheduleTable";

export default function Methodology() {
  return (
    <div>
    <div className="container my-5">
        <h1>Our Methodology</h1>
        <p>
        Following our moto, <span className="bold-quote">"Oderint dum metuant"</span> meaning "let them hate, as long as they fear", we have developed a unique and innovative approach to education that is designed to prepare our students for the challenges and opportunities of the modern world. Our methodology is based on the principles of experiential learning, critical thinking, and creativity, and it is designed to foster a deep understanding of the subjects we teach while also encouraging our students to think outside the box and develop their own unique perspectives.
        </p>
        <p>At Screamford Academy, we believe that learning should be an exciting and engaging experience. Our methodology combines theoretical knowledge with practical application, ensuring that students not only understand the concepts but also know how to apply them in real-world scenarios.
        </p>
    </div>
           <Banner
                  text="No discrimination policy: even the cutest creatures are welcome!"
                  buttonText="Join the Dark Side"
                  buttonLink="/Contact"
                />
    <div className="container my-5">
          <p>Our curriculum is designed to be comprehensive and interdisciplinary, covering a wide range of subjects that are essential for a successful career in the world of horror and evil.</p>
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
    </div>
    );
}
























