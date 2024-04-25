//1 Завдання
// У вас є масив об’єктів fruts, і в кожному з них є name // Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomato" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let result = fruts.map(item => item.name);
// console.log(result);

//2 Завдання
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i < 12; i++) {
//   if (i % 2 === 1) continue
//   console.log(i)
// }

// 3 Завдання
// Замініть цикл "for" на "while" // for (let i = 0; i < 5; i++) { //     console.lpg( `цифра ${i}!` ); //   }

// let i = 0;
// while (i < 5) {
//   console.log(`5 ${i}!`);
//   i++;
// }

// 4 Завдання
//Напишіть цикл, який пропонує prompt ввести число більше за 100. //Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі. //Цикл повинен запитувати число доти, доки відвідувач не введе число, // більше за 100, або не скасує ввід/введе п

// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);


// 5 Завдання

// Вирахуйте середній вік //

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ]

// let arr = [23, 29, 10, 20];

// let summ = arr.reduce((summ, item) => summ + item) / arr.length;
// console.log(summ);