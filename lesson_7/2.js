/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение

// const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
// console.log(collect(array1)); // 12

// const array2 = [[[[[1, 2]]]]];
// console.log(collect(array2)); // 3

// const array3 = [[[[[1, 2]]], 2], 1];
// console.log(collect(array3)); // 6

// const array4 = [[[[[]]]]];
// console.log(collect(array4)); // 0

// const array5 = [[[[[], 3]]]];
// console.log(collect(array5)); // 3

// exports.collect = collect;

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];

function isFirstParamArr(array1) {
    if (!Array.isArray(array1[0])) {
        throw new Error('The first parameter is not an array.');
    }
}

function isAllParamArr(array1) {
    for (var i = 0, len = array1.length; i < len; i++) {
        if (typeof array1[i] === 'number') {
            throw new Error('All parameter of array must be an array.');
        }
    }
}
function isAllParamNumber(array1) {
    var res = array1.flat(Infinity);   // ругается vs code
    var res2 = res.every(item => item === 'number');

    if (res2 === false) {
        throw new Error('All parameter of array must be a number and array.');
    }
}

isFirstParamArr(array1);
isAllParamArr(array1);
isAllParamNumber(array1);

const collect = function(array1) {

    const len = array1.length;
    if(len === 0) {
        return 0;
    }
    return array1.reduce(function (item, toFlat) {
        return item.concat(Array.isArray(toFlat) ? collect(toFlat) : toFlat);
    }, []);
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const result = collect(array1).reduce(reducer);
console.log(result);
