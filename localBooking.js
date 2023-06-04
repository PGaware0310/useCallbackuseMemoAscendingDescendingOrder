var items = document.getElementById('listOfItems');

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
// localStorage.setItem(obj.email, JSON.stringify(obj));
// showUserDetails(obj);

axios.post("https://crudcrud.com/api/58e99c6e52c74033818ad6c2b29a8f7c/bookingApp",obj)
.then((response)=>{
    showUserDetails(response.data)
    console.log(response)
})
.catch((err)=>console.log(err))

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/58e99c6e52c74033818ad6c2b29a8f7c/bookingApp")
        .then((response) => {
            // console.log(response)
            for (var i = 0; i < response.data.length; i++) {
                showUserDetails(response.data[i])
            }
        })
        .catch((err) => console.log(err))
    })
}
function showUserDetails(obj) {

    const ParentEle = document.getElementById('listOfItems');
    //create child element li
    const ChildEle = document.createElement('li');
    //create button as child element
    const delbtn = document.createElement('button');
    const editbtn = document.createElement('button');
    //add class name to button
    delbtn.className = 'btn';
    editbtn.className = 'btn';
    //add text on button
    var delbtntext = document.createTextNode('Delete');
    var editbtntext = document.createTextNode('Edit');
    //add text to button using appendchild
    delbtn.appendChild(delbtntext);
    editbtn.appendChild(editbtntext);
    //fetch text content of an element
    ChildEle.textContent = obj.name + '-' + obj.email + '-' + obj.phn;

    //append text content with button
    ChildEle.appendChild(delbtn);
    ChildEle.appendChild(editbtn);
    //append li
    ParentEle.appendChild(ChildEle);
    ParentEle.appendChild(ChildEle);

    //for deleting an item
    // delbtn.onclick = () => {
        
    //     axios.delete(`https://crudcrud.com/api/58e99c6e52c74033818ad6c2b29a8f7c/bookingApp/${obj._id}`)
    //     .then((response)=>{
    //         console.log(obj._id)
    //         showUserDetails(response)
    //         console.log(response)
    //     })
    //     .catch((err)=>console.log(err))
    // }
        
    //     localStorage.removeItem(obj.email);
    //     ParentEle.removeChild(ChildEle);
    // }

    //for editing an item
    editbtn.onclick = () => {
        localStorage.removeItem(obj.email);
        ParentEle.removeChild(ChildEle);
        document.getElementById('uname').value = obj.name;
        document.getElementById('mail').value = obj.email;
        document.getElementById('phn').value = obj.phn;
    }
}


