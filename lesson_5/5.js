/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

// isPositive(-3); // false
// isPositive(3); // true

// exports.isPositive = isPositive;

function validate(arg) {
    if (typeof arg !== 'number') {
        throw new Error('All parameters type should be have a number type.');
    }
}

function isPositive(a) {
    validate(a);

    if (a > 0) {
        return true;
    } else {
        return false;
    }
}

const result = isPositive(2);
console.log(result);