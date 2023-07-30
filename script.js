// const dog = {
//     name: 'Marsel',
//     age: 1,
//     weight: 2.5
// }    


// let = input1 = prompt("Вкажіть один ключ")
// let = input2 = prompt("Вкажіть значення")
// let = input3 = prompt("Вкажіть один ключ")
// let = input4 = prompt("Вкажіть значення")
// const input = {
//       [input1] : input2,
//       [input3] : input4
// }


// const newObj = {...input}
// let newKey = prompt("Вкажіть ще один ключ")
// let newName = prompt("Вкажіть нове значення")
// newObj[newKey] = newName



// // let buttonInput = prompt("Вкажіть значення атрибута button")
// let input = 'id="surname"'
// let button = "cancel"
//     let obj = {
//         tagName: 'body',
//         children: [
//             {
//                 tagName: 'div',
//                 children: [
//                     {
//                         tagName: 'span',
//                         attrs: 'Enter a data please:'
//                     },
//                     {
//                         tagName: 'input',
//                         attrs: 'type="text"'
//                     },
//                     {
//                         tagName: 'input',
//                         attrs: 'id="name"'
//                     },
//                     {
//                         tagName: 'input',
//                         attrs: 'type="text"'
//                     },
//                     {
//                         tagName: 'input',
//                         attrs: [input]
//                     }
//                 ]
//             },
//             {
//                 tagName: 'div',
//                 children: [
//                     {
//                         tagName: 'button',
//                         attrs: [buttonInput]
//                     },
//                     {
//                         tagName: 'button',
//                         attrs: [button]
//                     }
//                 ]
//             }
//         ]
//     };



// const {children: [{children: [{ attrs: spanText },,,,{attrs: [secondInputId],},],},{children: [,{attrs: [secondButtonText],},],},],} = obj;  
//   console.log('Значення тексту у тезі span:', spanText);
//   console.log('Значення тексту в другій кнопці:', secondButtonText);
//   console.log('Значення атрибуту id у другому input:', secondInputId);
  




// let arr = [1,2,3,4,5, "a", "b", "c"]
// const [odd1,even1,odd2,even2,odd3,...arr2] = arr
// console.log(odd1,even1,odd2,even2,odd3,arr2)


// let arr = [1, "abc"];
// let [number, str] = arr;
// let [s1, s2, s3] = str;
// console.log(number,s1,s2,s3); 




// let obj = {name: 'Ivan',
//            surname: 'Petrov',
//            children: [{name: 'Maria'}, {name: 'Nikolay'}]}


// let {children:[child1,child2]} = obj
// let {name:name1} = child1
// let {name:name2} = child2
//  console.log(name1,name2)



// let arr = [1,2,3,4,5,6,7,10]
// let [a,b,length] = arr
// length = arr.length
// console.log(a,b,length)


// const {...dogs} = dog; //Copy delete 


// let value = prompt('Вкажіть валюту яку хочете обміняти').toUpperCase() || "USD"
// let value1 = prompt('Вкажіть валюту на яку хочете обміняти').toUpperCase() || "UAH"
// let summ = prompt("вкажіть суму для обміну") || "100"
// let currencyListHTML = ""
// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//      .then(data => {
//         data = data.rates
//         value1 = data[value1]
//         value = data[value]
//             if(value,value1){
//                  result = summ / value * value1
//                     alert(`Ви отримаєте ${result.toFixed(2)}`);
//             } else {
//             alert("Помилка, повторіть спробу")
//         }   

//         const selectElement = document.createElement('select');
//         for (currency in data) {
//             const optionElement = document.createElement('option');
//             optionElement.value = currency;
//             optionElement.textContent = currency;
//             selectElement.appendChild(optionElement);
//         }

//         const currencyListElement = document.getElementById('currencyList');
//         if (currencyListElement) {
//             currencyListElement.appendChild(selectElement);
//         }
//     })


