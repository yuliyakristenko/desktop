const header = document.querySelector('.section-header');
const mainNavigation = document.getElementById('main-navigation');

document.querySelector('.faq-accordion').addEventListener('click', (event) => {
	if (event.target.closest('.faq-accordion__item')) {
		event.target.closest('.faq-accordion__item')
		.classList.toggle('faq-accordion__item--active');
	}
});

document.querySelector('.btn-burger').addEventListener('click', () => {	
	header.classList.toggle('section-header--active-nav');

	if (header.classList.contains('section-header--active-nav')) {
		hideScroll();
	} else {
		showScroll();
	}
});

const hideScroll = () => {
	const scrollWidth = `${getScrollbarWidth()}px`;

	document.body.style.paddingRight = scrollWidth;
	document.body.style.overflow = 'hidden';

	mainNavigation.style.paddingRight = scrollWidth;
};

const showScroll = () => {
		document.body.style.paddingRight = '';
		document.body.style.overflow = 'visible';

		mainNavigation.style.paddingRight = '';
};

const resetNav = () => {
	header.classList.remove('section-header--active-nav');
	showScroll();
}

window.addEventListener('resize', resetNav);

// Get scrollbar width
const getScrollbarWidth = () => {
	const outer = document.createElement('div');

	outer.style.position = 'absolute';
	outer.style.top = '-9999px';
	outer.style.width = '50px';
	outer.style.height = '50px';
	outer.style.overflow = 'scroll';
	outer.style.visibility = 'hidden';

	document.body.appendChild(outer);
	const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
	document.body.removeChild(outer);

	return scrollBarWidth;
};

new Swiper('.section-hero-image', {
  // Optional parameters
 //direction: 'vertical',
  //loop: true,

//  // If we need pagination
  	pagination: {
    	el: '.section-hero-image .dots',
    	clickable: true,
	},

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//  // And if we need scrollbar
//  scrollbar: {
//    el: '.swiper-scrollbar',
//  },
});

new Swiper('.slider-blog-container', {
  // Optional parameters
 //direction: 'vertical',
  loop: true, // ?????????????????????????? ???? ??????????;

//  // If we need pagination
  	pagination: {
    	el: '.section-blog .dots',
    	clickable: true,
	},

  // Navigation arrows
  navigation: {
    nextEl: '.section-blog .swiper-button-next',
    prevEl: '.section-blog .swiper-button-prev',
  },

//  // And if we need scrollbar
//  scrollbar: {
//    el: '.swiper-scrollbar',
//  },
});

new Swiper('.slider-quotes-container', {
  // Optional parameters
 //direction: 'vertical',
  	loop: true, // ?????????????????????????? ???? ??????????;
  	slidesPerView: 'auto',

//  // If we need pagination
  	pagination: {
    	el: '.section-quotes .dots',
    	clickable: true,
	},
});

