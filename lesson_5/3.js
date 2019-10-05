/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

// console.log(f(9, 3, 2)); // 3

// exports.f = f;

function validate(arg) {
    if (typeof arg !== 'number') {
        throw new Error('All parameters type should be have a number type.');
    }
}

function f(a, b, c) {
    validate(a);
    validate(b);
    validate(c);

    const result = (a - b) / c;

    return result;
}

const result = f(9, 3, 2);
console.log(result);