//FLATS

// const apartment = {
//     firstRoom: {
//         length: 80,
//         width: 50
//     },
//     secondRoom: {
//         length: 120,
//         width: 60
//     },
//     kitchen: {
//         length: 60,
//         width: 100
//     }
// };


// const apartmentsSquare = Object.values(apartment).reduce((totalSquare, room) => {
//     const roomArea = room.length * room.width;
//     return totalSquare + roomArea;
// }, 0);

// console.log(apartmentsSquare)


//WORDS

// const vowels = ['а', 'е', 'є', 'и', 'о', 'у', 'и', 'э', 'ю', 'я']
// const consonants = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ']
// function countVowelsAndConsonants(input) {
//     let vowelCount = 0
//     let consonantCount = 0
//     for (const letter of input) {
//         if (vowels.includes(letter.toLowerCase())) {
//             vowelCount++
//         } else if (consonants.includes(letter.toLowerCase())) {
//             consonantCount++
//         }
//     }
//     console.log(`Кількість голосних букв: ${vowelCount}`);
//     console.log(`Кількість приголосні букв: ${consonantCount}`)
// }
// const words = prompt('Вкажіть слово')
// countVowelsAndConsonants(words)



//VALIDATION

// const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|ua|net)$/
// const emailInput = document.getElementById('emailInput')
// function validateEmail() {
//     const enteredEmail = emailInput.value
//     const result = document.getElementById('result')
//     if (emailRegex.test(enteredEmail)) {
//         result.textContent = ' email валідний.'
//     } else {
//         result.textContent = 'email некорректний'
//     }
// }
// const checkButton = document.getElementById('checkButton')
// checkButton.addEventListener('click', validateEmail)



//COFFEE

// function calculateCupsOfCoffee(weightOfCoffee, grammsPerCup) {
//     const cups = weightOfCoffee / grammsPerCup
//     return cups
// }
// const totalWeightOfCoffee = 1000 
// const grammsPerCup = 25 
// const cupsOfCoffee = calculateCupsOfCoffee(totalWeightOfCoffee, grammsPerCup)//или calculateCupsOfCoffee(1000, 25)
// console.log(`Можна зробити ${cupsOfCoffee} чашок кави`)



//STEPS

// function calculateWalkingTime(distance, stepLength) {
//     const steps = distance / stepLength; 
//     const timeInSeconds = steps * 0.8; 
//     const hours = Math.floor(timeInSeconds / 3600)
//     const minutes = Math.floor((timeInSeconds % 3600) / 60)
//     const seconds = Math.floor(timeInSeconds % 60)
//     return `${hours} ч ${minutes} мин ${seconds} с`
// }
// const distance = 3000; 
// const stepLength = 0.5; 
// const walkingTime = calculateWalkingTime(distance, stepLength);
// console.log(`Час, який потрібно для подолання ${distance} м с кроком ${stepLength} м: ${walkingTime}`);


//GIGABYTES

// function calculateRemainingMemory(initialMemoryGB, dataUsageMBArray) {
//     const initialMemoryMB = initialMemoryGB * 1024// 
//     const totalDataUsage = dataUsageMBArray.reduce((total, usage) => total + usage, 0)

//     const remainingMemoryMB = initialMemoryMB - totalDataUsage;
//     return remainingMemoryMB
// }

// const initialMemoryGB = 128; 
// const dataUsageArray = [1002.2, 425.7, 7232.3,13.11, 138.29];
// const remainingMemoryMB = calculateRemainingMemory(initialMemoryGB, dataUsageArray)
// console.log(`Залишок памяті: ${remainingMemoryMB} МБ`)