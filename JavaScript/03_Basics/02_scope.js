// function one(){
//     const name = "xyz";
//     function two(){
//         const website = "youtube";
//         console.log(name);
//     }
//     // console.log(website);
//     two();
// }
// one()

addOne(5);
function addOne(num){
    return num + 1;
}
addTwo(5);
const addTwo = function(num){
    return num + 2;
}