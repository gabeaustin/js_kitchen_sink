// Number 4
// this is a variable that has a value of the developer's name
let name = "Gabriel";
// next line used for testing purposes
console.log(name);

// Number 5
// this is a constant variable the lists the # of US states
const number_us_states = 50;
// next line used for testing purposes
console.log(number_us_states);

// Number 6
// this is a variable the adds two numbers together
let add_num = 5 + 4;
// next line used for testing purposes
console.log(add_num);

// Number 8
function sayHello() {
    alert("Hello World!");
}

sayHello();


// Number 9
function checkAge(name, age) {
    if (age < 21) {
        // alert("Sorry " + name + ", you aren't old enough to view this page!");
        // next line used for testing purposes
        console.log("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

let various_people = [
    {
        name: "Charles",
        age: 21
    },
    {
        name: "Abby",
        age: 27
    },
    {
        name: "James",
        age: 18
    },
    {
        name: "John",
        age: 17
    }
];

// checkAge(various_people[0].name, various_people[0].age);
// checkAge(various_people[1].name, various_people[1].age);

for (let i = 0; i < various_people.length; i++) {
    checkAge(various_people[i].name, various_people[i].age);
}

// END OF NUMBER 9

// Number 10
// let fav_veggies = ["Kale", "Carrots", "Green Peas", "Asparagus"];

// for (let i = 0; i < fav_veggies.length; i++) {
//     console.log(fav_veggies[i]);
// }

// Number 11
// let pet = {
//     name: "Bentley",
//     breed: "French Bulldog"
// };

// console.log(pet.name);
// console.log(pet.breed);

// Number 12
// let new_users = [name: "Jon", age: 38, name: "Crystal", age: 21, ]