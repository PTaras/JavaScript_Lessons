/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

// console.log(f(2)); // 8

// exports.f = f;

function validate(arg) {
    if (typeof arg !== 'number') {
        throw new Error('All parameters type should be have a number type.');
    }
}

function cube(a) {
    validate(a);

    const result = a * a * a;

    return result;
}

const result = cube(2);
console.log(result);