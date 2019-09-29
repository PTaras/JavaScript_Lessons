/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

// Решение

const person = {
  get salary() {
    const date = new Date();
    const today = date.getDate();
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0);

    if (lastDayOfMonth - today > 20) {
      return this.salary = 'good salary';
    }
    else {
      return this.salary = 'bad salary';
    }
  },
};

console.log(person.salary);
