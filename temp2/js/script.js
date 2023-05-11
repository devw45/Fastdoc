var slider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor:true,
    centeredSlides: true,
    loop:true,
    slidesPerView: 'auto',
    coverflowEffect: {
	rotate: 0,
	stretch: 0,
	depth: 100,
	modifier: 2.5,
    },

    pagination: {
	el: '.swipter-pagination',
	clickable: true,
    },
    
    navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-buttom-prev',
    }
});
