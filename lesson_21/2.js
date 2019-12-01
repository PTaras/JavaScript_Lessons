/*
# Задача 2

Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

**Обратите внимание**:

1. Функция `getCustomers` должна возвращать промис;
2. Использование `async & await` **запрещено**;
3. Использование посторонних библиотек **запрещено**;
4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
5. Склеивание происходит **только** для объектов с флагом `verified: true`.
*/

// Решение
const getCustomers = (array_1, array_2) => {
    return new Promise((resolve, reject) => {

        setTimeout(function () {
            const arr = [];

            for (let i = 0; i < array_1.length; i++) {
                if (array_1[i].verified === true) {
                    for (let j = 0; j < array_2.length; j++) {
                        if (array_1[i].id === array_2[j].id) {

                            const obj = { ...array_1[i], ...array_2[j] };

                            arr.push(obj);

                            resolve(arr);

                        } else {
                            reject(`We don't have information about country for this customer: ${array_1[i].name}`);
                        }
                    }
                }
            }
        }, 0)
    });
}

// Пример использования

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))
