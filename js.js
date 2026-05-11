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

//**Toggle Year Container */
function toggleYearContainer() {
	const toggle = getById('year-container-toggle');
	const yearJumpContainer = getById('year-jump-container');
	const yearToggles = selectAll('.year-toggles');
	const toggleIcon = select('.toggle-icon');

	const activeMenu = 'year-jump-container-active';
	const caretDown = 'fa-caret-down';
	const caretUp = 'fa-caret-up';

	toggle.addEventListener(click, () => {
		if (!yearJumpContainer.classList.contains(activeMenu)) {
			toggleClass(yearJumpContainer, activeMenu);
			removeClass(toggleIcon, caretDown);
			addClass(toggleIcon, caretUp);

			setTimeout(() => {
				for (let toggles of yearToggles) {
					toggles.style.display = 'block';
				}
			}, 200);
		} else {
			toggleClass(yearJumpContainer, activeMenu);
			removeClass(toggleIcon, caretUp);
			addClass(toggleIcon, caretDown);

			for (let toggles of yearToggles) {
				toggles.style.display = 'none';
			}
		}
	});

	for (let toggles of yearToggles) {
		toggles.addEventListener(click, () => {
			toggleClass(yearJumpContainer, activeMenu);
			removeClass(toggleIcon, caretUp);
			addClass(toggleIcon, caretDown);

			for (let toggles of yearToggles) {
				toggles.style.display = 'none';
			}
		});
	}
}

toggleYearContainer();

//++Videos Obj
const videosObj = [
	{
		year: '2026',
		videos: [
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
		],
	},

	{
		year: '2023',
		videos: [
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
		],
	},
	{
		year: '2022',
		videos: [
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
		],
	},

	{
		year: '2021',
		videos: [
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
		],
	},
	{
		year: '2020',
		videos: [
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
		],
	},

	{
		year: '2018',
		videos: [
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
		],
	},
];

//For Videos Cards
//**Adjust video fit function */
function adjustVideoView(arr, video) {
	for (let toggle of arr) {
		toggle.addEventListener(click, () => {
			if (toggle == arr[0]) {
				video.style.objectFit = 'cover';
			}
			if (toggle == arr[1]) {
				video.style.objectFit = 'fill';
			}
			if (toggle == arr[2]) {
				video.style.objectFit = 'contain';
			}
		});
	}
}

function generateVideoYearContainers(obj) {
	const addContainerClass = [];

	const parent = getById('video-section');
	const cardParent = createElement('div');

	addClass(cardParent, 'video-year-container');
	addContainerClass.push(cardParent);
	appendChild(parent, cardParent);
	cardParent.id = obj.year;

	const groupYear = createElement('span');
	addClass(groupYear, 'video-year-span');
	textContent(groupYear, obj.year);
	appendChild(cardParent, groupYear);

	for (let i of addContainerClass) {
		addClass(i, 'container');
	}

	// function generateVideoCard(obj, parent) {
	// 	const addContainerClass = [];

	// 	for(let video of obj)
	// 	const card = createElement('div');
	// 	addClass(card, 'video-card');
	// 	addClass(card, 'container');

	// 	const videoTag = createElement('video');
	// 	videoTag.src = obj;
	// 	appendChild(card, videoTag);

	// 	const videoAdjustContainer = createElement('div');
	// 	addClass(videoAdjustContainer, 'video-adjust-container');
	// 	addContainerClass.push(videoAdjustContainer);
	// 	appendChild(card, videoAdjustContainer);

	// 	const videoAdjustHeader = createElement('h5');
	// 	textContent(videoAdjustHeader, 'Adjust Video View');
	// 	appendChild(videoAdjustContainer, videoAdjustHeader);

	// 	const videoAdjustControlsWrapper = createElement('div');
	// 	addClass(videoAdjustControlsWrapper, 'video-adjust-controls-wrapper');
	// 	addContainerClass.push(videoAdjustControlsWrapper);
	// 	appendChild(card, videoAdjustControlsWrapper);

	// 	const videoControlSpans = [];
	// 	for (let i = 0; i < 3; i++) {
	// 		videoControlSpans.push(createElement('span'));
	// 	}
	// 	for (let toggle of videoControlSpans) {
	// 		addClass(toggle, 'video-adjust-controls');
	// 		appendChild(videoAdjustControlsWrapper, toggle);
	// 	}
	// 	adjustVideoView(videoControlSpans, obj);
	// }

	const getYearGroup = selectAll('.video-year-container');
	console.log(getYearGroup);

	if (obj.year === obj.id) {
		appendChild(cardParent, card);
	}
}

videosObj.forEach((year) => {
	generateVideoYearContainers(year);
});

const videoLink = (videoTag) => {
	video.src = obj.videoSrc;
};

const videoAdjustToggles = selectAll('.video-adjust-controls');
const testVideo = getById('test-video');

adjustVideoView(videoAdjustToggles, testVideo);
