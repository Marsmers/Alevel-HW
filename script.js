// let number = prompt("Вкажіть число");
// if (isNaN(number)) { 
//  console.log("Помилка: Введений рядок не є числом.");
// } else {
//  if (number % 2 === 0) { 
//    console.log("Введене число є парним.");
//  } else {
//    console.log("Введене число є непарним.");
//  }
// }




// let text = prompt("Вкажіть слово")
// let censorship = text.indexOf("курва")
// if(censorship > -1){
//    alert("у тексті присунті неприпустимі слова")
// } else {
//     alert("у тексті все добре")
// }




// let question = confirm("Виспався?")
// if(question == true){
//     alert("Молодець")
// } else {
//     alert("Йди поспи")
// }
// let question1 = confirm("Поїв?")
// if(question1 == true){
//     alert("Досить їсти")
// } else {
//     alert("Йди поїж")
// }



// let size = prompt("Вкажіть ваш розмір одягу в форматі ,s,m,l,xl,xxl");
// if (size == "s"){
//     alert("ваш розмір одягу в італійській таблиці 8");
// } else if (size === "m"){
//     alert("ваш розмір одягу в італійській таблиці 10");
// } else if (size === "l"){
//     alert("ваш розмір одягу в італійській таблиці 12");
// } else if (size === "xl"){
//     alert("ваш розмір одягу в італійській таблиці 14");
// } else if (size === "xxl"){
//     alert("ваш розмір одягу в італійській таблиці 16");
// } else {
//     alert("Ви вказали неправильний розмір одягу.");
// }



// let sex = confirm("Ви чоловік?")? "Ви чоловік":"Ви жінка"
// alert(sex)



// let input = prompt("Введіть ваш  вік:"); 
// let number = parseInt(input); 
// alert(input > 0 || number > 0);



// let name = prompt("Вкажіть ваше ім`я") || ("Василь")
// let fatherName = prompt("Вкажіть як вас побатькові") || ("Васильович")
// let surName = prompt("Вкажіть ваше прізвище") || ("Василенко")
// console.log(name,fatherName,surName)



// let name = prompt("Вкажіть ваше ім`я") 
// let fatherName = prompt("Вкажіть як вас побатькові") 
// let surName = prompt("Вкажіть ваше прізвище") 
// if (name) {
// } else {
//     name = ("Василь")
// }
// if (fatherName) {
// } else {
//     fatherName = ("Васильович")
// }
// if (surName) {
// } else {
//     surName = ("Василенко")
// }
// console.log(name,fatherName,surName)



// let shopping = confirm("Шопінг?") || alert("Ти - бяка!");


// let shopping = confirm("Шопінг?");
// if (shopping){
//     alert("Погнали!")
// } else {
//     alert("Ти - бяка!")
// }



// let login = prompt("Вкажіть ваш логін")
// if (login === "admin") {
// let password = prompt("Вкажіть ваш пароль")
//     if (password === "qwerty") {
//         alert("Вітаю! Ви увійшли до системи.")
//     } else {
//         alert("Неправильний пароль.")
//     }

// } else {
//     alert("Користувача з таким логіном не знайдено.")
// }




// let currency = prompt("Вкажіть валюту usd або eur").toUpperCase();
// let buyAndSell = confirm("Ви хочете купити чи продати?")
// let rate;
// if (currency ==="USD") {
//     rate = buyAndSell ? 27.5 : 27.0;
// } else if (currency === "EUR"){
//     rate = buyAndSell ? 32.5 : 31.8;
// } else {
//     alert("На жаль, ми не обмінюємо цю валюту");
// }
// if("rate"){
//     let amount = prompt("Введіть суму для обміну");
//     let result = buyAndSell ? amount / rate : amount * rate;
//     alert(`Ви отримаєте ${result.toFixed(2)} гривень`)
// }



// const userChoice = prompt("Камінь, ножиці, або папір?");
// userChoice = userChoice.toLowerCase();
// const computerChoice = Math.floor(Math.random() * 3);
// if (computerChoice === 0) {
//     computerChoice = "камінь";
// } else if (computerChoice === 1) {
//     computerChoice = "ножиці";
// } else {
//     computerChoice = "папір";
// }
// alert("Комп'ютер вибрав: " + computerChoice);
// if (userChoice === "камінь" && computerChoice === "ножиці" ||
//     userChoice === "ножиці" && computerChoice === "папір" ||
//     userChoice === "папір" && computerChoice === "камінь") {
//     alert("Ви перемогли!");
// } else if (userChoice === computerChoice) {
//     alert("Нічия!");
// } else {
//     alert("Комп'ютер переміг!"); 
// } 