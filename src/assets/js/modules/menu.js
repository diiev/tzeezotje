const menu = () => {
    const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.header__menu'),
    close = document.querySelector('.header__menu-close');
    
    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
    close.addEventListener('click', ()=>{
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    })
};
export default menu;