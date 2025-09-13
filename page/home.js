import carousel from '../style/carousel.js'
function home(){
	document.getElementById('app').innerHTML=
	`<div class="container">	
		<div class="content">
			fauzi
		</div>
		<div class="pict">
			<img src="./profil.jpg" alt="img">
		</div>
	</div>
	<section>
		<div class="wrapper">
			<div class="wrap">
				<h1>sedikit tentang saya</h1>
				
					<img src="./music.jpg" alt="img">
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
  carousel();
}
export default home;