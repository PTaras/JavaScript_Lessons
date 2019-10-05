/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было пeредано не число.
 */

// Решение

// console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

// exports.f = f;

function validate(arguments, item) {
    for (item of arguments) {
        if (typeof item !== 'number') {
            throw new Error('All arguments type should be have a number type.');
        }
    }
};

const sumArg = function () {
    validate(arguments);
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
};

const result = sumArg(1, 1, 1, 2, 1, 1, 1, 1);
console.log(result);





