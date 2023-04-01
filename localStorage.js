let myObj={
    name:"Pooja",
    age:25,

};
let myObj_serialize=JSON.stringify(myObj);
console.log(myObj_serialize);

localStorage.setItem('myObj',myObj_serialize);

let myObj_deserialize=JSON.parse(localStorage.getItem(myObj));
console.log(myObj_deserialize);