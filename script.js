// let arr = [confirm("так чи ні"),confirm("так чи ні"),confirm("так чи ні")]



// let arr2 = []
// arr2[0] = [prompt("Вкажіть відповідь")]
// arr2[1] = [prompt("Вкажіть відповідь")]


// let arr3 = ["a","b","c","d","e","f","g","h","i","j","k","l","m"];
// alert(arr3[prompt(`вкажіть значення індексу від 0 до ${arr3.length}`)-1]);


// let arr4 = ["a","b","c","d","e","f","g","h","i","j","k","l","m"];
// arr4[prompt(`Вкажіть значення індексу від 0 до ${arr4.length}`)-1] = prompt("Вкажіть відповідь")




// const arr5 = [
//     [0, 0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4, 5],
//     [0, 2, 4, 6, 8, 10],
//     [0, 3, 6, 9, 12, 15],
//     [0, 4, 8, 12, 16, 20],
//     [0, 5, 10,15, 20, 25],
//   ]; 
// // //   alert(arr5[prompt("Вкажіть значення від 0 до 5")][prompt("Вкажіть значення від 0 до 5")])

// const arr6 = arr5.slice(1).map(arr6 => arr6.slice(1));



// let word = prompt("Вкажіть декілька слів").split(" ");
// let arrWord = word.indexOf(prompt("Вкажіть одне слово з вище вказаних"))
// if (arrWord > -1) {
//     alert(++arrWord)
// } else {
//     alert("Такого слова незнайдено")
// }


// arr7 = []
// for (let i = 0; i < 5; i++) {
//   arr7.push(prompt("Вкажіть значення"));
// }

// arr8 = [];
// for (let i = 0; i < 5; i++) {
//     arr8.push(arr7.pop());
// }

// arr9 = [];
// for (let i = 0; i < 5; i++) {
//     arr9.unshift(arr8.shift());
// }





// const arr5 = [
//     [0, 0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4, 5],
//     [0, 2, 4, 6, 8, 10],
//     [0, 3, 6, 9, 12, 15],
//     [0, 4, 8, 12, 16, 20],
//     [0, 5, 10,15, 20, 25],
//   ]; 
//   copyArr5 = [...arr5]

// const arrCopy2 = JSON.parse(JSON.stringify(copyArr5));


// arr = [1,2,3,4,5]; 
// arr2 = arr;
// arr === arr2


// let arrFlat = [...arr6.flat()]
// console.log(arrFlat.length)




// const inputString = prompt('Введіть рядок:');
// // const [first,,,four,,,,,nine]=inputString 
// // console.log(first,four,nine)

// const [,two ="!",four ="!",five ="!"] = inputString;
// console.log(two,four,five)

// arrName = ["John", "Paul", "George", "Ringo"]
// for (arrName of arrName){
//     alert(arrName)
// }



// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let   str = "<select>"
// for (const currency of currencies){
//  str+= `<option value="${currency}">${currency}</option>`
// }
// str+= "</select>"
// document.write(str) 



// const names = ["John", "Paul", "George", "Ringo"]
// let   str = "<table>"
// for (const name of names){
//     str+= `<td><th>${name}</th></td>`
// }
// str+= "</table>"
// document.write(str) //document.write отобразит ваш HTML на странице



// const names = ["John", "Paul", "George", "Ringo"]
// let   str = "<table>"
// for (const name of names){
// str+= `<tr><td>${name}</td></tr>`
// }
// str+= "</table>"
// document.write(str) //document.write відобразить ваш HTML на сторінці



// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let   str = "<table>"
// for (const currency of currencies){ 
//     console.log(currency)
//     for (const letter of currency){
//     }
//     str += `<tr>`
//     str += `<td>${currency[0]}`
//     str += `<td>${currency[1]}`
//     str += `<td>${currency[2]}`
//     str += `</tr>`
// }
// str+= "</table>"
// document.write(str)




// let str = prompt("Вкажіть ваше слово")
// str1 = str[0].toUpperCase() + str.slice()
// alert(str1)




// const input = prompt("Введіть рядок:");
// const words = input.split(" ");
// const capitalizedWords = words.map(word => capitalize(word));
// const output = capitalizedWords.join(" ");
// console.log(output);
// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }



// const notAllowedWords = ['bad', 'forbidden', 'wrong'];
// function isWordAllowed(word) {
//   return !notAllowedWords.includes(word);
// }
// const userInput = prompt("Введіть рядок:");

// const words = userInput.split(" ");

// const filteredWords = words.filter(isWordAllowed);

// const result = filteredWords.join(" ");
// console.log(result);


// function censorWords(sentence, forbiddenWords) {
//     const words = sentence.split(" ");
//     const censoredWords = words.map((word) =>
//       forbiddenWords.includes(word) ? "BEEP" : word
//     );
//     return censoredWords.join(" ");
//   }
  
//   const sentence = prompt("Вкажіть ваші слова");
//   const forbiddenWords = ["заборонене", "слово"];
//   const censoredSentence = censorWords(sentence, forbiddenWords);
//   console.log(censoredSentence);