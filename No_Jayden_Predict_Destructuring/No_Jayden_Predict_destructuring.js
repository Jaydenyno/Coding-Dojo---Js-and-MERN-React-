// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// console.log(randomCar)
// console.log(otherRandomCar)
// Result: Tesla, Mercedes
// o

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// console.log(name);
// console.log(otherName);
// Result: error name not defined
// o

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// console.log(password);
// console.log(hashedPassword);
// Result: 12345, undefined
// x

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers; 
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// console.log(first == second);
// console.log(first == third);
// Result: flase, true
// o

// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);
// Result: value, [1, 5, 1, 8, 3, 3], 1, 5
// o