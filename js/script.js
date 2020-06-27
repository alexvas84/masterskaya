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

	let mixBtn = document.querySelectorAll('.project-btn');

	for (btn of mixBtn) btn.addEventListener('click', (e) => {
		for ($atr of mixBtn) deActive($atr);
		e.target.classList.add('active');
	});

	function deActive($atr) {
		$atr.classList.remove('active');
	};

	$('.wrapper .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.wrapper').find('.tab-item').removeClass('active-tab').hide();
		$('.wrapper .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

	$('.wrapper .tab.active').click();




	const parallaxNum = 0.3;
	const parallax = document.querySelectorAll('.parallax').forEach((item) => {
		window.addEventListener('scroll', () => {
			let offset = window.pageYOffset;
			let itemOffset = item.getBoundingClientRect().top + document.body.scrollTop;
			//let itemOffset = item.getBoundingClientRect().top;
			console.log(offset);
			item.style.backgroundPositionY = itemOffset * parallaxNum + 'px';
		});
	});



	const scrollBtn = document.getElementById('scrollToTop');
	window.onscroll = () => {
		window.scrollY > 500 ? scrollBtn.classList.remove('hide') : scrollBtn.classList.add('hide');
	};

	scrollBtn.addEventListener('click', () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	});

	var mixer = mixitup('.project__inner-items');

});

