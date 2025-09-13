// import carousel from '../style/carousel.js'
function home(){
	document.getElementById('app').innerHTML=
	`<div class="container">	
		<div class="d_flex position_relative left_10P top_40P font-size_5rem">
			fauzi
		</div>
		<div class="left_60P w_230px h240px t_0px">
			<img src="../image/profil.jpg" alt="img">
		</div>
	</div>
	<section>
		<div class="d_flex justify-content_center">
			<div class="w_70P">
				<h1>sedikit tentang saya</h1>
				
					<img src="./image/music.jpg" alt="img">
					<p>
						Saya senang mempelajari apapun, dan saya suka sekali dengan musik.
						Banyak hal yang bisa saya pelajari dari kehidupan ini, mungkin pengalaman kamu juga bisa menjadi inspirasi dan pelajaran buat saya.
						Kamu bisa mengenal lebih bsnyak tentang saya melalui website ini dengan membaca artikel tentang saya di <a href="/about">sini</a>
						atau melaui akun sosmed saya.
					</p>
				</div>
		</div>	
	</section>`
	document.querySelector('title').innerHTML='Home';
  // carousel();
}
export default home;