import SectionCard from "../components/SectionCard";
import EdimburghImage from "../img/edimburgh.jpg";
import ParisImage from "../img/parisian-night.jpg";  
import RomeImage from "../img/roman-building.jpg";
import LaplandImage from "../img/lapland.jpg";
import SalemImage from "../img/salem-witches.jpg";

export default function InternationalMobility() {
  return (
    <div>
      <h1>International Mobility</h1>
      <p>
        Apart from our campus in Transylvania and London, we have partnerships with some of the most terrible universities around the world.
      </p>
        <div className="card-group m-4">
              <SectionCard
                imageSource={EdimburghImage}
                imageDescription="Edimburgh picture by Alex Azabache"
                title="Horror University of Edimburgh"
                text="Located in Scotland, this university will allow you to gain a deeper understanding the history of ghosts and spirits, as well as practical experience in haunting techniques."
                link="/contact"
              />
              <SectionCard
                imageSource={ParisImage}
                imageDescription="Louvre picture by Michael Fousert"
                title="Université Paris Terreur XIII"
                text="The perfect place to study the history and culture of French monsters, as well as their impact on society."
                link="/contact"
              />
              <SectionCard
                imageSource={RomeImage}
                imageDescription="Roman building picture by Chad Greiter"
                title="Academia degli Studi Spaventosi di Roma"
                text="Join this Italian institution for a year and specialize in mythological creature studies or spell casting in Latin."
                link="/contact"
              />
              <SectionCard
                imageSource={LaplandImage}
                imageDescription="Lapland sky picture by Vincent Guth"
                title="Dark Arts Academy of Lapland"
                text="Why Lapland? Perfect destinations for vampires running away from the sun! But more importantly, get to know the team that, every year, is able to stop Santa from delivering presents to all the well-behaved children."
                link="/contact"
              />
              <SectionCard
                imageSource={SalemImage}
                imageDescription="Witches picture by Sierra Koder"
                title="Salem School of the Supernatural"
                text="Located in Massachusetts, this school offers a unique opportunity to study witchcraft and other supernatural phenomena in a historical context."
                link="/contact"
              />
    </div>
    </div>
  );
}