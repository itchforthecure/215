// Задание 1

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  
  const arr = [1, 2, 3, 4, 5];
  alert(sumArray(arr)); 


//   Задание 2

function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }
  alert(getDivisors(12));


  // Задание 3

  function stringToArray(str){
    return str.split('');
  }
  var string = "Hello, World!";
  var array = stringToArray(string);
  console.log(array); 


  // Задание 4

  function reverseString(str){
    return str.split('').reverse().join('');
  }
  var string = "Hello, World!";
  var reversedString = reverseString(string);
  console.log(reversedString); 


  // Задание 5

  function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  var string = "hello, world!";
  var capitalizedString = capitalizeFirstLetter(string);
  console.log(capitalizedString); 


  // Задание 6

  function capitalizeWords(str){
    var words = str.split(" ");
    for(var i = 0; i < words.length; i++){
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
  var string = "hello, world!";
  var capitalizedString = capitalizeWords(string);
  console.log(capitalizedString);


  // Задание 7

  function fillArray(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }  
  var myArray = fillArray(5);
  console.log(myArray); 


  // Задание 8

  function sumDigits(num) {
    var sum = 0;
    var digits = num.toString().split('');
    for (var i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i]);
    }
    return sum;
  }  
  var mySum = sumDigits(123);
  console.log(mySum); 


  // Задание 9

  function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  var myYear = 2020;
  if (isLeapYear(myYear)) {
    console.log(myYear + ' - високосный год');
  } else {
    console.log(myYear + ' - обычный год');
  }


  // Задание 10

  function secondsToDays(seconds) {
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    return days;
  }
  var mySeconds = 86400; // количество секунд в одном дне
  var result = secondsToDays(mySeconds);
  console.log(result); // выводит 1, т.к. 86400 секунд = 1 день


  // Задание 11

  function getRandomElement(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  var myArray = ["apple", "banana", "orange", "grape"];
  var result = getRandomElement(myArray);
  console.log(result); // выводит случайный элемент из массива myArray


  // Задание 12

  function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(7)); // true
  console.log(isPrime(12)); // false