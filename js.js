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
		videos: ['./assets/placeHolderVids_delete/placeHolder1.mp4'],
	},

	{
		year: '2023',
		videos: [
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
			'./assets/placeHolderVids_delete/placeHolder2.mp4',
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
			'./assets/placeHolderVids_delete/placeHolder2.mp4',
			'./assets/placeHolderVids_delete/placeHolder2.mp4',
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
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
			'./assets/placeHolderVids_delete/placeHolder1.mp4',
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
	const addContainerClass = [];

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

function generateVideoYearContainer(obj) {
	const parent = getById('video-section');

	const cardParent = createElement('div');
	addClass(cardParent, 'video-year-container');
	addClass(cardParent, 'container');
	appendChild(parent, cardParent);
	cardParent.id = obj.year;

	const groupYear = createElement('span');
	addClass(groupYear, 'video-year-span');
	textContent(groupYear, obj.year);
	appendChild(cardParent, groupYear);

	const backgroundYearContainer = createElement('div');
	addClass(backgroundYearContainer, 'background-year-container');
	addClass(backgroundYearContainer, 'container');
	appendChild(cardParent, backgroundYearContainer);

	const backgroundYearSpan = createElement('span');
	textContent(backgroundYearSpan, obj.year);
	appendChild(backgroundYearContainer, backgroundYearSpan);

	const backToNav = createElement('a');
	addClass(backToNav, 'back-to-nav');
	backToNav.href = `#video-section`;
	appendChild(cardParent, backToNav);
	textContent(backToNav, 'Back To Nav');

	if (obj.year === obj.id) {
		appendChild(cardParent, card);
	}

	//**Generate Card Function */
	generateVideoCard(obj, cardParent);
}

const generateVideoCard = (obj, cardParent) => {
	for (let video of obj.videos) {
		const card = createElement('div');
		addClass(card, 'video-card');
		addClass(card, 'container');

		const videoTag = createElement('video');
		videoTag.src = video;
		videoTag.setAttribute('controls', null);
		appendChild(card, videoTag);

		const videoAdjustContainer = createElement('div');
		addClass(videoAdjustContainer, 'video-adjust-container');
		addClass(videoAdjustContainer, 'container');
		appendChild(card, videoAdjustContainer);

		const videoAdjustHeader = createElement('h5');
		addClass(videoAdjustHeader, 'video-adjust-header');
		textContent(videoAdjustHeader, 'Adjust Video View');
		appendChild(videoAdjustContainer, videoAdjustHeader);

		const videoAdjustControlsWrapper = createElement('div');
		addClass(videoAdjustControlsWrapper, 'video-adjust-controls-wrapper');
		addClass(videoAdjustControlsWrapper, 'container');
		appendChild(videoAdjustContainer, videoAdjustControlsWrapper);

		const videoControlSpans = [];
		for (let i = 0; i < 3; i++) {
			videoControlSpans.push(createElement('span'));
		}
		for (let toggle of videoControlSpans) {
			addClass(toggle, 'video-adjust-controls');
			appendChild(videoAdjustControlsWrapper, toggle);
		}

		textContent(videoControlSpans[0], 'Cover');
		textContent(videoControlSpans[1], 'Fill');
		textContent(videoControlSpans[2], 'Contain');

		adjustVideoView(videoControlSpans, videoTag);

		if (cardParent.id == obj.year) {
			appendChild(cardParent, card);
		}
	}
};

videosObj.forEach((year) => {
	generateVideoYearContainer(year);
});

function videoYearToggle(arrOfToggle, videoYear) {
	for (let toggle of arrOfToggle) {
		toggle.href = `#${videoYear.year}`;
	}
}

const mainYearToggles = selectAll('.main-year-toggles');
const [mainYear1, mainYear2, mainYear3, mainYear4, mainYear5, mainYear6] = mainYearToggles;
const yearToggles = selectAll('.year-toggles');
const [year1, year2, year3, year4, year5, year6] = yearToggles;

const year1Toggles = [mainYear1, year1];
const year2Toggles = [mainYear2, year2];
const year3Toggles = [mainYear3, year3];
const year4Toggles = [mainYear4, year4];
const year5Toggles = [mainYear5, year5];
const year6Toggles = [mainYear6, year6];

videoYearToggle(year1Toggles, videosObj[0]);
videoYearToggle(year2Toggles, videosObj[1]);
videoYearToggle(year3Toggles, videosObj[2]);
videoYearToggle(year4Toggles, videosObj[3]);
videoYearToggle(year5Toggles, videosObj[4]);
videoYearToggle(year6Toggles, videosObj[5]);
