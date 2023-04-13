console.log("<p>Первое задание</p>"); //++
function first1(a, b, c) {
  let result = (a - b) / c;
  return result;
}

let a = 10,
  b = 2,
  c = 2;
console.log(first1(a, b, c));

console.log("<p>Второе задание</p>"); //++
function cube(a1) {
  let cube1 = a1 ** 3;
  let squareNumber = a1 ** 2;
  return [`Куб цифры равен ${cube1}`, `Квадрат цифры равен ${squareNumber}`];
}
let a1 = 2;
console.log(cube(a1));

console.log("<p>Третье задание</p>"); //++
function minMax() {
  a2 = 20;
  b2 = 10;
  if (a - b > 0) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }
  return [
    `Минимальное значение равно ${min}`,
    `Максимальное значение равно ${max}`,
  ];
}
console.log(minMax());

// console.log("<p>Четвертое задание</p>"); //++
// Простой вариант

function zap() {
  console.log("<p>Четвертое задание</p>");
  let start1;
  let start2;
  while (true) {
    start1 = +prompt(`Введите первое значение`, 1);
    if (Number.isNaN(start1)) {
      alert("Это не цифра!");
    } else {
      while (true) {
        start2 = +prompt(`Введите второе значение`, 2);
        if (Number.isNaN(start2)) {
          alert("Это не цифра!");
        } else {
          break;
        }
      }
      break;
    }
  }
  function arr1(a, b) {
    let total1 = [];
    for (i = a; i < b; i++) {
      total1.push(i);
    }
    return total1;
  }
  return console.log([start1, start2], arr1(start1, start2));
}

// Сложный вариант
// let start = prompt(`Введите два значения через пробел или запятую`, 1);
// if (start.includes(" ")) {
//   start = start.split(" ");
// } else {
//   start = start.split(",");
// }
// console.log(arr(+start[0], +start[1]));
// function arr(a, b) {
//   let total = [];
//   for (i = a; i < b; i++) {
//     total.push(i);
//   }
//   return total;
// }
console.log("<p>Пятое задание</p>"); //++
function isEven(a) {
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log("<p>Шестое задание</p>"); //++
function arr(a) {
  total = [];
  for (i = 0; i < a.length; i++) {
    if (isEven(a[i])) {
      total.push(a[i]);
    }
  }
  return total;
}
console.log(arr([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log("<p>Седьмое задание</p>");

// console.log("<p>Восьмое задание</p>");    //++
function spruce() {
  console.log("<p>Восьмое задание</p>");
  let start3;
  while (true) {
    start3 = +prompt(`Значение`, 5);
    if (Number.isNaN(start3)) {
      alert("Это не цифра!");
    } else {
      break;
    }
  }
  let a1 = " ";
  let b1 = "*";
  for (i = 0; i < start3; i++) {
    console.log(a1.repeat(start3 - 1 - i) + b1.repeat(i * 2 + 1));
  }

  for (i = start3; i >= 1; i--) {
    console.log(a1.repeat(start3 - i) + b1.repeat(i * 2 - 1));
  }
}
console.log("<p>Девятое задание</p>"); //++
let a3 = 1;
let b3 = 1;
let c1 = 0;
let total2 = [];
total2.push(a3, b3);
for (i = 0; i < 1000; i++) {
  if (a3 + b3 > 1000) {
    break;
  }
  total2.push(a3 + b3);
  c1 = a3 + b3;
  a3 = b3;
  b3 = c1;
  c1 = 0;
}
if (total2 > 1000) {
  total2 = total2.length - 2;
}
console.log(total2);

console.log("<p>Десятое задание</p>"); // ++

function sum(a) {
  a = String(a);
  let b5 = 0;
  for (i = 0; i < a.length; i++) {
    b5 += +a[i];
  }
  if (b5 > 9) {
    return sum(b5);
  } else {
    return b5;
  }
}
console.log(sum(24343454654));

console.log("<p>Одиннадцатое задание</p>"); // ++
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let id = 0;
function arr3() {
  if (arr2[id] == undefined) {
    return;
  } else {
    console.log(arr2[id]);
    id += 1;
    return arr3(arr2.slice(id));
  }
}
arr3();
console.log("<p>Двенадцатое задание</p>");
function homeWork() {
  let name = prompt("Введите ваше имя");
  let family = prompt("Введите вашу фамилию");
  let surname = prompt("Введите ваше отчество");
  let group = prompt("Введите номер вашей группы");
  let symbol = "*";

  let first = symbol + " " + `Домашняя работа: "Функции"` + " " + symbol;
  let second =
    symbol + " " + `Выполнил: студент гр.` + " " + group + " " + symbol;
  let lost = symbol + " " + family + " " + name + " " + surname + " " + symbol;

  let max1 = Math.max(first.length, second.length, lost.length);
  console.log(symbol.repeat(max1));
  console.log(first);
  console.log(second);
  console.log(lost);
  console.log(symbol.repeat(max1));
}
// document.write("<p>Тринадцатое задание</p>")
