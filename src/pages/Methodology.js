import Banner from "../components/Banner";
import ScheduleTable from "../components/ScheduleTable";

export default function Methodology() {
  return (
    <div className="m-4">
        <h1>Our Methodology</h1>
        <p>
        At Screamford Academy, we believe that learning should be an exciting and engaging experience. Our methodology combines theoretical knowledge with practical application, ensuring that students not only understand the concepts but also know how to apply them in real-world scenarios.
        </p>
           <Banner
                  text="No discrimination policy: even the cutest creatures are welcome!"
                  buttonText="Join the Dark Side"
                  buttonLink="/Contact"
                />

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
























