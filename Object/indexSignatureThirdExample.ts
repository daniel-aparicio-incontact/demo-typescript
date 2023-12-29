const salary1 = {
    baseSalary: 100_000,
    yearlyBonus: 20_000
};
  
const salary2 = {
    contractSalary: 110_000
};

function totalSalary(salaryObject: { [key: string]: number }) {
    let total = 0;
    for (const name in salaryObject) {
      total += salaryObject[name];
    }
    return total;
}
  
console.log(totalSalary(salary1)); // => 120_000
console.log(totalSalary(salary2)); // => 110_000