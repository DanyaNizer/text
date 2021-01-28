
$('.first-page__slider').slick({
	dots: true,
	arrows: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	fade: true,
	cssEase: 'linear',
	customPaging: function (slick, index) {
		return '<a>' + (index + 1) + '</a>';
	}
});

$('.wrap__header__slider').slick({
	dots: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	arrows: false,
	fade: true,
	cssEase: 'linear',
});

$('.two-page__slider').slick({
	dots: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	arrows: false,
	fade: true,
	cssEase: 'linear',
});


$('.three-page__slider').slick({
	dots: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	arrows: false,
	fade: true,
	cssEase: 'linear',
});


$('.four-page__slider').slick({
	dots: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	arrows: false,
	fade: true,
	cssEase: 'linear',
});



$('.bloks__sliders').slick({
	dots: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	arrows: true,
	fade: true,
	cssEase: 'linear',
});