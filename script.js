let swiperInstance = null;

function handleSwiper() {
  const isDesktop = window.innerWidth >= 1000;

  if (isDesktop && !swiperInstance) {
    // 👉 Initialize Swiper
    swiperInstance = new Swiper('.swiper-container', {
      loop: true,
      spaceBetween: 30,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      slidesPerView: 3,
    });
  } else if (!isDesktop && swiperInstance) {
    // ❌ Destroy Swiper on mobile
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

// Run on load and on resize
window.addEventListener('load', handleSwiper);
window.addEventListener('resize', handleSwiper);
