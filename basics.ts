let age: number;

age = 12.1;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'max',
    age: 32
}

// person = {
//     isEmployee: true
// }

let people: Person[];


// Type inference

let course: string | number = 'React';

course = 1234;
