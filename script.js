let swiperInstance = null;

function initOrDestroySwiper() {
  const isMobile = window.innerWidth < 768;

  if (isMobile && swiperInstance) {
    // ❌ Destroy Swiper if it exists
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }

  if (!isMobile && !swiperInstance) {
    // ✅ Initialize Swiper if not already active
    swiperInstance = new Swiper('.swiper-container', {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 3,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

// Run once on page load and again on resize
window.addEventListener('load', initOrDestroySwiper);
window.addEventListener('resize', initOrDestroySwiper);
