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

    axios.post("https://crudcrud.com/api/0a5e5fbcaa49470e9a9394cc1aa41e59/Bookingapp", obj)
        .then((response) => {
            showUserDetails(response.data)
            console.log(response)
        })
        .catch((err) => console.log(err))
    }
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/0a5e5fbcaa49470e9a9394cc1aa41e59/Bookingapp")
        .then((response) => {
            console.log(response)
            for (var i = 0; i < response.data.length; i++) {
                showUserDetails(response.data[i])
                }
        })
        .catch((err) => console.log(err))

})
    
function showUserDetails(user) {
    let ParentEle = document.getElementById('listOfItems');
    //create child element li
    let ChildEle = document.createElement('li');
    
    //fetch text content of an element
    ChildEle.textContent = user.name + '-' + user.email + '-' + user.phn;

    
    let userId = user._id;
    ChildEle.id = userId;
    
    //create button as child element
    let delbtn = document.createElement('button');
    
    //add class name to button
    delbtn.className = 'btn';
    
    //add text on button
    var delbtntext = document.createTextNode('Delete');
    
    //add text to button using appendchild
    delbtn.appendChild(delbtntext);

     //append text content with button
     ChildEle.appendChild(delbtn);
     //append li
     ParentEle.appendChild(ChildEle);
    //for deleting an item
    delbtn.onclick = () => {
        axios.delete(`https://crudcrud.com/api/0a5e5fbcaa49470e9a9394cc1aa41e59/Bookingapp/${userId}`)
            .then((res) => {
                showUserDetails(userId)
                // console.log(res)
            })
            .catch((err) => console.log(err))
        ChildEle = document.getElementById(userId);
        ParentEle.removeChild(ChildEle);
       
        
        // localStorage.removeItem(obj.email);
        // ParentEle.removeChild(ChildEle);
    }


    let editbtn = document.createElement('button');
    editbtn.className = 'btn';
    var editbtntext = document.createTextNode('Edit');
    editbtn.appendChild(editbtntext);
    ChildEle.appendChild(editbtn);
    ParentEle.appendChild(ChildEle);
    // for editing an item
    editbtn.onclick = () => {
        localStorage.removeItem(obj.email);
        ParentEle.removeChild(ChildEle);
        document.getElementById('uname').value = obj.name;
        document.getElementById('mail').value = obj.email;
        document.getElementById('phn').value = obj.phn;
    }

}
