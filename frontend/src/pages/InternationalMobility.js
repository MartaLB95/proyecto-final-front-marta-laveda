import SectionCard from "../components/SectionCard";
import EdimburghImage from "../img/edimburgh.jpg";
import ParisImage from "../img/parisian-night.jpg";  
import RomeImage from "../img/roman-building.jpg";
import LaplandImage from "../img/lapland.jpg";
import SalemImage from "../img/salem.jpg";

export default function InternationalMobility() {
  return (
    <div className="container my-5">
      <h1>International Mobility</h1>
      <p>
        Apart from our campus in Transylvania and London, we have partnerships with some of the most terrible universities around the world.
      </p>
        <div className="card-group m-4">
              <SectionCard
                imageSource={EdimburghImage}
                imageDescription="Edimburgh picture by Alex Azabache"
                title="Horror University of Edimburgh"
                text="Located in Scotland, this university offers a deeper understanding of ghost history and spirits, with practical experience in haunting techniques and poltergeist management."
                buttonText="Contact Us"
                link="/contact"
              />
              <SectionCard
                imageSource={ParisImage}
                imageDescription="Louvre picture by Michael Fousert"
                title="Université Paris Terreur XIII"
                text="The perfect place to study the history and culture of French monsters, their impact on society, and the dark arts of Parisian curse-weaving."
                buttonText="Contact Us"
                link="/contact"
              />
              <SectionCard
                imageSource={RomeImage}
                imageDescription="Roman building picture by Chad Greiter"
                title="Academia degli Studi Spaventosi di Roma"
                text="Join this Italian institution for a year and specialize in mythological creature studies, ancient spell casting in Latin, and the lost rituals of the Roman underworld."
                buttonText="Contact Us"
                link="/contact"
              />
              <SectionCard
                imageSource={LaplandImage}
                imageDescription="Lapland sky picture by Luna Pisani"
                title="Dark Arts Academy of Lapland"
                text="The perfect destination for vampires fleeing the sun. Join the legendary team that, every year, ensures Santa never delivers presents to well-behaved children worldwide."
                buttonText="Contact Us"
                link="/contact"
              />
              <SectionCard
                imageSource={SalemImage}
                imageDescription="Witch picture by Eric Mclean"
                title="Salem School of the Supernatural"
                text="Located in Massachusetts, this school offers a unique opportunity to study witchcraft and supernatural phenomena, rooted in one of history's most infamous dark legacies."
                buttonText="Contact Us"
                link="/contact"
              />
    </div>
    </div>
  );
}