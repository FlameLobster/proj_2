$(document).ready(function() {
	$('.slider-0').owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		smartSpeed: 700
	});

	$('.slider-1').owlCarousel({
		items: 5,
		loop:true, //Зацикливаем слайдер
		nav:false, //Отключил навигацию
		autoplay:true, //Автозапуск слайдера
		smartSpeed:700, //Время движения слайда
		autoplayTimeout:3000, //Время смены слайда
		dots: false,
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});

	$('.slider-2').owlCarousel({
		dots: true,
		dotsEach: true,
		items: 3,
		margin: 30,
		loop:true, //Зацикливаем слайдер
		nav:false, //Отключил навигацию
		smartSpeed:700, //Время движения слайда
		autoplayTimeout:3000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			670:{
				items:2
			},
			1100:{
				items:3
			}
		}
	});

	$(window).scroll(function() {
		if (window.matchMedia('(min-width: 992px)').matches)
		{
			if ($(this).scrollTop() > 1){
				$(".scroll-elem").addClass("scroll");
				$("#logo").removeClass("logo");
				$("#logo").addClass("logo-dark");
				$(".header-menu").addClass("header-menu-fixed");
			}
			else{
				$(".header-menu").removeClass("header-menu-fixed");
				$("#logo").removeClass("logo-dark");
				$("#logo").addClass("logo");
				$('.scroll-elem').removeClass("scroll");
			}
		}
	});

	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 600);
		e.preventDefault();
	});
		// E-mail Ajax Send
	// Documentation & Example: https://github.com/agragregra/uniMail
	$(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
// INPUT ANIMATION
(function() {
	[].slice.call(
		document.querySelectorAll(
			'input.form-name'
			)).forEach(function(inputEl) {
		if( inputEl.value.trim() !== '' ) {
			classie.add(
				inputEl.parentNode,
				'input--filled'
				);
		}

		inputEl.addEventListener(
			'focus',
			onInputFocus
			);
		inputEl.addEventListener(
			'blur',
			onInputBlur
			);
	}
	);

			function onInputFocus(ev) {
				classie.add(
					ev.target.parentNode,
					'input--filled'
					);
			}

			function onInputBlur(ev) {
				if(ev.target.value.trim() === '') {
					classie.remove(
						ev.target.parentNode,
						'input--filled'
						);
				}
			}
		})();
	});