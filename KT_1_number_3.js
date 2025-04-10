alert("Задание номер 3");
let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));
let operation = prompt('Введите оператор "-", "+", "/", "*"');

if (operation === "-") {
  console.log(a - b);
} else if (operation === "+") {
  console.log(a + b);
} else if (operation === "/") {
  if (b !== 0) {
    console.log(a / b);
  } else {
    console.log("На ноль делить нельзя");
  }
} else if (operation === "*") {
  console.log(a * b);
} else {
  console.log("Неизвестная операция");
}
