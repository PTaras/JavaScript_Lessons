/**
 * Задача 1.
 *
 * Напишите имплементацию функции Function.prototype.bind().
 *
 * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
 * и возвращать новую, привязанную версию целевой функции.
 *
 * Функция bind() должна обладать следующими параметрами:
 * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
 * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
 * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
 *
 * Генерировать ошибки если:
 * - Первый параметр не является типом function;
 * - Второй параметр не является типом object;
 * - Второй параметр является массивом.
 *
 * Условия:
 * - Использовать встроенную функцию Function.prototype.bind() запрещено.
 */

// Решение

// function getName(greeting, message) {
//     return `${greeting} ${message} ${this.name}.`;
// }

// const user = { name: 'Walter', getName };
// const oliver = { name: 'Oliver' };

// const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

// console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
// console.log(boundedGetName()); // Hello! I am Oliver.

// exports.bind = bind;

function isFirstParamFunc(greeting) {
    if (typeof greeting !== 'function') {
        throw new Error('The first parameter is not a function.');
    }
}

function isSecondParamFunc(message) {
    if (typeof message !== 'object') {
        throw new Error('The second parameter is not a object.');
    }
}

function isSecondParamArr(message) {
    if (Array.isArray(message)) {
        throw new Error('The second parameter is not an array.');
    }
}

function getName(greeting, message) {
    return `${greeting} ${message} ${this.name}.`;
}

const user = { name: 'Walter', getName };
const oliver = { name: 'Oliver' };

const bind = function(greeting, message) {
    isFirstParamFunc(greeting);
    isSecondParamFunc(message);
    isSecondParamArr(message);

    let bindArguments = [].slice.call(arguments, 2);
    return function() {
      let funcArguments = [].slice.call(arguments);
      return greeting.apply(message, bindArguments.concat(funcArguments));
    };
}

const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
console.log(boundedGetName()); // Hello! I am Oliver.
