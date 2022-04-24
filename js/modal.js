// открытие  и закрытие мод окна

const modalBtn = document.querySelector('.modal__button'); // кнопка Оставить заявку
const modal = document.querySelector('.modal'); // мод окно <form>


modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // display: flex
    //console.dir(modal);
});


modal.addEventListener('click', (evt) => { // evt- объект события, создается при наступлении события
    //console.dir(evt.target); // выведет элемент на котрый нажали(на котром произошло событие)
    const modalContent = evt.target.closest('.modal__inner'); // проверяет есть ли у evt.target/или у его родителя  класс .modal__inner, если да то вернет этот элемент. Если не надйет такого элемента, то вернет null
    //console.log('modalContent ', modalContent);
    if (modalContent === null) { // нажали вне окна, либо можно написать так !modalContent
        modal.style.display = 'none';
    }

});



