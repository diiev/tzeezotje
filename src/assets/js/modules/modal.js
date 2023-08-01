const modals = () => {
    let btnPressed;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                btnPressed = true;
                if (destroy) {
                    item.remove();
                }
                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn')
                });
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${17}px`;

            });
        });
        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';

            });
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';

        });

        modal.addEventListener('click', (e) => {

            if (e.target === modal) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }
        })
    };




    bindModal('.header__buttons .btn', '.popup', '.popup__close');


};
export default modals;