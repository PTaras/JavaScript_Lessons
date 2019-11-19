/*
# Задача 2

Улучшить класс `DB` из предыдущей задачи.

- Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
- Генерировать ошибку, если query не валидный
- Поля `name` и `country` ищут 100% совпадение
- Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
- Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса
*/

// Решение
const privateData = new Map();
class DB {
  constructor(person, name, age, country, salary, query) {
    this.person = person;
    this.name = name;
    this.age = age;
    this.country = country;
    this.salary = salary;
    this.query = query;
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

    const arr = privateData.entries();

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

    // privateData.delete(id);
  }
  find(query) {
    if (typeof query !== 'object') {
      throw new Error('query must be an object!')
    }

    if (typeof query === 'undefined') {
      throw new Error('query should not be empty!')
    }

    const arr = [];
    privateData.forEach(function (value, key) {
      if (arr.name === query.name) {
        if (arr.country === query.country) {
          if (query.age.min >= value.age && value.salary >= query.salary.min && value.salary <= query.salary.max) {
            arr.push(value, key);

            return arr;
          }
        }
      }

      return arr;
    });
  }
}
const db = new DB();
const person = {
  name: "Pitter", // обязательное поле с типом string
  age: 21, // обязательное поле с типом number
  country: "ua", // обязательное поле с типом string
  salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
const customer = db.read(id);
// Проверка
const query = {
  country: "ua",
  age: {
    min: 21
  },
  salary: {
    min: 300,
    max: 600
  }
};

const customers = db.find(query); // массив пользователей
