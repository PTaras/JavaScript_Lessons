/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 * 
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// Решение

// f(1); // Воскресенье
// f(4); // Среда

// exports.f = f;

function isNumber(arg) {
    if (typeof arg !== 'number') {
        throw new Error('All parameters type should be have a number type.');
    }
}

function numberBetween(arg) {
    if (arg > 7 || arg < 1) {
        throw new Error('All parameters type should be have a number type in between 1-7.');
    }
}

function f(a) {
    isNumber(a);
    numberBetween(a);

    const days = { 7: 'Суббота', 1: 'Воскресенье', 2: 'Понедельник', 3: 'Вторник', 4: 'Среда', 5: ' Четверг', 6: 'Пятница' };

    const result = days[a];

    return result;
}

const result = f(1);
console.log(result);
