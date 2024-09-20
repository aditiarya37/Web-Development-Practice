// const user = {
//     name: "Xyz",
//     age: 19,
//     welcome: function(){
//         console.log(`${this.name}, welcome to the website.`);
//         console.log(this);
        
//     }
// }
// user.welcome();
// user.name = "Abc";
// user.welcome();

// function user(){
//     let name = "Abc"
//     console.log(this.name);
// }
// user();

// const sum = (n1,n2) => {
//     return n1 + n2;
// }

// const sum = (n1,n2) => n1 + n2

// const sum = (n1,n2) => (n1 + n2)

const sum = (n1,n2) => ({username: "xyz"})

console.log(sum(3,5));