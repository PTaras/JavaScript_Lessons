/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение

const result = reduce(
    array,
    (accumulator, element, index, arrayRef) => {
        console.log(`${index}:`, accumulator, element, arrayRef);

        return accumulator + element;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;


function isArr(array) {
    if (Array.isArray(array) === false) {
        throw new Error('The first parameter is not an array.');
    }
}

function isFunction(callback) {
    if (typeof callback !== 'function') {
        throw new Error('The second parameter is not a function.');
    }
}

const reduce = function (array, callback, INITIAL_ACCUMULATOR) {
    var i;
    var length = array.length;
    var result = INITIAL_ACCUMULATOR;

    for (i = 0; i < length; i = i + 1) {
        result = callback(result, array[i], i, array);
    }
    return result;
};

const result = reduce(array, function(sum, current) {
    return sum + current;
  }, INITIAL_ACCUMULATOR);

console.log(result);
