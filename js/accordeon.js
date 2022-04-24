const contents = document.querySelectorAll('.program-line__content'); // Nodelist [div,div,div,div]


contents.forEach((elem) => { // на все элементы .program-line__content повесим обработчик события клика

    const title = elem.querySelector('.program-line__title');
    const descr = elem.querySelector('.program-line__descr');
    // console.dir(title.classList); // выведем элемент ввиде объекта чтоб увидеть какие свойства и методы у него есть

    title.addEventListener('click', () => {
        descr.classList.toggle('active'); // classList- свойство элемента
    });


});





//console.dir(document); // выведет элемент ввиде объекта

// const elem = document.querySelector('.header');
// const elems = document.querySelectorAll('div'); // псевдомассив(объект), NodeLIst


// elems.forEach((elem, i) => {
//     console.log(elem);
//     console.log(i);
// });

