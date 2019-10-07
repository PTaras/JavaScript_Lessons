/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

// isEven(3); // false
// isEven(4); // true

// exports.isEven = isEven;

function validate(arg) {
    if (typeof arg !== 'number') {
        throw new Error('All parameters type should be have a number type.');
    }
}

function isEven(a) {
    validate(a);

    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const result = isEven(2);
console.log(result);