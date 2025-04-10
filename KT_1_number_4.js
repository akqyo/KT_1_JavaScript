alert("Задание номер 4");
let word = prompt("Введите слово");
let result = 0;
let word_lenght = Number(word.length);
let word_sqrt = Math.floor(Math.sqrt(word_lenght));
if (word_sqrt ** 2 === word_lenght) {
  result = 1;
} else {
  result = 0;
}
console.log(result);
