const header = document.querySelector('.header');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const cover = document.querySelector('.cover');
const mobileMenu = document.querySelector('.mobile-menu');
const identity = document.getElementById('who-we-are');
const rafaela = document.getElementById('rafaela-big-card');
const pointe = document.getElementById('pointe-card');
const formular = document.getElementById('formular-five-card');
const nice = document.getElementById('nice-card');
const pet = document.getElementById('pet-card');

menu.addEventListener('click', function(){
	if(header.classList.contains('open')) {
		header.classList.remove('open');
		cover.classList.remove('overlay');
		cover.classList.add('fade-out');
		cover.classList.remove('fade-in');
		mobileMenu.classList.add('show');
		mobileMenu.classList.remove('fade-in');
		mobileMenu.classList.add('fade-out');
		body.classList.remove('no-scroll');
	}

	else {header.classList.add('open');
		  cover.classList.add('overlay');
		  cover.classList.add('fade-in');
		  cover.classList.remove('fade-out');
		  mobileMenu.classList.remove('show');
		  mobileMenu.classList.add('fade-in');
		  mobileMenu.classList.remove('fade-out');
		  body.classList.add('no-scroll');
		  }
})

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function openRafaela(){
	if (rafaela.style.display === "none"){
		rafaela.style.display = "block";
	}

	else{
		rafaela.style.display = "none";
	}
}

function openFormularFive(){
	if (formular.style.display === "none"){
		formular.style.display = "block";
	}

	else{
		formular.style.display = "none";
	}
}

function openPointe(){
	if (pointe.style.display === "none"){
		pointe.style.display = "block";
	}

	else{
		pointe.style.display = "none";
	}
}

function openNice(){
	if (nice.style.display === "none"){
		nice.style.display = "block";
	}

	else{
		nice.style.display = "none";
	}
}

function openPet(){
	if (pet.style.display === "none"){
		pet.style.display = "block";
	}

	else{
		pet.style.display = "none";
	}
}

