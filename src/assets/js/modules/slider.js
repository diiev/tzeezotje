import { tns } from "tiny-slider";

function slider() {
    const thirdSlider = tns({
        container: '.third__slider',
        items: 1,
        nav: false,
        controls: false
    });
    document.querySelector('.slider__prev').addEventListener('click', () => {
        thirdSlider.goTo('prev');
    });
    document.querySelector('.slider__next').addEventListener('click', () => {
        thirdSlider.goTo('next');
    });

    const fiveSlider = tns({
        container: '.five__slider',
        items: 1,
        nav: false,
        controls: false,
        center: true,
        responsive: {
            500: {
                items: 2
            },
           
            900: {
              items: 3
            }
          }

    });
    document.querySelector('.five__slider-prev').addEventListener('click', () => {
        fiveSlider.goTo('prev');
    });
    document.querySelector('.five__slider-next').addEventListener('click', () => {
        fiveSlider.goTo('next');
    });
}
export default slider;