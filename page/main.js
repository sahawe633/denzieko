import home from '/page/home.js'
import about from '/page/about.js'
import contact from '/page/contact.js'
import service from '/page/service.js'
import testimony from '/page/testimony.js'
import services from '../privat/define.js'
import carousel from '../style/carousel.js'
import style from '../style/style.js'
const navLinks = document.querySelectorAll('#navLink ul li a');
function active(page) {
	navLinks.forEach(link=>link.classList.remove("active"));
	document.querySelector(page).classList.add('active')
}
function load(title) {
title?title=title:title='#home'
switch(title){
case '#contact':
contact();
active(title)
break;
case '#about':
about()
active(title)
break;
case '#service':
service()
active(title)
break;
case '#testimony':
testimony();
active(title)
break;
default:
home()
active(title)
}
style()
}
document.addEventListener('DOMContentLoaded',load(location.hash))
navLinks.forEach(link=>{
	link.addEventListener("click",function(){
		document.getElementById('navLink').classList.remove('toggled');
		hamburger();
		window.scrollTo(0,0);
		load(this.hash);
	})
})
const btnToggler = document.getElementById('btn-toggler');
btnToggler.addEventListener('click',()=>{
	document.getElementById('navLink').classList.toggle('toggled');
	hamburger()
})

function hamburger() {
	let hamburger = document.querySelectorAll('.hamburger')
	hamburger[0].classList.toggle('lineTop')
	hamburger[1].classList.toggle('lineMid')
	hamburger[2].classList.toggle('lineBot')
}


function sendMessage() {
	const urlWA=`http://wa.me/6285722922775?text=from : ${phone.value} | email: ${email.value} \n hallo saya ${uname.value}, ${message.value}`
	window.open(urlWA,"_blank")
}