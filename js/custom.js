function toggleCl(el, clName){
	el.classList.toggle(clName);
}

function navController(menuBtn){
	toggleCl(menuBtn, 'change');
	$('.nav').toggleClass('open');
}