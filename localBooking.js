function saveTo(event) {
    event.preventDefault()
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phn = event.target.phonenumber.value;

    const obj = {
        name,
        email,
        phn
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserDetails(obj);
}
function showUserDetails(obj) {
    const ParentEle = document.getElementById('listOfItems');
    const ChildEle = document.createElement('li');
    ChildEle.textContent = obj.name + '-' + obj.email + '-' + obj.phn;
    ParentEle.appendChild(ChildEle);
    
}