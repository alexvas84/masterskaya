$(function () {

	function ibg() {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img')) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}

	ibg();

	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	})

	var main_slider = new Swiper('.swiper-container', {
		// effect: 'fade',
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		///autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		//pagination: {
		//	el: '.slider-quality__pagging',
		//	clickable: true,
		//},
		// Arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		/* 	breakpoints: {
				320: {
					autoHeight: true
				},
				768: {
					autoHeight: false
				}
			}, */
		on: {
			lazyImageReady: function lazyImageReady() {
				ibg();
			}
		}

		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',

	});

	var about_slider = new Swiper('.about__slider-container', {
		containerModifierClass: 'about__slider-container',
		slideClass: 'about__slider-slide',
		wrapperClass: 'about__slider-wrapper',
		// effect: 'fade',
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		///autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		//pagination: {
		//	el: '.slider-quality__pagging',
		//	clickable: true,
		//},
		// Arrows
		//navigation: {
		//	nextEl: '.swiper-button-next',
		//	prevEl: '.swiper-button-prev'
		//},
		/* 	breakpoints: {
				320: {
					autoHeight: true
				},
				768: {
					autoHeight: false
				}
			}, */
		on: {
			lazyImageReady: function lazyImageReady() {
				ibg();
			}
		}

		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',

	});


});

