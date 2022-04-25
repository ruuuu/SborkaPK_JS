// здесь пишем таймер котрый отсичтывает сколько дней осталась до опреденной даты



const numWord = (value, words) => {
    value = Math.abs(value) % 100;

    const lastNum = value % 10; // последняя цифра
    if (value > 10 & value < 10) return words[2];
    if (lastNum > 1 && lastNum < 5) return words[1];
    if (lastNum === 1) return words[0];
    return words[2];
}


const daysBlock = document.querySelector('.timer__days');
const hoursBlock = document.querySelector('.timer__hours');
const minutesBlock = document.querySelector('.timer__minutes');
const secondsBlock = document.querySelector('.timer__seconds');
let interval;


const updateTimer = () => {
    const date = new Date();
    const dateDeadline = new Date('27 april 2022').getTime();
    const timeRemaining = (dateDeadline - date) / 1000; //  число секунд, столько секунд осталось от текущей даты до дедлайна

    const days = Math.floor((timeRemaining / 60 / 60 / 24));
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    const fDays = days < 10 ? '0' + days : days;
    const fHours = hours < 10 ? '0' + hours : hours;
    const fMinutes = minutes < 10 ? '0' + minutes : minutes;
    const fSeconds = seconds < 10 ? '0' + seconds : seconds;

    daysBlock.textContent = fDays;
    hoursBlock.textContent = fHours;
    minutesBlock.textContent = fMinutes;
    secondsBlock.textContent = fSeconds;


    secondsBlock.nextElementSibling.textContent = numWord(seconds, ['секунда', 'секунды', 'секунд']); // получаем след эдемент после secondsBlock

    if (timeRemaining <= 0) { //
        clearInterval(interval); // остановим часы

        daysBlock.textContent = '00'; // обнуляем счетчики
        hoursBlock.textContent = '00';
        minutesBlock.textContent = '00';
        secondsBlock.textContent = '00';
    }
};


updateTimer();

interval = setInterval(() => { // переаеваемая фукнци явызывается через каждые пол секунду
    console.log('tick');
    updateTimer();
}, 500);






// const date = new Date().getTime(); //  получим число секунд котрое прошло начиная с  1 янв 1970г
// console.log(date);


// console.dir(hours);
// console.dir(minutes);
// console.dir(seconds);


