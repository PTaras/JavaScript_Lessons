/*
# Задача 1

Создать класс `DB` который будет имплементировать `CRUD` модель.
В качестве структуры данных использовать `Map`.

Метод `create`:
    - принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
    - возвращает `id` при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
Метод `read`:
    - принимает идентификатор пользователь
    - если такого пользователя нет возвращать `null`
    - если есть — возвращать объект пользователя с полем `id` внутри объекта.
    - если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
Метод `readAll`:
    - возвращает массив пользователей
    - генерировать ошибку если в метод `readAll` передан параметр
Метод `update`:
    - обновляет пользователя
    - принимает 2 обязательных параметра
    - генерирует ошибку если передан несуществующий `id`
    - генерирует ошибку если передан `id` с типом не строка
    - генерирует ошибку если второй параметр не валидный
Метод `delete`:
    - удаляет пользователя
    - Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`
*/

// Решение
const privateData = new Map();
class DB {
    constructor(person, name, age, country, salary) {
        this.person = person;
        this.name = name;
        this.age = age;
        this.country = country;
        this.salary = salary;
    }

    create(person) {
        function getRandomID(min, max) {
            const int = Math.floor(Math.random() * (max - min + 1)) + min;

            return int.toString(36);
        }

        const id = getRandomID(0, 1679615);

        if (typeof person !== 'object') {
            throw new Error('Parameter must be an object!')
        }

        Object.defineProperty(this, 'id', { value: id });
        privateData.set(id, person);

        return id;
    };

    read(id) {
        if (typeof id !== 'string' || id === '') {
            throw new Error('Parameter must be a string and don`t empty!')
        }

        if (id === 'undefined') {
            return null;
        }
        const readPerson = { id, ...person };

        return readPerson;
    }

    readAll(...args) {
        if (args.length !== 0) {
            throw new Error('The method readAll() should be without parameters!')
        }

        let arr = privateData.entries();

        return arr;
    }

    update(id, age) {
        if (typeof id !== 'string') {
            throw new Error('id must be a string!')
        }

        if (id === 'undefined') {
            throw new Error('id should not be undefined!')
        }

        if (typeof age !== 'object') {
            throw new Error('age not valid!')
        }

        person.age = age;
    }
    
    delete(id) {
        if (typeof id !== 'string') {
            throw new Error('id must be a string!')
        }

        if (id === 'undefined') {
            throw new Error('id should not be undefined!')
        }

        privateData.delete(id);
    }
}

// Проверка
const db = new DB();

const person = {
    name: "Pitter", // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // массив пользователей
db.update(id, { age: 22 }); // id
db.delete(id); // true