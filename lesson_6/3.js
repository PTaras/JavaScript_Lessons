/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение

const result = every(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'number';
});

console.log(result); // true

exports.every = every;


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

const every = function(array, callback) {
    var i;
    var length = array.length;

    for (i = 0; i < length; i = i + 1) {
      if (!callback(typeof array[i] === 'number', i, array)) {
        return false;
      }
    }
    return true;
  };

const result = every(array, function(array) {
    return array;
});

console.log(result);
