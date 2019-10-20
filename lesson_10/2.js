/**
 * Задача 2.
 *
 * Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске calculate() последовательно запускает коллбек-функции из аргументов.
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Первая коллбек-функция не принимает параметров.
 *
 * Функция calculate() должна вернуть результат выполнения последней коллбек-функции из цепочки.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов функции calculate() не является функцией;
 * - Любая функция из аргументов не вернула значение.
 */

// Решение

// exports.calculate = calculate;

const result = calculate(
    () => {
        return 7;
    },
    prevResult => {
        return prevResult + 4;
    },
    prevResult => {
        return prevResult * 5;
    },
);

function isParamFunc(...args) {
    for (i in args) {
        if (typeof args[i] !== 'function') {
            throw new Error('One of the parameters is not a function.');
        }
    }
}

function returnFunc(...args) {
    for (i in args) {
        if (args[i]() === undefined) {
            throw new Error('Function did not return value.');
        }
    }
}

function calculate(...args) {
    isParamFunc(...args);
    returnFunc(...args);

    let result = 0;
    for (i in args) {
        result = args[i](result);
    }
    return result;
}

console.log(result); // 55