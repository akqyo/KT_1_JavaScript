alert("Задание номер 2");
let temp = prompt("Введите температуру");
let weather = prompt("Введите погоду");
let activity = "";

temp = Number(temp);

if (temp >= 25 && weather == "clear") {
  activity = "golf";
} else if (temp >= 10 && temp < 25 && weather === "cloudy") {
  activity = "bowling";
} else {
  activity = "hiking";
}
console.log(activity);
