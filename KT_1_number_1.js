alert("Задание номер 1");
let price = prompt("Введите число");
let range = prompt("Введите month/day/week");

if (range === "month") {
  console.log(price, "Р в месяц");
} else if (range === "week") {
  console.log(price, "Р в неделю");
} else if (range === "day") {
  console.log(price, "Р в день");
}
