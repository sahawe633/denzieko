import services from '../privat/define.js'
let pricingtext=""
services.forEach(service=>{
  pricingtext += `<div class="card">
  <div class="row">
    <div class="col">
      <img src="image/${service.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col">
      <div class="card-body">
        <h5 class="card-title">${service.title}</h5>
        <p class="card-text"><small>Rp ${service.price}</small></p>
        <p class="card-text">${service.description}</p>
      </div>
    </div>
  </div>
</div>`
});

export default function service(){
	document.getElementById('app').innerHTML=
	`<section class="p-5">
    <div class="pricing">
    ${pricingtext}
    </div>
  </section>`
}