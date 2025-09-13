export default function about(){
document.getElementById('app').innerHTML= `
<section>
<div class="container about" id="about">
	<div class=" row about">
			<img src="../image/profil.jpeg" class="" alt="fauzi">
			<div class="about">
			<h1 >Fauzi Anwar</h1>
			<h6>programer|web depelover|game depelover| freelancer</h6><hr>
			<p>Programer otodidak yang terus mengasah kemampuan</p></p>
			</div>
	</div>
	<article><hr><hr>
		<div class="row ">
			<div class="col">
				<p>Kemampuan</p><hr><br><br>
			<p>Bahasa Pemrograman : HTML,CSS,Javascript,Node js,Java,C,C#,C++,Python</p>	
			<p>Framework : Bootstap,React,Express,Next,Vue,Astro</p>	
			</div>
			<div class="col">
				<p>Pengalaman</p><hr>
				<p>Membuat tempalate website,Membuat game untuk sendiri</p>
			</div>
		</div>
	</article>
</div>
</section>`
}