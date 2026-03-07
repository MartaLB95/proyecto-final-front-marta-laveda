import academyPic from "../img/academy.jpg";
import forestPic from "../img/forest.jpg";
import coatOfArmsPic from "../img/screamford-coat-of-arms.png";

export default function Hero() {
  return (
    <div id="carouselHome" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={academyPic}
            className="fullscreen-image"
            alt="One of the academy buildings"
          />
          <div id="overlay-content">
            <img src={coatOfArmsPic} alt="Coat of arms" id="coat-overlay" />
            <h2>Screamford Academy</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={forestPic}
            className="fullscreen-image"
            alt="The forest surrounding our campus in Transilvania"
          />
          <div id="overlay-content-forest">
            <img
              src={coatOfArmsPic}
              alt="Coat of arms"
              id="coat-overlay-forest"
            />
            <h2>Screamford Academy</h2>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselHome"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselHome"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
