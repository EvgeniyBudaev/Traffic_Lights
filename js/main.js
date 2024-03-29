"use strict";

// находим все классы
let circle = document.getElementsByClassName("circle");
// функция - счётчик counter
function counter(setCounterOne, setCounterTwo, classIndex0, classIndex1, classIndex2) {
    // выводим счётчик
    let timeoutId = setInterval(function () {
        classIndex0.classList.add("circleBGColor1");
        classIndex1.innerHTML = setCounterOne;
        classIndex1.classList.add("circleColor1");
        setCounterOne--;
        // очищаем счетчик и добавляем класс(желтый)
        if(setCounterOne <= 3) {
            classIndex1.innerHTML = "";
            classIndex1.classList.add("circleBGColor2");
        }
        // при достижении нуля останавливаем таймер и удаляем клас(желтый и красный)
        if (setCounterOne == 0) {
            clearInterval(timeoutId);
            classIndex1.classList.remove("circleBGColor2", "circleColor1");
            classIndex0.classList.remove("circleBGColor1");
            let timeId = setInterval(function() {
                // добавляем класс(зелёный)
                classIndex2.classList.add("circleBGColor3");
                classIndex1.innerHTML = setCounterTwo;
                classIndex1.classList.add("circleColor2");
                // добавляем второй счётчик
                if(setCounterTwo <= 3) {
                    // мигание
                    setTimeout(function() {
                        classIndex2.classList.remove("circleBGColor3");
                    }, 500);
                }
                if(setCounterTwo == 0) {
                    clearInterval(timeId);
                    classIndex1.innerHTML = "";
                    classIndex1.classList.remove("circleColor2");
                }
                setCounterTwo--;
            }, 1000);
        }
    },1000);
}
// функция - подсчет таймаутов
let totalCounter;
function sumTimeout(counterOne, counterTwo) {
    let sumCounterOne = counterOne * 1000;
    let sumCounterTwo = counterTwo * 1000;
    totalCounter = (sumCounterOne + sumCounterTwo) + 1000;
    return totalCounter;
}
// рекурсия setTimeout
setTimeout(function restartCounter() {
    // счётчик
    let addCounterOne = 10;
    let addCounterTwo = 7;
    // вызов подсчет таймаутов
    sumTimeout(addCounterOne, addCounterTwo);
    // вызов светофора counter( первый счётчик , второй счётчик, класс с индексом [0], класс с индексом [1], класс с индексом [2]);
    counter(addCounterOne, addCounterTwo, circle[0], circle[1], circle[2]);
    setTimeout(restartCounter, totalCounter);
},100);

