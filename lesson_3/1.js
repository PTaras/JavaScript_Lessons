/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(str) {

    let upStr = str.charAt(0).toUpperCase() + str.slice(1);

    if (typeof str === 'string') {
        return upStr;
    }
}

console.log(upperCaseFirst('pitter'));
console.log(upperCaseFirst(''));