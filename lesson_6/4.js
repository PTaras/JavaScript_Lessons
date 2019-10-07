/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 * 
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение

const result = some(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'string';
});

console.log(result); // true

exports.some = some;



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

const some = function(array, callback) {
    var i;
    var length = array.length;

    for (i = 0; i < length; i = i + 1) {
      if (callback(typeof array[i] === 'string', i, array)) {
        return true;
      }
    }
    return false;
  };

const result = some(array, function(array) {
    return array;
});

console.log(result);
