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


// function isArr(Array) {
//     if (Array.isArray === false) {
//         throw new Error('Parameters type should be have a Array.');
//     }
// }

// function isEmpty(Array) {
//     if (Array.length == 0) {
//         throw new Error('Array must not be empty.');
//     }
// }

function rec(items) {
  // isArr(myArray);
  // isEmpty(myArray);

  return items.length === 0 ? 0 : items.splice(0, 1);
}

console.log(rec([5, 2, 4, 7]));


