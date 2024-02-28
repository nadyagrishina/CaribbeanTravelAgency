$(function () {
  $('.galerie__slider').slick({
		centerPadding: '200px',
		arrows: false,
		slidesToShow: 3,
  	slidesToScroll: 2,
  	centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 2000,
				settings: {
					centerPadding: "60px",
				}
			},
			{
				breakpoint: 1730,
				settings: {
					slidesToShow: 2,
					centerPadding: "200px",
				}
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 2,
					centerPadding: "100px",
				}
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
					centerPadding: "60px",
				}
			},
			{
				breakpoint: 1170,
				settings: {
					slidesToShow: 2,
					centerPadding: "20px",
				}
			},
			{
				breakpoint: 1070,
				settings: {
					slidesToShow: 2,
					centerPadding: "50px",
				}
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 2,
					centerPadding: false,
				}
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 1,
					centerPadding: "180px",
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 1,
					centerPadding: "110px",
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					centerPadding: "60px",
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					centerPadding: "20px",
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					centerPadding: "60px",
				}
			},
			{
				breakpoint: 430,
				settings: {
					slidesToShow: 1,
					centerPadding: "20px",
				}
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 1,
					centerPadding: "0px",
				}
			},
			
		]
  });
	
});


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.mobile__menu');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}


