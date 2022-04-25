const modal = () => {
    // открытие  и закрытие мод окна

    const modalBtn = document.querySelector('.modal__button'); // кнопка Оставить заявку
    const modal = document.querySelector('.modal'); // мод окно <form>
    // const closeBtn = document.querySelector('.close__button'); // кнопка  закрытия крестик
    const courseBtn = document.querySelector('.course__button'); // кнпока Заказать курс
    const closeBtn = document.createElement('button');



    modalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';

    });


    modal.addEventListener('click', (evt) => { // evt- объект события, создается при наступлении события
        //console.dir(evt.target); // выведет элемент на котрый нажали(на котром произошло событие)
        const modalContent = evt.target.closest('.modal__inner'); // проверяет есть ли у evt.target/или у его родителя  класс .modal__inner, если да то вернет этот элемент. Если не надйет такого элемента, то вернет null
        //console.log('modalContent ', modalContent);
        if (modalContent === null) { // нажали вне окна, либо можно написать так !modalContent
            modal.style.display = 'none';
        }

    });



    courseBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });


    closeBtn.addEventListener('click', () => { // закртие мод окна, нажатие кнопки крестик
        modal.style.display = 'none';
    });



    const createCloseBtn = () => {

        const modalInner = document.querySelector('.modal__inner');
        modalInner.style.position = 'relative'; // кнопку крестик будем позиционировать относительно этого элемента

        // задаем стили крестику
        closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        background-image: url('../img/cansel.svg');
        background-color: transparent;
    `;

        modalInner.append(closeBtn);
    }


    createCloseBtn();

}


modal(); // вызов