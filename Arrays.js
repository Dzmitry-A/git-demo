// 1. Перебор массива с выводом в консоль кажого элемента
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
// 2. Перобразовать массив в строку и обртано в массив 
let str = String(arr);
console.log(str);

let arr1 = str.split(',');
console.log(arr1);

// 3. Добавить к каждому элементу массива слова hello 
let arr2 = ['Дима', 'Вася', 'Петя', 'Саша', 'Сергей'];

let namesWithGreeting = (arr2) => {
return arr2.map(name => 'Привет ' + name);
}
let arr3 = namesWithGreeting(arr2);
console.log(arr3);

// 4. Преобразовать числовой массив в boolean
let arr4 = [];
for (let i = 0; i < arr.length; i++) {
	arr4[i] = !!arr[i];
}	
console.log(arr4);