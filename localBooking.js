var items=document.getElementById('listOfItems');



function saveTo(event) {
    event.preventDefault()
    //Gets the element--> use event.target
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phn = event.target.phonenumber.value;

    const obj = {
        name,
        email,
        phn
    }
    //JSON converts JS obj to string(Exchange data to/from server)
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserDetails(obj);
}
function showUserDetails(obj) {
    const ParentEle = document.getElementById('listOfItems');
    //create child element li
    const ChildEle = document.createElement('li');
    //create button as child element
    const btn=document.createElement('button');
    //add class name to button
    btn.className='btn'
    //add text on button
    var btntext=document.createTextNode('Delete');
    //add text to button using appendchild
    btn.appendChild(btntext);
    //fetch text content of an element
    ChildEle.textContent = obj.name + '-' + obj.email + '-' + obj.phn;
    //append text content with button
    ChildEle.appendChild(btn);
    //append li
    ParentEle.appendChild(ChildEle);

    btn.onclick=()=>{
        localStorage.removeItem(obj.email);
        ParentEle.removeChild(ChildEle);
    }
    
}
