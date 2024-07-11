let name = "Aditi"
let ans = name + 2
console.log(ans);

console.log(typeof ans);

const a = {
    name: "Aditi",
    age: 18,
}
// a = 37 -> ERROR 
a['friend'] = "Kanishka"
console.log(a);

const dictionary = {
    chaste: "pure",
    scrumptious: "tasty",
    dumbfounded: "suprised",
    paradigm: "pattern",
    commemorate: "to learn",
}
console.log(dictionary.commemorate);
console.log(dictionary['scrumptious']);