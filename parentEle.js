var itemList=document.querySelector('#items');
//1..parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4'
console.log(itemList.parentElement.parentElement.parentElement);

//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//2..lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';

//3..lastChild
console.log(itemList.lastChild);

//4..childNode
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//5..firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';
 
//6..FirstChild
console.log(itemList.firstChild);

//7..nextSibling
console.log(itemList.nextSibling);

//8..nextElementSibling
console.log(itemList.nextElementSibling);

//9..previousSibling
console.log(itemList.previousSibling);

//10..previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//11..createElement

//create div
var newDiv=document.createElement('div');
//add class
newDiv.className='Hello';
//add Id
newDiv.id='Hello1';

//12..Add Attribute
newDiv.setAttribute('title','Hello Div');

//13..Create textNode
var newDivText1=document.createTextNode('Hello World');

//14..AppendChild/addText to div
newDiv.appendChild(newDivText1)

//Add "Hello world" before Item Listner
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);

//Add "Hello World" before item1
var newDivText2=document.createTextNode('Hello World');
var target=document.querySelector('.list-group');
target.insertBefore(newDivText2,target.childNodes[0]);
