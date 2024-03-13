let capaUno = document.querySelector(".capa-uno");
let capaDos = document.querySelector(".capa-dos");
let backcapa = document.querySelector(".back-capa");
let h2Frace= document.querySelector(".frace");

window.addEventListener("scroll",()=>{
	let value = window.scrollY ;

	capaUno.style.marginLeft = value * .05 + `px`;
	capaDos.style.marginLeft = value * -.04 + `px`;
	backcapa.style.marginLeft = value * -.04 +`px`;
	h2Frace.style.marginTop = value * .052 + `px`;
})
