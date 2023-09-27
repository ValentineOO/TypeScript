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

let user: [number, string] = [1, "Adams"];
user[1];
user.push(1);

// enums

// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// functions
function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax(10_000, 2022);

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Adams",
  retire: (date: Date) => {
    console.log(date);
  },
};

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10");

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal (exact, specific)

type Metric = "cm" | "inch";

// optional chaining
