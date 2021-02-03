// 1. Создать объект, добавить к нему свойство

let user = {
name: 'John'
}
console.log ( user.name );

// 2. Изменить свойство объекта 

user.name = 'Pete';
console.log ( user.name );

// 3. Сделать свойство объекта фунецией сложения двух чисел

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log ( sum );