//Utility DOM FUNCTIONS
const getByClass = (className) => document.getElementsByClassName(className);
const getById = (id) => document.getElementById(id);
const createElement = (element) => document.createElement(element);
const appendChild = (parent, child) => parent.appendChild(child);
const removeChild = (parent, child) => parent.removeChild(child);
const addClass = (element, className = '') => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);
const textContent = (element, text) => (element.textContent = text);
//
//
const click = 'click';
const keyup = 'keyup';
const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

//Toggle Mobile Menu
function toggleMobileMenu() {
	const toggle = getById('mobile-toggle');
	const mobileMenu = getById('mobile-nav');
	const mobileMenuActive = 'mobile-nav-active';
	const mobileNavLinks = selectAll('.mobile-nav-link');

	toggle.addEventListener(click, () => {
		if (!mobileMenu.classList.contains(mobileMenuActive)) {
			toggleClass(mobileMenu, mobileMenuActive);
			toggle.style.color = 'var(--contrast-color-light)';

			for (let link of mobileNavLinks) {
				setTimeout(() => {
					link.style.display = 'block';
				}, 200);
			}
		} else {
			toggleClass(mobileMenu, mobileMenuActive);
			toggle.style.color = 'var(--project-color-dark)';

			for (let link of mobileNavLinks) {
				link.style.display = 'none';
			}
		}

		for (let link of mobileNavLinks) {
			link.addEventListener(click, () => {
				if (mobileMenu.classList.contains(mobileMenuActive)) {
					toggleClass(mobileMenu, mobileMenuActive);
					toggle.style.color = 'var(--project-color-dark)';
					mobileNavLinks.forEach((link) => {
						link.style.display = 'none';
					});
				}
			});
		}
	});
}

toggleMobileMenu();
