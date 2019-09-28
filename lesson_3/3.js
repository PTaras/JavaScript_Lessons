/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение

function truncate(string, maxLength) {
    
    let lenStr = string.length;
    let newString = string.slice(0, maxLength - 3) + '...';

    if (typeof string === 'string' && typeof maxLength === 'number' && lenStr > maxLength) {
        return newString;
    }
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21));