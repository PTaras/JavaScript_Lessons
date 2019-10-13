/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

// const result = createArray('x', 5);

// console.log(result); // [ x, x, x, x, x ]

// exports.createArray = createArray;

// function isString(arguments) {
//     if (typeof arguments !== 'string') {
//         throw new Error('The first parameter is not a string.');
//     }
// }

// function isNumber(arguments) {
//     if (typeof arguments !== 'number') {
//         throw new Error('The first parameter is not a number.');
//     }
// }

// function isObject(arguments) {
//     if (typeof arguments !== 'object') {
//         throw new Error('The first parameter is not a object.');
//     }
// }

// function isArr(arguments) {
//     if (Array.isArray(arguments) !== true) {
//         throw new Error('The first parameter is not an array.');
//     }
// }

function isFirstParam(arguments) {
    if (typeof arguments !== 'string' && arguments !== 'number' && arguments !== 'object' && Array.isArray(arguments) !== true) {
        throw new Error('The first parameter is not a string or number or object or array.');
    }
}

function isSecondParam(len) {
    if (typeof len !== 'number') {
        throw new Error('The second parameter is not a number.');
    }
}

const createArray = function(arguments, len){
    isFirstParam(arguments);
    isSecondParam(len);

    const result = new Array(len).fill(arguments);
    return result;
}

console.log(createArray('x', 5));


