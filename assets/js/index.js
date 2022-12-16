// keeps last scroll position after reload
document.addEventListener('DOMContentLoaded', function (event) {
	var scrollpos = localStorage.getItem('scrollpos');
	if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function (e) {
	localStorage.setItem('scrollpos', window.scrollY);
};

// add navbar background
var myNav = document.getElementById('mynav');
var menu = document.getElementById('expandMenu');

window.onscroll = function () {
	if (window.scrollY >= 50) {
		myNav.classList.add('navBackground');
		myNav.classList.add('navTransparent');
	} else {
		myNav.classList.add('navTransparent');
		myNav.classList.remove('navBackground');
	}
};

// expand menu click listener to set navbar background
menu.addEventListener('click', function () {
	if (window.scrollY >= 50 || !menu.classList.contains('collapsed')) {
		myNav.classList.add('navBackground');
		myNav.classList.add('navTransparent');
	} else {
		myNav.classList.add('navTransparent');
		myNav.classList.remove('navBackground');
	}
});

// set current active link in navbar
var navLinks = document.querySelectorAll('.nav-link');
var fromTop = 50;

window.addEventListener('scroll', function () {
	navLinks.forEach(function (link) {
		var section = document.querySelector(link.hash);

		if (
			section.offsetTop - fromTop <= window.pageYOffset &&
			section.offsetTop + section.offsetHeight - fromTop > window.pageYOffset
		) {
			link.classList.add('active');
			link.classList.remove('linkBackground');
		} else {
			link.classList.add('linkBackground');
			link.classList.remove('active');
		}
	});
});

// close menu on link click
var navLinks = document.querySelectorAll('.nav-link');
var ham = document.getElementById('ham');

navLinks.forEach(function (link) {
	link.addEventListener('click', function () {
		if (!menu.classList.contains('collapsed')) {
			if (ham.classList.contains('active')) {
				menu.click();

				// update ham active
				ham.classList.remove('active');
			}
		}
	});
});

// close menu on brand click
var brand = document.getElementById('brand');
brand.addEventListener('click', function () {
	if (!menu.classList.contains('collapsed')) {
		if (ham.classList.contains('active')) {
			menu.click();

			// update ham active
			ham.classList.remove('active');
		}
	}
});

// box animations
const ioConfiguration = {
	/**
	 * This rootMargin creates a horizontal line vertically centered
	 * that will help trigger an intersection at that the very point.
	 */
	rootMargin: '0% 0% -30% 0%'

	/**
	 * This is the default so you could remove it.
	 * I just wanted to leave it here to make it more explicit
	 * as this threshold is the only one that works with the above
	 * rootMargin
	 */
	// threshold: 0.3
};

// website box animations
const websiteBoxObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// don't show animation if scrolling up and if not seen yet
		if (entry.boundingClientRect.y < 0 && !entry.isIntersecting) {
		} else {
			if (entry.isIntersecting) {
				entry.target.classList.add('website-box-shown');
			} else {
				entry.target.classList.remove('website-box-shown');
			}
		}
	});
}, ioConfiguration);

const hiddenWebsiteBoxElements = document.querySelectorAll(
	'.website-box-hidden'
);
hiddenWebsiteBoxElements.forEach((el) => websiteBoxObserver.observe(el));

// data storage box animations
const dataStorageBoxObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// don't show animation if scrolling up and if not seen yet
		if (entry.boundingClientRect.y < 0 && !entry.isIntersecting) {
			// remove transition delay
			// entry.target.classList.remove('data-pipelines-box-shown');
		} else {
			if (entry.isIntersecting) {
				entry.target.classList.add('data-storage-box-shown');
			} else {
				entry.target.classList.remove('data-storage-box-shown');
			}
		}
	});
}, ioConfiguration);

const hiddenDataStorageBoxElements = document.querySelectorAll(
	'.data-storage-box-hidden'
);
hiddenDataStorageBoxElements.forEach((el) =>
	dataStorageBoxObserver.observe(el)
);

// data pipelines box animations
const dataPipelinesBoxObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// don't show animation if scrolling up and if not seen yet
		if (entry.boundingClientRect.y < 0 && !entry.isIntersecting) {
			// remove transition delay
			// entry.target.classList.remove('data-pipelines-box-shown');
		} else {
			// check if item is in center of screen

			if (entry.isIntersecting) {
				entry.target.classList.add('data-pipelines-box-shown');
			} else {
				entry.target.classList.remove('data-pipelines-box-shown');
			}
		}
	});
}, ioConfiguration);

const hiddenDataPipelinesBoxElements = document.querySelectorAll(
	'.data-pipelines-box-hidden'
);
hiddenDataPipelinesBoxElements.forEach((el) =>
	dataPipelinesBoxObserver.observe(el)
);
