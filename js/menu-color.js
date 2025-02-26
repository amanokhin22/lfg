// color btns
document.addEventListener('DOMContentLoaded', function() {
    const burgers = document.querySelectorAll('.hamburger');

    burgers.forEach(burger => {
        burger.addEventListener('click', function() {
            const menu = this.closest('body').querySelector('.menu');
            if(menu) {
                menu.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            }
        });
    });
});