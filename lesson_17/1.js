/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение
function validate(start) {
    if (typeof start !== 'number') {
        throw new Error('First parameter type should be have a number type.');
    }
}

function validate(end) {
    if (typeof end !== 'number') {
        throw new Error('Second parameter type should be have a number type.');
    }
}

const postpone = (start, end, delay) => {
    validate(start);
    validate(end);

    for (let i = start; i <= end; i++) {
        setTimeout(() => {
            console.log(i);
        }, delay * i);
    };

    for (let i = start; i >= end; i--) {
        setTimeout(() => {
            console.log(i);
        }, delay * (start - (i - 1))); 
    };

}

postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;