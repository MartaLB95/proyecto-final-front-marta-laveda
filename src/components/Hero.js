import academyPic from '../img/academy.jpg';
import forestPic from '../img/forest.jpg';
import coatOfArmsPic from '../img/screamford-coat-of-arms.png';

export default function Hero(){
    return(
        <div id="carouselHome" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={academyPic} class="d-block w-100" alt="One of the academy buildings"/>
    </div>
    <div class="carousel-item">
      <img src={forestPic} class="d-block w-100" alt="The forest surrounding our campus in Transilvania"/>
    </div>
    <div class="carousel-item">
      <img src={coatOfArmsPic} class="d-block w-100" alt="The coat of arms of Screamford Academy"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}