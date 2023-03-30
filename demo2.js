var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

//Form Submit event
form.addEventListener('submit',addItem)
//Delete event
itemList.addEventListener('click',removeItem)
//Filter event
filter.addEventListener('keyup',filterItem)

function addItem(e){
  e.preventDefault();

  //Get input value
  var newItem=document.getElementById('item').value;
  //Get the input value from 2nd textbox
  var newitem2=document.getElementById('item2').value;
  //create new li element
  var li=document.createElement('li');
  var li=document.createElement('li');
  //add class name
  li.className='list-group-item';
  li.className='list-group-item';

  //add text node with input value
  var newnode=document.createTextNode(newItem);
  li.appendChild(newnode);
  
  //add text node with input value2
  var newnode1=document.createTextNode(newitem2);
  li.appendChild(newnode1);
  
   //append li to itemlist
   itemList.appendChild(li);
   itemList.appendChild(li);
  
  //create delete button element
  var delBtn=document.createElement('button');
  //add classname to button
  delBtn.className='btn btn-danger btn-sm float-right delete';
  //add text on button
  var btntext=document.createTextNode('X');
  //append button into li
  delBtn.appendChild(btntext);
  li.appendChild(delBtn);
 
 
  
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

//filter item
function filterItem(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
  
    //get lis
    var items=itemList.getElementsByTagName('li');
    
    //convert to an Array
    Array.from(items).forEach(function(item) {
        var itemName=item.firstChild.textContent;
        var itemname1=item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1|| itemname1.toLowerCase().indexOf(text)!=-1){
           item.style.display='block';
        }else{
           item.style.display='none';
           }
        });
      }
    