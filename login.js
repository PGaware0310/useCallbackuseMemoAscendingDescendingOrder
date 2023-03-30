var form=document.addEventListener('click',onSubmit);
function onSubmit(){
    
    
    var name=document.getElementById('name').value;
    var email=document.getElementById('mail').value;

    localStorage.setItem('UserName',name);
    localStorage.setItem('Email_Id',email);
}

