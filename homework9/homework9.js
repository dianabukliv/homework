const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1

function getMyTaxes(salary) {
    return salary * this.tax;
}
console.log("Повинні сплатити : " , getMyTaxes.call(ukraine,1000))

//2

function getMiddleTaxes(country) {
    return this.middleSalary * this.tax;
   
}
console.log("У середньому : " , getMiddleTaxes.call(ukraine))

//3 

function getTotalTaxes() {
    return this.middleSalary * this.tax * this.vacancies;

}
console.log("Всього податків :" , getTotalTaxes.call(litva))

//4

function getMySalary(item) {
    let mySalary = {}
    setInterval(() => {
        let salary = Math.floor(Math.random() * (2001 - 1500) + 1500);
        let taxes = (item.tax * salary).toFixed(0);
        let profit = salary - taxes;
        mySalary['salary'] = salary;
        mySalary['taxes'] = Number(taxes);
        mySalary['profit'] = profit;
        return console.log(mySalary);
    }, 10000)
}
getMySalary(litva)

