import carousel from '../style/carousel.js'
function home(){
	document.getElementById('app').innerHTML=
	`<section>
  <div class="jumbotron ">
  	<div class="tagline">
  		<h1>
Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Minima dolor similique ab?</h1>
  	</div>
  </div>
</section>
<section>
   <div class="carousel">
    <div class="carousel-inner">
      <div class="carousel-item left"></div>
      <div class="carousel-item mid"></div>
      <div class="carousel-item right"></div>
    </div>
  </div>
</section>
<section class=" home-about">
  <div class="row ">
    <div class="col">
  		<img src="image/rias-makeup-7.png" alt="photo">
    </div>
    <div class="col ">
    	<p>
    	itaque fuga dicta autem quam rem nulla Similique, quis delectus voluptatibus aliquam consequatur ullam reiciendis, beatae accusantium est, dolorum repudiandae totam tenetur. Quo, autem? Totam, dolorem porro commodi architecto, itaque ex aut sequi! Eligendi ipsam eum accusantium nulla nostrum repellendus sapiente possimus odio incidunt! Laboriosam sint laudantium ducimus velit repudiandae. Error, itaque, soluta?
      </p>
    </div>
  </div>
</section>
`
	document.querySelector('title').innerHTML='Home';
  carousel();
}
export default home;