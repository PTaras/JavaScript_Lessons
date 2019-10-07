/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

const filteredArray = filter(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return element === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;


const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

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

const filter = function (array, callback) {
    isArr(array);
    isFunction(callback);

    var i;
    var length = array.length;
    var result = ['Добрый вечер!'];

    for (i = 0; i < length; i = i + 1) {
        if (callback(array[i], i, array)) {
            return result;
        }
    }
};

const filteredArray = filter(array, function(array) {
    return array;
});

console.log(filteredArray);
