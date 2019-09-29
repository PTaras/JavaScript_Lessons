/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

// const person = {};

// Решение

const person = {};

Object.defineProperties(person, {
    rate: {
        writable: true,
    },
    salary: {
        get() {
            const date = new Date();
            const today = date.getDate();

            if (person.rate !== undefined) {
                return this.salary = person.rate * today;
            }
            else {
                return this.salary = 0;
            }
        },
    },
});

person.rate = 30

console.log(person.salary);