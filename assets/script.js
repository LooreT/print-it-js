
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

// LEFT *********************************
// SELECTION 

const arrow_left = document.querySelector("#banner .arrow_left");
// EVENT LISTENERS 
arrow_left.addEventListener("click", () => {
	if (position == 0) {
		position = slides.length - 1;
		dots[0].setAttribute("class", "dot");
	} else {
		position -= 1;
		dots[position + 1].setAttribute("class", "dot");
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
		position += 1;
		dots[position - 1].setAttribute("class", "dot");
	}
	console.log(position);
	dots[position].setAttribute("class", "dot dot_selected");
	// image
	imageBanniere.setAttribute("src", "./assets/images/slideshow/" + slides[position].image);

	// tagLine
	tagline.innerHTML = slides[position].tagLine;


	// if (position == 1) {
	// console.log("position = 1")
	// 	dot2.setAttribute("class","dot dot_selected");
	// 	dot1.setAttribute("class","dot");
	// 	dots[position].setAttribute("class","dot dot_selected");
	// 	dots[position-1].setAttribute("class","dot");
	// } else {
	// }
});


let imageBanniere = document.querySelector(".banner-img");
let tagline = document.querySelector("#banner p")


// CREATION DOTS
// parent
let dotsHTML = document.querySelector("#banner .dots");

let position = 0

// boucle
for (x = 0; x < slides.length; x++) {
	let newDot = document.createElement("div");
	newDot.setAttribute("class", "dot");
	newDot.setAttribute("id", "dot" + x);
	dotsHTML.appendChild(newDot);
}


// selec
let dot0 = document.getElementById("dot0");

let dot1 = document.getElementById("dot1");

let dot2 = document.getElementById("dot2");

let dot3 = document.getElementById("dot3");
// list
let dots = [dot0, dot1, dot2, dot3];
dot0.setAttribute("class", "dot dot_selected");

// creation tableau
// const tableau


for (const x = 0; x < slides.length; x++) {
	let dot = document.getElementById("dot" + x);
// Mettre dot dans tableau créé (push) + 
// faire ligne 116
}

