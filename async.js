console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie=async()=>{
const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
setTimeout(()=>{
   resolve('ticket');
},3000)
})
const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));

const addButter=new Promise((resolve,reject)=>resolve(`butter`));

const getColdDrinks=new Promise((resolve,reject)=>resolve(`drink`));
let ticket=await promiseWifeBringingTicks;

console.log(`Wife:i have the ${ticket}`)
console.log('Husband:we should go in');
console.log('Wife:no i am hungry');

let popcorn=await getPopcorn;
console.log(`Husband:i got some ${popcorn}`);
console.log('Husband:we should go in');
console.log('Wife:I need butter on my popcorn');


let butter=await addButter;
console.log(`Husband:I got some ${butter} on popcorn`);
console.log(`Husband:Anything else darling?`);
console.log(`Wife:Lets go we are getting late`);
console.log(`Husband:Thank you for reminder *grins*`);

let drink=await getColdDrinks;
console.log(`Husband:I got some ${drink}`);
console.log('Husband:We should go in');
console.log('Wife:Yes, lets go we are getting late')

return ticket;
}
preMovie().then((m)=>console.log(`person3:shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');
