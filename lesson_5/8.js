/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

// f([1, 2, 3]);
// 1
// 2
// 3

// exports.f = f;


function isArr(items) {
  if (Array.isArray === false) {
    throw new Error('Parameters type should be have a Array.');
  }
}

function isEmpty(items) {
  if (Array.length == 0) {
    throw new Error('Array must not be empty.');
  }
}


var i = 0;

function rec(items) {
  isArr(items);
  isEmpty(items);

  console.log(items[i]);
  i++;
  return i < items.length ? rec(items) : 0;
}

rec([1, 2, 3].splice(0, 3));

