const arr = [1,2,3,4,5];
// const total = arr.reduce( function(acc,i) {
//     return acc+i;
// },0 )
const total = arr.reduce( (acc,i) => acc+i,0 )
console.log(total);