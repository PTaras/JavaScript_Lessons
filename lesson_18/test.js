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

class DB {
    constructor(person, name, age, country, salary) {
        this.person = person;
        this.name = name;
        this.age = age;
        this.country = country;
        this.salary = salary;
    }
    create(person) {
        const privateData = new Map();
        let privateId = 0;

        if (typeof person !== 'object') {
            throw new Error('Parameter must be an object!')
        }
        
        Object.defineProperty(this, '_id', { value: privateId++ });
        privateData[this._id] = {
            person,
        };
        console.log('1', privateData);
        return privateData;
    };
    read(id) {
        if (typeof id !== 'string' && id === '') {
            throw new Error('Parameter must be a string and don`t empty!')
        }

        if (id === 'undefined') {
            return null;
        }
        return person;
    }
    readAll() {
        const privateData = new Map();
        return privateData;
    }
    update(_id, person){
        const privateData = new Map();
        privateData.set(_id, person);
        console.log('2',privateData);
    }
    delete(_id){
        const privateData = new Map();
        privateData.delete(_id);
        console.log('3',privateData);
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



var myMap = new Map();

// Добавление нового элемента объекту Map
myMap.set('bar', 'foo');
myMap.set(1, 'foobar');
console.log(myMap);

// Обновление существующего элемента
myMap.set('bar', 'baz');
console.log(myMap);
