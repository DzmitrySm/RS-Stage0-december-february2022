console.log('Смена изображений в секции portfolio:20\nПеревод страницы на два языка:20\nОбщий балл:40');

const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and',
      'hero-text-1': 'happy moments of life together with professional',
      'hero-text-2': 'photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio',
      'skill-text-1a': 'and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that',
      'skill-text-2a': 'they always stay with you',
      'skill-title-3': 'Retouch',
      'skill-text-3': 'I strive to make photography',
      'skill-text-3a': 'surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording',
      'skill-text-4a': 'for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и',
      'hero-text-1': 'счастливые моменты жизни вместе с профессиональным',
      'hero-text-2': 'фотографом Алексой Райс',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии',
      'skill-text-1a': 'и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы', 
      'skill-text-2a': 'они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография',
      'skill-text-3a': 'превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука',
      'skill-text-4a': 'для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }

  const switchRu = document.querySelector('.switch-ru');
  const switchEn = document.querySelector('.switch-en');

  function getTranslate(language) {
      const data = document.querySelectorAll('[data-i18]');
      data.forEach((element) => {
          element.textContent = i18Obj[language][element.dataset.i18];
      });
      
  }

  switchRu.addEventListener('click', () => getTranslate('ru'));
  switchEn.addEventListener('click', () => getTranslate('en'));


  

(function () {
    const hamburger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-style');
    const navMenuClose = document.querySelector('.header-nav-close');
    const closeMenuByLink = document.querySelectorAll('.nav-link');
    hamburger.addEventListener('click', () => {
        navMenu.classList.add('nav-style-active');    
    });
    navMenuClose.addEventListener('click', () => {
        navMenu.classList.remove('nav-style-active'); 
    });
    closeMenuByLink.forEach((element) => element.addEventListener('click', () => {
        navMenu.classList.remove('nav-style-active');
    }))

    const portfolioButton = document.querySelector('.button-transparent')
    const portfolioImage = document.querySelectorAll('.portfolio-image')
    portfolioButton.addEventListener('click', () => {
        portfolioImage.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
    });

    const portfolioButtonSpring = document.querySelector('.button-spring')
    portfolioButtonSpring.addEventListener('click', () => {
        portfolioImage.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
    
    });

    const portfolioButtonSummer = document.querySelector('.button-summer')
    portfolioButtonSummer.addEventListener('click', () => {
        portfolioImage.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
    });

    const portfolioButtonAutumn = document.querySelector('.button-autumn')
    portfolioButtonAutumn.addEventListener('click', () => {
        portfolioImage.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
    })

    const buttonsAll = document.querySelectorAll('.active')
    
        
}());





