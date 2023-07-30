// const temperature = (celsious) => {
//     let fahrenheit = (celsious*9/5+32)
//     alert(`Температура в фаренгейтах становить ${fahrenheit}`) 
// }
// temperature(celsious)




// let red = prompt("Вкажіть значення від 0 до 255")
// let green = prompt("Вкажіть значення від 0 до 255")
// let blue = prompt("Вкажіть значення від 0 до 255")
// const rgb = (red,green,blue) => {
//     let hexRed = parseInt(red).toString(16);
//     let hexGreen = parseInt(green).toString(16);
//     let hexBlue = parseInt(blue).toString(16);
//     let color = "#" + hexRed + hexGreen + hexBlue;
//     alert("Колір: " + color);
// }
// rgb(red, green, blue)




// let numFloors = prompt("Введіть кількість поверхів у будинку:");
// let numFlatsPerFloor = prompt("Введіть кількість квартир на поверсі:");
// let flatNumber = prompt("Введіть номер квартири:");


// const floorsResult = (numFloors,numFlatsPerFloor,flatNumber) => {
//     let entranceNumber = Math.ceil(flatNumber / (numFloors * numFlatsPerFloor));
//     let floorNumber = Math.ceil((flatNumber - (entranceNumber - 1) * numFloors * numFlatsPerFloor) / numFlatsPerFloor);
//     ("Квартира з номером " + flatNumber + " знаходиться в " + floorNumber + " під'їзді та " + entranceNumber + " поверсі.");
//     let result = {entrance : entranceNumber,floor : floorNumber}
//     console.log(result);
// };
// floorsResult(numFloors,numFlatsPerFloor,flatNumber); 






// const credentials = () => {
//     let name = prompt("Вкажіть ваше ім`я")
//     let fatherName = prompt("Вкажіть як звали вашого батька")
//     let surName = prompt("Вкажіть ваше прізвище")
//     if (name,fatherName,surName) {
//     name = name[0].toUpperCase() + name.slice()
//     fatherName = fatherName[0].toUpperCase() + fatherName.slice()
//     surName = surName[0].toUpperCase() + surName.slice()}
//     let fullName = {
//         name: name || "Аnon",
//         fatherName: fatherName || "Аnonovich",
//         surName: surName || "Аnonenko",
//     }
//     console.log(fullName)
// }
// credentials()




// const newLine = () => {
//     let line = prompt("Вкажіть рядок (для переносу рядка використовуйте \\n)")
//     line = line.split('\\n').join('\n');
//     alert(line)
// }
// newLine();



// Для завдання Number: age використовуючи АБО || вивести повідомлення про помилку (alert)
//  якщо користувач не введе вік або натисне
//  скасування (тобто prompt видасть порожній рядок або null, що інтерпретується як false).




// // let promptOR = (age = prompt("Вкажіть ваш вік")) => age ? alert(`Ваш вік ${age}`) : "Помилка"
// promptOR()





const validation = (login = prompt("Вкажіть ваш логін"), password = prompt("Вкажіть ваш пароль")) => {
    if (login === "admin",password === "qwerty") {
            alert("Вітаю! Ви увійшли до системи.")
    } else if (login != "admin"){
        alert("Неправильний логін")
    } else (password != "qwerty") 
        alert("Неправильний пароль")
};
validation()