// ハンバーガーメニューの開閉操作
const ham = $('.nav__hamburger');
const hamOpen = $('.nav__hamburger-open');
const hamClose = $('.nav__hamburger-close');
const nav = $('.nav__content');
ham.on('click', function () {
  hamOpen.toggleClass('active');
  hamClose.toggleClass('active');
  nav.toggleClass('active');
});

// ハンバーガーメニュー内小見出しの開閉操作
const navHeadline = $('.nav__headline');
const navLink = $('.nav__link-allow');
navHeadline.on('click', function () {
  const isActive = $(this).children(navLink).hasClass('active');
  $('.nav__item-sub').slideUp(400);
  navLink.removeClass('active');

  if (!isActive) {
    $(this).next().slideDown(400);
    $(this).find(navLink).addClass('active');
  }
});

// フッターメニュー内小見出しの開閉操作

// TODO PC版で処理を止める実装をする
const footerNavHeadline = $('.footer__nav-headline');
const footerNavLink = $('.footer__nav-link-allow');
footerNavHeadline.on('click', function () {
  const isActive = $(this).children(footerNavLink).hasClass('active');
  $('.footer__nav-item-sub').slideUp(400);
  footerNavLink.removeClass('active');

  if (!isActive) {
    $(this).next().slideDown(400);
    $(this).find(footerNavLink).addClass('active');
  }
});


// モーダルウィンドウの処理
$('.modal__open').on('click', function () {
  const target = $(this).data('target');
  const modal = document.getElementById(target);
  scrollPosition = $(window).scrollTop();

  $('body').addClass('fixed').css({ 'top': - scrollPosition });
  $(modal).fadeIn();
  return false;
});
$('.modal__close').on('click', function () {
  $('body').removeClass('fixed');
  window.scrollTo(0, scrollPosition);
  $('.modal').fadeOut();
  return false;
});

// トップページ2×2のスライドショーの処理
$(".slide__item-above").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 4,
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [{
    breakpoint: 1065,
    settings: {
      slidesToShow: 2,
    }
  }],
});
$(".slide__item-below").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 2,
  pauseOnFocus: false,
  pauseOnHover: false,
  rtl: true,
});

// 企業スライダー処理
$(".clients__slide-first").slick({
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  infinite: true,
  slidesToShow: 5,
  cssEase: "linear",
  swipe: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  rtl: true,
  responsive: [{
    breakpoint: 1065,
    settings: {
      slidesToShow: 2,
    }
  }],
});
$(".clients__slide-second").slick({
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  infinite: true,
  slidesToShow: 5,
  cssEase: "linear",
  swipe: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [{
    breakpoint: 1065,
    settings: {
      slidesToShow: 2,
    }
  }],
});
$(".clients__slide-third").slick({
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  infinite: true,
  slidesToShow: 5,
  cssEase: "linear",
  swipe: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  rtl: true,
  responsive: [{
    breakpoint: 1065,
    settings: {
      slidesToShow: 2,
    }
  }],
});