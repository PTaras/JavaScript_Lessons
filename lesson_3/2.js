/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение:

function checkSpam(source, example) {

    let lowerSource = source.toLowerCase();
    let lowerExample = example.toLowerCase();
    let srcIncExample = lowerSource.includes(lowerExample);

    if (typeof source === 'string' && typeof example === 'string') {
        return srcIncExample;
    }
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx'));
console.log(checkSpam('pitterxxx@gmail.com', 'XXX'));