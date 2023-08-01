export default class Form {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
        this.inputs = document.querySelectorAll('input');
        this.textareas = document.querySelectorAll('textarea');
        this.message = {
            lodading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...',
        };
        this.path = '';
    }

    clearInputs() {
        this.inputs.forEach(input => {
            if (input.type !== 'submit')
                input.value = '';
        });
        this.textareas.forEach(textarea => {
            textarea.value = '';
        });
    }
    checkMailInputs() {
        const mailInputs = document.querySelectorAll('[type="email"]');
        mailInputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        });
    }
    async postData(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    }

    init() {
        this.checkMailInputs();
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                        margin-top: 15px;
                        font-size: 44px;
                        color: #000;
                        text-align:center;
                        vertical-align: middle;
                        padding-top: 100px;
                        color: #3A4574;
                    `;
                const formData = new FormData(form)
                form.parentNode.append(statusMessage);
                form.style.display = 'none';
                form.classList.add('animated', 'fadeIn');
                statusMessage.textContent = this.message.lodading;
                this.postData(this.path, formData)
                    .then(res => {
                        statusMessage.textContent = this.message.success;
                    })
                    .catch(() => {
                        statusMessage.textContent = this.message.failure;

                    })
                    .finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                            form.style.display = 'block';
                        }, 3000)
                    });

            });

        });
    }
}