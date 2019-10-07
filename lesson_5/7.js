/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 */

// Решение

// getDivisors(12); // [1, 2, 3, 4, 6, 12]

// exports.getDivisors = getDivisors;

function isNumber(arg) {
    if (typeof arg !== 'number') {
        throw new Error('All parameters type should be have a number type.');
    }
}

function numberBetween(arg) {
    if (arg <= 1) {
        throw new Error('All parameters type should be have a number > 1.');
    }
}

function getDivisors(a) {
    isNumber(a);
    numberBetween(a);

    const result = [];
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            result.push(i);
        }
    }
    return result;
}

const result = getDivisors(12);
console.log(result);
