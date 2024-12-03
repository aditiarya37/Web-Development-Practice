// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Execution done");
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Execution done");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Promise consumed");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "Eren", anime: "AOT"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "Eren", anime: "AOT"})
//         }
//         else{
//             reject('Error: Something went wrong.')
//         }
//     },1000)
// })
// promiseFour
// .then((user)=>{
//     console.log(user)
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(err){
//     console.log(err);
// })
// .finally(()=>console.log("The promise is either resolved or rejected."))

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "Luffy", anime: "OnePiece"})
//         }
//         else{
//             reject('Something went wrong')
//         }
//     },1000)
// })
// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }
// consumePromiseFive()

// Async await function does not handle catch and error cases

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log("Error: ", error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))