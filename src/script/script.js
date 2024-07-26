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


// Partners

const track = document.querySelector('.owner__partners-track-inner');
const trackWidth = track.scrollWidth;
const trackParent = document.querySelector('.owner__partners-track');
const parentWidth = trackParent.offsetWidth;

document.documentElement.style.setProperty('--track-width', `${trackWidth}px`);


// Counter

// Функція для анімації числа
function animateCounter(element, target) {
	let count = 0;
	const step = () => {
		if (count < target) {
			count += Math.ceil(target / 100); // Крок збільшення
			if (count > target) count = target; // Гарантує, що не перевищить ціль
			element.textContent = count;
			setTimeout(step, Math.ceil(2000 / target)); // Інтервал між кроками
		}
	};
	step();
}

// Функція для запуску анімації при видимості
function handleIntersection(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const countElement = entry.target.querySelector('.count');
			const target = parseInt(entry.target.dataset.target, 10);
			animateCounter(countElement, target);
			observer.unobserve(entry.target); // Зупинити спостереження після анімації
		}
	});
}

// Створення Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
	root: null,
	rootMargin: '0px',
	threshold: 0.5 // Змінюйте за потреби
});

// Спостереження за елементами
document.querySelectorAll('.owner__top-item').forEach(item => {
	observer.observe(item);
});

// Feedbacks

const trackFeedback = document.querySelector('.feedbacks__track-inner');
const trackWidthFeedback = trackFeedback.scrollWidth;
const trackParentFeedback = document.querySelector('.feedbacks__track');
const parentFeedbackWidth = trackParentFeedback.offsetWidth;

document.documentElement.style.setProperty('--feed-width', `${trackWidthFeedback}px`);