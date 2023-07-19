import { generateFibonacci } from "./fibonacci.js";

const person = {
    firstName: "John",
    lastName: "Doe",
}


const name = person?.name?.firstName;

console.log(name);


const result = generateFibonacci(10);

console.log(result);
