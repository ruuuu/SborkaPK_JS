const sendForm = () => {

    const form = document.querySelector('.modal');
    //console.log(form);


    form.addEventListener('submit', (evt) => {
        evt.preventDefault();   // отменеям  действие по умолчаию(перезагрузка сртаницы) - отправка  данных на сервер методом GET по адресу http://127.0.0.1:5500/?#

        const text = form.querySelector('input[type=text]');
        const tel = form.querySelector('input[type=tel]');
        const email = form.querySelector('input[type=email]');

        // console.log(text.value); //  получим значениеполя
        // console.log(tel.value);
        // console.log(email.value);

        const sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value
        }
        console.log(sendObj);

        fetch('https://jsonplaceholder.typicode.com/posts', { // для отправки(POST)/получения(GET) данных испольхуют этот метод . По умолчанию отправляет даннеы методом GET
            method: 'POST',
            body: JSON.stringify(sendObj), // преобразуем объект в строку
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

            .then((response) => {
                if (response.status === 404) {
                    throw new Error('Not found');
                }
                console.log(response);
                return response.json() //  получаем ответ от сервера
            })

            .then((data) => {
                console.log('data ', data); // 2 ой  then отрабоает только ктгда когда отработает 1 ый then

            })

            .catch(error => {
                //console.dir(error);
                console.warn(error.message);
            })

            .finally(() => { //  отработает в любом случае, будь то ошибка и успех от сервера
                form.reset(); // очищем данные
            })

    })
}

sendForm(); //  вызывем фукнцию


//статус 201  - статус успешного сохранения данных в бд

// https://learn.javascript.ru/formdata 

// https://learn.javascript.ru/formdata


// реализовать сбор данных формы через объект formData. Для данного объекта добавить атрибуты name к элементам input