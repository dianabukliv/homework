//1

function getRandomArray(length, min, max) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray[i] = (Math.floor(Math.random() * (max - min)) + min);
    }
    return randomArray;
}
console.log("Масив випадкових чисел: " , getRandomArray(10, 1, 100));

//2

function getAverrage(...numbers) {
    let res = numbers.reduce((acc, el) => {
        return acc + el;
    }, 0) 
    console.log("Середнє арифметичне: ", res / numbers.length) ;
}
getAverrage(5, 7, 88, 6, 4, 5, 4, 4, 22, 1);

//3

function filterEvenNumbers(...numbers) {
    let evenNumber = numbers.filter(function (item) {
        return item % 2 !== 0;
 })
    return evenNumber;
}
console.log("Фільтрування парних чисел: " )
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//4

function countPositiveNumbers(...numbers) {
    let positiveNumbers = numbers.filter(function (item) {
        return item > 0;
    })
    return positiveNumbers.length;
}
console.log("Кількість чисел більших 0:", countPositiveNumbers(3, 6, -8, -10, 4 ));

//5

function getDividedByFive(...numbers) {
    let filterFive = numbers.filter(function (item) {
        return item % 5 === 0
    })
    return filterFive;
}
console.log("Ділиться на 5 :" , getDividedByFive(5, 3, 10, 4, 7, 25));

//6

function getModa(...numbers) {
    let arrNumber = numbers;
    let res = arrNumber.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1
        } else {
            acc[curr] = 1
        }
        return acc;
    }, {});
    console.log(Object.keys(res).find((el) => {
        return res[el] === Math.max(...Object.values(res))
    }));
}
console.log("Мода: ")
getModa(2, 2, 5, 6, 7, 8, 4, 5, 6, 3, 2);