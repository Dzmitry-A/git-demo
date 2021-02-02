// 1. Цикл, который будет выводить число а, пока оно не станет менше 10 

for (let i = 50; i > 9; i--) {
	console.log(i);
}

// 2. Выполнить задачи из ссылки на теорию
// 2.1 При помощи цикла for выведите четные числа от 2 до 10

for (let j = 1; j < 10; j++) {

  if (j % 2 == 0) {
    console.log(j);
  }

}
/* 2.2 Перепишите код, заменив цикл for на while, без изменения поведения цикла
 for (let i = 0; i < 3; i++) {
// alert( `number ${i}!` );
 } */

let k = 0;
while (k < 3) {
	console.log( `number ${k}!` );
	k++;
}

// 2.3 Повторять цикл, пока ввод неверен (файл Cycles.html)

// 2.4 Вывести простые числа

let n = 100;

metka:
for (let l = 2; l <= n; l++) { 

  for (let m = 2; m < l; m++) { 
    if (l % m == 0) continue metka; 
  }

  console.log(l);  
}