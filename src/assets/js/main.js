import slider from "./modules/slider";
import modals from "./modules/modal";
import Form from "./modules/forms";
import menu from "./modules/menu";

document.addEventListener('DOMContentLoaded', () => {   

    try {
        slider();
        modals();
        new Form('#contact-form').init();
        new Form('#reserve-form').init();
        menu();
    }

    catch(e) {
        console.log(e)
    }

});