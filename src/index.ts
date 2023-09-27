let sales = 123_456_789;
let course = "Typescript";
let is_published = true;

let level;
level = 1;
level = "high";

function render(document: any) {
  console.log(document);
}

//arrays

let numbers: number[] = [];
// numbers [0] = 1;
// numbers [1] = "1";

numbers.forEach((n) => n.toPrecision);

// Turples

let user: [number, string] = [1, "Adams" ]
user[1]
user.push(1)

// enums

// const small = 1;
// const medium = 2;
// const large = 3;


// PascalCase
enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log( mySize);

