// Immediately Invoked Function Expressions

(function welcome(){
    // named IIFE
    console.log("Hello World");
})();

((name) => {
    console.log(`Hello Xyz, ${name}`);
})('Abc');