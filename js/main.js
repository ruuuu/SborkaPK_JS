const modalWindow = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.button'); // псевдомасси вкнопок Оставить заявку  []
const modalClose = document.querySelector('.modal__close'); // крсетик
const body = document.querySelector('body');


buttonModals.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        body.classList.add('noscroll');
    })
})



modalWindow.addEventListener('click', (evt) => {
    const isModal = evt.target.closest('.modal__inner'); // если мы нажали(evt.target - нажатый элемент) на элемент  .modal__inner

    if (!isModal) { // если нажали вне мод окна
        modalWindow.style.display = 'none';
        body.classList.remove('noscroll');
    }
})



modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    body.classList.remove('noscroll');
})