// Header Burger Menu
let headerBurger = document.querySelector(".header__burger");
let headerNav = document.querySelector(".header__content nav")
let openHeroModalBtn = document.querySelector(".hero #open-modal")

headerBurger.addEventListener("click", () => {
	headerNav.classList.toggle("active")
	headerBurger.classList.toggle("active")
})

headerNav.addEventListener('click', (event) => {
	if (event.target.closest("a")) {
		headerNav.classList.remove("active")
		headerBurger.classList.remove("active")
	}
})


// Header Back Color 

window.addEventListener('scroll', function () {
	let header = document.querySelector('header');

	if (window.scrollY >= 100 * window.innerHeight / 100) {
		openHeroModalBtn.classList.add("fixed")
	} else {
		openHeroModalBtn.classList.remove("fixed")
	}

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


// Form
const _CHAT_ID = "-4225938954"
const _TG_TOKEN_BOT = "7424172170:AAGMGNNUUkw9V4o8Ha6RBnGzVvFe4c1RyOU"
const _TG_URL = `https://api.telegram.org/bot${_TG_TOKEN_BOT}/sendMessage`
let form = document.querySelector(".modal form")
let inps = document.querySelectorAll(".modal form input")
let formMessage = document.querySelector('.modal form p')

async function sendData(message) {
	try {
		return await fetch(_TG_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: _CHAT_ID,
				text: message,
				parse_mode: "html"
			}),
		})
	} catch (error) {
		return error
	}
}

form.addEventListener("submit", (event) => {
	event.preventDefault()

	let message = `Заявка з сайту!\n\nІмя: ${inps[0].value}\nПошта: ${inps[1].value}\nТел: ${inps[2].value}`
	sendData(message).then(() => {
		formMessage.innerHTML = "Ihre Bewerbung wurde angenommen. Wir werden Sie in Kürze kontaktieren"
		setTimeout(() => {
			formMessage.innerHTML = ""
			modal.classList.remove("active")
		}, 3000)
	})
})
