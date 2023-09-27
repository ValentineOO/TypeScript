"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let level;
level = 1;
level = "high";
function render(document) {
    console.log(document);
}
let numbers = [];
numbers.forEach((n) => n.toPrecision);
let user = [1, "Adams"];
user[1];
user.push(1);
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: "Adams",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10");
//# sourceMappingURL=index.js.map