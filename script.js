'use strict';

// ? Sum of differences in array
//?Your task is to sum the differences between consecutive pairs in the array in descending order.
//?Ваша задача — просуммировать разности между последовательными парами массива в порядке убывания.//?
//?[2, 1, 10]  -->  9 In descending order: [10, 2, 1] Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// function sumOfDifferences(arr) {
// 	let result = 0;
// 	if (arr.length < 1 || arr === null) {
// 		return 0;
// 	}
// 	if (arr.length == 1) {
// 		return 0;
// 	}

// 	else {
// 		let currentArr = [];
// 		const arrSorted = arr.sort((a, b) => b - a);

// 		for (let i = 0; i < arrSorted.length - 1; i++) {
// 			let currentResult = (arrSorted[i] - arrSorted[i + 1]);
// 			currentArr.push(currentResult);
// 		}
// 		 result = currentArr.reduce(function (currentSum, currentNumber) {
// 			return currentSum + currentNumber
// 		 }, 0)
// 		return result;
// 	}
// }
// console.log(sumOfDifferences([2, 1, 10]));



//?accum("abcd") -> "A-Bb-Ccc-Dddd //Mumbling

//?This time no story, no theory. The examples below show you how to write function accum:
//?Первая буква посторяется 1 раз, 2 буква- два раза и тд.
//?accum("abcd") -> "A-Bb-Ccc-Dddd"
//?accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//?accum("cwAt") -> "C-Ww-Aaa-Tttt"
//?The parameter of accum is a string which includes only letters from a..z and A..Z.
// function accum(s) {
// 	let result = s.charAt(0).toUpperCase();
// 	for (let index = 1; index < s.length; index++) {
// 		let currentLetter = s.charAt(index).toLowerCase();
// 		result += '-' + currentLetter.toUpperCase();
// 		for (let count = 0; count < index; count++) {
// 			result += currentLetter;
// 		}

// 	}
// 	return result;

// }
// ? version 2
//? function accum(s) {
// ?	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// ?}
// console.log(accum("abcd"));

//?Shortest Word
//?Simple, given a string of words, return the length of the shortest word(s).
//?String will never be empty and you do not need to account for different data types.
//? Просто, учитывая строку слов, возвращаем длину самого короткого слова.
//?Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

// function findShort(s) {
// let words = s.split(' ');
// let currentArr = words.map(function (word) {
// 	return word.length;
// })
// let sortedArr = currentArr.sort((a, b) => (a - b));
// console.log(sortedArr);
// return sortedArr[0];

// return s.split(" ").map(function (word) { return word.length }).sort((a, b) => (a - b))[0];

// let shortWordLength = 1000;

// for (let i = 1; i < words.length; i++) {
// 	if (words[i].length < shortWord.length) {
// 		shortWord = words[i];
// 	}
// }
// for (let elem of words) {
// 	if (elem.length < shortWordLength) {
// 		shortWordLength = elem.length;
// 	}
// }


// return shortWordLength;
// }
// console.log(findShort("bitcoin take over they world maybe who knows perhaps c"));
/// ?Stop gninnipS My sdroW!
///?Write a function that takes in a string of one or more words, and returns the same string,
//?but with all five or more letter words reversed (Just like the name of this Kata).
///?Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//?Передаваемые строки будут состоять только из букв и пробелов.
//?Пробелы будут включены только в том случае, если присутствует более одного слова.

// ?spinWor3;eftpfrds( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

// function spinWords(string) {
// 	const stringArray = string.split(' ');
// 	let result = '';
// 	stringArray.map((str, i) => {
// 		if (str.length >= 5) {
// 			stringArray[i] = str.split('').reverse().join('');
// 		} else {
// 			stringArray[i] = str;
// 		}
// 		result = stringArray.join(' ');
// 	});
// 	return result;
// }
// console.log(spinWords("This is another test"));


//?Vowel Count
//?We will consider a, e, i, o, u as vowels for this Kata (but not y).
//?Return the number (count) of vowels in the given string.
//?Возвращает количество гласных в заданной строке

// function getCount(str) {
// 	return (str.match(/[aeiou]/gi) || []).length;
// }

// console.log(getCount('xel'));


//?Disemvowel Trolls
//?Например, строка «Этот сайт для неудачников LOL!» станет «Ths wbst s fr lsrs LL!
//?For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!
// function disemvowel(str) {
// 	let newStr = ' ';
// 	for (let index = 0; index <= str.length; index++) {
// 		if (str.charAt(index).toLowerCase() != 'a' && str.charAt(index) != ('e').toLowerCase() && str.charAt(index) != ('i').toLowerCase()
// 			&& str.charAt(index).toLowerCase() != ('o') && str.charAt(index).toLowerCase() != ('u')) {
// 			newStr += str.charAt(index);
// 		}
// 	}
// 	return newStr;

// }
// console.log(disemvowel("This website is for losers LOL!"));


//?Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
// const arr = [1, 10, 5, 20];
// let result = 0;
// for (let elem of arr) {
// 	let newArr = elem.toString().split("");
// 	if (newArr[0] === "1" || newArr[0] === "2") {
// 		result += elem;
// 		console.log(elem);
// 	}
// }
// console.log(result);

//?Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//?For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//?Note: The function accepts an integer and returns an integer

//?Добро пожаловать. В этом ката вас просят возвести в квадрат каждую цифру числа и соединить их.
//?Например, если мы пропустим через функцию 9119, получится 811181, потому что 92 — это 81, а 12 — это 1.
//?Примечание: функция принимает целое число и возвращает целое число.
// function squareDigits(num) {
// 	let array = Array.from(num.toString(), Number);
// 	let result = +(array.map(function (elem) {
// 		return elem * elem;
// 	}).join(''));
// 	return result;
// }
// console.log(squareDigits(3212));

//?

//?SevenAte9
//?Write a function that removes every lone 9 that is inbetween 7s.
//?Напишем функцию, которая удаляет каждую девятку, находящуюся между семерками.
//?"79712312" --> "7712312" or "79797"    --> "777"

// function sevenAte9(str) {
// 	let resultSymbol = [];
// 	if (str.length < 3) {
// 		return str;
// 	}
// 	resultSymbol.push(str[0]);
// 	for (let i = 1; i < str.length; i++) {
// 		if (str[i] === '9') {
// 			if (str[i + 1] || str[i - 1] != '7') {
// 			}
// 			else {
// 				resultSymbol.push(str[i]);
// 			}
// 		}
// 		else {
// 			resultSymbol.push(str[i]);
// 		}
// 	}

// 	return resultSymbol.join('');
// }
// console.log(sevenAte9("16556178612178977"));