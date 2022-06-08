/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
  Navigation,
  Autoplay,
  EffectFade,
  EffectFlip,
  Lazy,
  Manipulation,
  Keyboard,
  EffectCoverflow,
} from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import "swiper/css";

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector(".advance__slider-one")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".advance__slider-one", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [
        Navigation,
        Autoplay,
        EffectFade,
        EffectCoverflow,
        Lazy,
        Manipulation,
        Keyboard,
      ],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      speed: 700,
      grabCursor: true,
      loop: true,

      effect: "coverflow",

      // Дополнение к coverflow
      coverflowEffect: {
        // Угол
        rotate: 20,
        // Наложение
        stretch: 50,
        // Тень
        slideShadows: true,
      },

      // Управление клавиатурой
      keyboard: {
        // Включить\выключить
        enabled: true,
        // Включить\выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
        // Включить\выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
      },
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".main__swiper-button-prev",
        nextEl: ".main__swiper-button-next",
      },

      // Брейкпоинты
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // События
      on: {},
    });
  }

  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector(".advance__slider-two")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".advance__slider-two", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, EffectFlip, Keyboard],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 20,
      // autoHeight: true,
      speed: 1300,
      grabCursor: true,
      loop: true,

      effect: "flip",
      flipEffect: {
        slideShadows: true,
      },

      // Управление клавиатурой
      keyboard: {
        // Включить\выключить
        enabled: true,
        // Включить\выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
        // Включить\выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
      },

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".main__swiper-button-prev.swiper-two",
        nextEl: ".main__swiper-button-next.swiper-two",
      },

      // Брейкпоинты
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // События
      on: {},
    });
  }

  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector(".advance__slider-three")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".advance__slider-three", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay, EffectFade, Keyboard],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      speed: 700,
      grabCursor: true,
      loop: true,

      autoplay: {
        // Пауза между прокруткой
        delay: 1000,
        // Закончить на последнем слайде
        stopOnLastSlide: true,
        // Отключить после ручного переключения
        disableOnInteraction: false,
      },

      effect: "fade",

      // Дополнение к fade
      fadeEffect: {
        // Параллельная
        // смена прозрачности
        crossFade: true,
      },

      // Управление клавиатурой
      keyboard: {
        // Включить\выключить
        enabled: true,
        // Включить\выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
        // Включить\выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
      },

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".main__swiper-button-prev.swiper-three",
        nextEl: ".main__swiper-button-next.swiper-three",
      },

      // Брейкпоинты
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // События
      on: {},
    });
  }

  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector(".video__slider")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".video__slider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [
        Navigation,
        EffectFade,
        Manipulation,
        Keyboard,
      ],
      // observer: true,
      // observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      // autoHeight: true,
      speed: 700,
      grabCursor: true,
      loop: true,
      // Управление клавиатурой
      keyboard: {
        // Включить\выключить
        enabled: true,
        // Включить\выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
        // Включить\выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
      },

      // Эффекты

      // Пагинация

      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".swiper-button-prev.video-prev",
        nextEl: ".swiper-button-next.video-next",
      },

      // Брейкпоинты

      breakpoints: {
        // 320: {
        // 	slidesPerView: 1,
        // 	spaceBetween: 0,
        // 	autoHeight: true,
        // },
        // 768: {
        // 	slidesPerView: 2,
        // 	spaceBetween: 20,
        // },
        992: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        // 1380: {
        //   slidesPerView: 2,
        //   spaceBetween: 15,
        // },
      },

      // События
      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(
    ".swiper_scroll"
  );
  if (sliderScrollItems.length > 0) {
    for (
      let index = 0;
      index < sliderScrollItems.length;
      index++
    ) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  // initSlidersScroll();
});
