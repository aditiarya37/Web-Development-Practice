// const arr = ['cpp', 'js', 'c', 'java', 'html','css','python']

// ForEach does not return any value

// const values = arr.forEach( (item) => {
//     // console.log(item);
//     return item;
// } )

// console.log(values);

const arr = [1,2,3,4,5,6,7,8,9,10];
// const ans = arr.filter( (n) => n%2 )
// const ans = arr.filter( (n) => {
//     return n%2
// } )
// console.log(ans);

const ans = [];
arr.forEach( (n) => {
    if(n%2==0){
        ans.push(n);
    }
} )
console.log(ans);