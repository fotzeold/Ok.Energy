// Header Burger Menu

let headerBurger = document.querySelector(".header__burger");
let headerNav = document.querySelector(".header__content nav")

headerBurger.addEventListener("click", () => {
	headerNav.classList.toggle("active")
	headerBurger.classList.toggle("active")
})


// Header Back Color 

window.addEventListener('scroll', function () {
	let header = document.querySelector('header');
	if (window.scrollY > 150) {
		header.classList.remove('header-transparent');
		header.classList.add('header-solid');
	} else {
		header.classList.remove('header-solid');
		header.classList.add('header-transparent');
	}
});

// Modal 

let modal = document.querySelector(".modal")
let openModalBtns = document.querySelectorAll("#open-modal")
let closeModalBtn = document.querySelector(".modal__window-close")

openModalBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		modal.classList.add("active")
	})
})

closeModalBtn.addEventListener('click', () => {
	modal.classList.remove('active')
})


