import testimonies from '../privat/testy.js'
let servicestext = ""
testimonies.forEach(testi=>{
		servicestext += `<div class="row p_1rem position_relative fs_large Mw_42P flex-wrap_wrap">

			<div class="col Mw_25P mr_2rem ml_1rem mb_1rem">
				<img src="image/${testi.image}" alt="" class="Sh_50P Sw_50P Mw_100P Mh_100P" style="border-radius:50%">
				</div>
			<div class="col Mw_50P Mh_25P position_absolute Smr_1rem Stop_41P  Mtop_25P right_0">
				<h2>${testi.name}</h2>
				<span>Service : ${testi.service}</span>
				</div>
			<div class="col Mw_100rem Mh_7rem Sh_10rem  Mbottom_-75px  Mr_33P">
				<span>Testimony : </span>
				<p class="text-indent_50px overflow_hidden text-overflow_ellipsis mt_1rem Mw_100P"> ${testi.testimony}</p>
				<a href="">more...</a>
			</div>
		</div>`
})
export default function testimony(){
	document.getElementById('app').innerHTML= 
	`<div class="features">
		<div class="mb_2rem" ><h1 class="Mfs_3rem">Testimony</h1></div>
		<div class="Mdisplay_flex flex-wrap_wrap justify-content_space-around">
		${servicestext}
		</div>
	</div>`;
}
