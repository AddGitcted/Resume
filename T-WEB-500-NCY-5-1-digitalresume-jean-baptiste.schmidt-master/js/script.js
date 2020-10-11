var typed = new Typed('#typed', {
	strings: ['#Recherche alternance '],
	typeSpeed: 80,
	backSpeed: 0,
	startDelay: 2500,

});

const header = document.querySelector('.header.container');


document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;

	var parcoursDiv = $('#path');
	$(window).on('scroll', function () {
		var winT = $(window).scrollTop(),
			winH = $(window).height(),
			parcoursT = parcoursDiv.offset().top;
		if (winT + winH / 3 > parcoursT) {
			header.style.backgroundColor = 'rgba(59, 76, 79, 1)';
		}
	});

	if (scroll_position > "250") {
		header.style.backgroundColor = '#29323c';

	} else {
		header.style.backgroundColor = 'rgba(2, 20, 23, 0.4)';
	}
});

function myFunction() {
	var x = document.getElementById("nav-list");
	if (x.className === "nav-list") {
		x.className += " responsive";
	} else {
		x.className = "nav-list";
	}
}
var skillsDiv = $('#skills');
$(window).on('scroll', function () {
	var winT = $(window).scrollTop(),
		winH = $(window).height(),
		skillsT = skillsDiv.offset().top;
	if (winT + winH > skillsT) {
		$('.skillbar').each(function () {
			$(this).find('.skillbar-bar').animate({
				width: $(this).attr('data-percent')
			}, 1200);
			$(this).find('.skillbar-bar').css("backgroundColor", "#009688");
		});
	}
});
