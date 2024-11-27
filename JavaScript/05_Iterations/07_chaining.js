const arr = [1,2,3,4,5,6,7,8,9,10];
// const newNums = arr.map( (n) => n*2 );
const newNums = arr.map( (num) => num*5 )
                    .map( (num) => num*3 )
                    .filter( (num) => num%2==0 )
console.log(newNums);