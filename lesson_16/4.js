/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение
class Stringer {
    constructor(string) {
        this.string = string;
    }

    reverse(string) {
        let reverse = this.string = string.split("").reverse().join("");

        return reverse;
    }

    uppercaseFirst(string) {
        let uppercaseFirst = string.charAt(0).toUpperCase() + string.slice(1);

        return uppercaseFirst;
    }

    uppercaseAll(string) {
        let uppercaseAll = string.split(/\s+/).map(str => str[0].toUpperCase() + str.substring(1)).join(' ');

        return uppercaseAll;
    }
}

const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;