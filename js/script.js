document.querySelector('.header_bottom__btnCatalog').addEventListener('mouseover', function(e) {
    document.querySelector('.header_bottom__menu').classList.add('active');
    document.querySelector('.background_overlay').style.display = 'flex';
});

document.querySelector('.header_bottom__btnCatalog').addEventListener('mouseout', function(e) {
    document.querySelector('.header_bottom__menu').classList.remove('active');
    document.querySelector('.background_overlay').style = null;
});

document.querySelector('.header__calBuy').addEventListener('mouseover', function(e) {
    this.classList.add('active');
    document.querySelector('.background_overlay').style.display = 'flex';
});

document.querySelector('.header__calBuy').addEventListener('mouseout', function(e) {
    this.classList.remove('active');
    document.querySelector('.background_overlay').style = null;
});

const swiper_office_1 = new Swiper('.section_contactIndex--1 .swiper', {
    effect: "creative",
    direction: 'vertical',
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, -400, 0],
        },
        next: {
            translate: [0, 400, 0],
        },
    },
    speed: 1000,

    navigation: {
        nextEl: '.section_contactIndex--1 .swiper-button-next',
        prevEl: '.section_contactIndex--1 .swiper-button-prev',
    },
});

const swiper_office_2 = new Swiper('.section_contactIndex--2 .swiper', {
    effect: "creative",
    direction: 'vertical',
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, -400, 0],
        },
        next: {
            translate: [0, 400, 0],
        },
    },
    speed: 1000,

    navigation: {
        nextEl: '.section_contactIndex--2 .swiper-button-next',
        prevEl: '.section_contactIndex--2 .swiper-button-prev',
    },
});

const swiper_office_3 = new Swiper('.section_contactIndex--3 .swiper', {
    effect: "creative",
    direction: 'vertical',
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, -400, 0],
        },
        next: {
            translate: [0, 400, 0],
        },
    },
    speed: 1000,

    navigation: {
        nextEl: '.section_contactIndex--3 .swiper-button-next',
        prevEl: '.section_contactIndex--3 .swiper-button-prev',
    },
});