console.log('Соответствие макету:42\nПоведение при сужении экрана:10\nАдаптивное меню:14\nОбщий балл:66');


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
    
        
}());





