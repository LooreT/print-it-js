
// variables

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	},
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
];


// CREATION DOTS // parent
// chercher element via class dans banner
let dotsHTML = document.querySelector("#banner .dots");
let position = 0

// boucle
for (x = 0; x < slides.length; x++) {
	// creation div
	let newDot = document.createElement("div");
	newDot.setAttribute("class", "dot");
	newDot.setAttribute("id", "dot" + x);
	// ajout enfant au parent dotshtml
	dotsHTML.appendChild(newDot);
}

// CREATION TABLEAU
let dots = [];

// boucle
for (let x = 0; x < slides.length; x++) {
	let dot = document.getElementById("dot" + x);
	// PUSH TABLEAU
	dots.push(dot);
}

dots[0].setAttribute("class", "dot dot_selected");

// creation image et tagline
let imageBanniere = document.querySelector(".banner-img");
let tagline = document.querySelector("#banner p");



// LEFT *********************************
// SELECTION 

const arrow_left = document.querySelector("#banner .arrow_left");
// EVENT LISTENERS 
arrow_left.addEventListener("click", () => {
	if (position == 0) {
		position = slides.length - 1;
		dots[0].setAttribute("class", "dot");
	} else {
		dots[position].setAttribute("class", "dot");
		position -= 1;
	}
	console.log(position);
	dots[position].setAttribute("class", "dot dot_selected");

	// image
	imageBanniere.setAttribute("src", "./assets/images/slideshow/" + slides[position].image);

	// tagLine
	tagline.innerHTML = slides[position].tagLine;
});



// RIGHT ****************
const arrow_right = document.querySelector("#banner .arrow_right");
// EVENT LISTENERS 
arrow_right.addEventListener("click", () => {
	if (position == slides.length - 1) {
		position = 0;
		dots[slides.length - 1].setAttribute("class", "dot");
	} else {
		dots[position].setAttribute("class", "dot");
		position += 1;
	}
	console.log(position);
	dots[position].setAttribute("class", "dot dot_selected");
	// image
	imageBanniere.setAttribute("src", "./assets/images/slideshow/" + slides[position].image);

	// tagLine
	tagline.innerHTML = slides[position].tagLine;

});

