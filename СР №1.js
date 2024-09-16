//Task 1
const randomNumber = Math.floor(Math.random() * 100) + 1;
let guessedNumbers = [];
let guess = null;

while (guess !== randomNumber) {  
  guess = parseInt(prompt("Введіть число від 1 до 100:"));
  guessedNumbers.push(guess);
  
  if (guess < randomNumber) {
    alert("Занадто мало! Спробуйте ще раз.");
  } else if (guess > randomNumber) {
    alert("Занадто багато! Спробуйте ще раз.");
  } else if (guess === randomNumber) {
    alert("Вітаємо! Ви вгадали число.");
  } else {
    alert("Будь ласка, введіть коректне число.");
  }
}
alert("Ваша історія спроб: " + guessedNumbers.join(", "));


//Task 2
let a = +prompt('Input number from 1 to 100:');

if (a % 3 === 0) {
	alert('Fizz');
  
} else if (a % 5 === 0) {
	alert('Buzz');
  
}else if (a % 3 === 0 && a % 5 === 0) {
alert('FizzBuzz');

}else alert(a);

//Task 3
let a = +prompt('Input a:');

while (a >= 0) {
alert(a);
a--
}

alert('Час вийшов!');