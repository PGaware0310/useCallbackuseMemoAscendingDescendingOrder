//Using QuerySelector
// var header=document.querySelector('#main-header');
// header.style.borderButton='solid 3px #ccc';

// var input=document.querySelector('input');
// input.value='Hello World';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color='blue';

// var seconditem=document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color='coral';
// //1
// seconditem.style.background='green';
// //2
// var thirditem=document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.visibility='hidden';

//QuerySelectorAll
var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';
var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');

for(let i=0;i<odd.length;i++){
    //2
    odd[i].style.backgroundColor='#0f0';
    even[i].style.backgroundColor='#ccc';
}
//1
var second=document.querySelectorAll('li');
second[1].style.color='green';