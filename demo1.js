var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//Form Submit event
form.addEventListener('submit',addItem)
//Delete event
itemList.addEventListener('click',removeItem)

function addItem(e){
  e.preventDefault();

  //Get input value
  var newItem=document.getElementById('item').value;
  //create new li element
  var li=document.createElement('li');
  //add class name
  li.className='list-group-item';
  //add text node with input value
  var newnode=document.createTextNode(newItem);
  li.appendChild(newnode);

  //create delete button element
  var delBtn=document.createElement('button');
  //add classname to button
  delBtn.className='btn btn-danger btn-sm float-right delete';
  //add text on button
  var btntext=document.createTextNode('X');
  //append button into li
  delBtn.appendChild(btntext);
  li.appendChild(delBtn);
 
  //append li to itemlist
  itemList.appendChild(li);

  //Create Edit Button
  var editBtn=document.createElement('button');
  //Add classname
  editBtn.className='btn btn-sm float-right edit ';
  //Add text to Button
  var edittext=document.createTextNode('EDIT');
  //Add text on button
  editBtn.appendChild(edittext);
  //Append button to itemlist
  li.appendChild(editBtn);
  itemList.appendChild(li);
}


//remove item
function removeItem(e){
 if(e.target.classList.contains('delete')){
  if(confirm('Are you Sure?')){
    var li=e.target.parentElement;
    itemList.removeChild(li);
  }
 }
}