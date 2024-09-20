// Object.create creates singleton object (uses constructor)
// object literals

const mySym = Symbol()

const myObj = {
    name: "Aditi",
    [mySym]: "Key1",
    age: 18,
    uid: 12345,
    email: "xyz@gmail.com",
    isLoggedIn: false,
    loggedOnDays: ["Monday", "Wednesday"]
}

// console.log(myObj.email);
// console.log(myObj["email"]);
// console.log(myObj[mySym]);

myObj.age = 19
// console.log(myObj);

// Object.freeze(myObj)

myObj.age = 20
// console.log(myObj);

myObj.greeting = function() {
    console.log("Hello World");
}

myObj.greetingTwo = function () {
    console.log(`Hello ${this.name}`);
}

console.log(myObj.greeting());
console.log(myObj.greetingTwo());