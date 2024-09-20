const tinderUser = new Object()
tinderUser.name = "Sam"
tinderUser.age = 18
tinderUser.id = "abc123"
// console.log(tinderUser);

const regularUser = {
    email: "xyz@gmail.com",
    fullName: {
        firstname: "Sam",
        lastname: "Sharma"
    }
}

// console.log(regularUser.fullName.lastname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);
// console.log(obj1);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    name: "Time Travel",
    fees: 999,
    university: "Stanford University"
}

const {university: uni} = course

console.log(uni);