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
        
    
        
}());



