const accordeon = () => {

    const contents = document.querySelectorAll('.program-line__content'); // Nodelist [div,div,div,div]
    const constentDescrs = document.querySelectorAll('.program-line__descr');


    contents.forEach((elem) => { // на все элементы .program-line__content повесим обработчик события клика

        const title = elem.querySelector('.program-line__title');
        const descr = elem.querySelector('.program-line__descr'); // элемент на котрый нажали
        // console.dir(title.classList); // выведем элемент ввиде объекта чтоб увидеть какие свойства и методы у него есть

        descr.style.transition = 'all .3s'; // плавно будет  отображать  текст блока
        descr.style.overflow = 'hidden';

        title.addEventListener('click', () => {
            //console.log('descr ', descr);

            constentDescrs.forEach((tab, i) => {
                // console.log(i, ' ая итерация');
                // console.log('tab = ', tab);
                // console.log(tab === descr);

                if (tab === descr) { // descr - нажатый элемент(константа)
                    tab.classList.add('active');
                    console.dir(tab);
                    tab.style.height = tab.scrollHeight + 'px';

                } else {
                    tab.classList.remove('active');
                    tab.style.height = 0;
                }
            })


        });


    });




    //console.dir(document); // выведет элемент ввиде объекта


    // const elems = document.querySelectorAll('div'); // псевдомассив(объект), NodeLIst


    // elems.forEach((elem, i) => {
    //     console.log(elem);
    //     console.log(i);
    // });


}


accordeon(); // вызов