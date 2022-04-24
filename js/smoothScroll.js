// реализуем плавный скролл (нажимаем на ссылку в  меню, и она скроллит к секции  соответсвующей)

const navbar = document.querySelector('.header__nav');
const links = navbar.querySelectorAll('a'); // [a,a,a] -NodelIst , псевдмассив
//console.log('links ', links);


links.forEach((link) => { // перебираем все ссылки и вешаем событие на каждую ссылку

    link.addEventListener('click', (evt) => {
        evt.preventDefault(); // отменяем событе по умолчанию(резкий переход к секции) 
        //console.log(link.getAttribute('href').substring(1)); // link.getAttribute('href') выдаст значнеие атрибута href
        const section = document.querySelector(link.getAttribute('href')); //  выдаст блок <section></section>
        if (section) {
            // section.scrollIntoView({ // метд скролла, но он не кроссбразерный, для кросбраузерности используем библиотеку https://www.npmjs.com/package/seamless-scroll-polyfill
            //     block: 'start', // скроллит к началу секции
            //     behavior: 'smooth'
            // })

            seamless.scrollIntoView(section, { // кроссбраузернй скролл, seamless это из библиотеки
                behavior: "smooth",
                block: "start", // скроллит к началу секции
                inline: "center",
            });

        }
    });
});
