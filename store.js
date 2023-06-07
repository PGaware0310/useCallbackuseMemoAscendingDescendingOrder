const form = document.getElementById('listItems');

function addTo(event) {
    event.preventDefault();
    const candy_name = event.target.candyname.value;
    const descri = event.target.descr.value;
    const price = event.target.pric.value;
    const quantity = event.target.quant.value;

    const obj = {
        candy_name,
        descri,
        price,
        quantity
    }

    //  Enter Items into server side via POST method

    axios.post("https://crudcrud.com/api/e8dcf670562f4ad1b98277f32d57b50e/Sellerapp", obj)
        .then((response) => {
            console.log(response.data);
            showItems(response.data);
        })
        .catch((err) => console.log(err))
}

//Get all Info from server via GET method
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/e8dcf670562f4ad1b98277f32d57b50e/Sellerapp")
        .then((response) => {
            console.log(response)
            for (var i = 0; i < response.data.length; i++) {
                showItems(response.data[i])
            }
        })
        .catch((err) => console.log(err))

})

function showItems(user) {
    const Uilist = document.getElementById('listItems');
    //Create li Element 
    const li = document.createElement('li');
    li.textContent = user.candy_name + '-' + user.descri + '-' + user.price + '-' + user.quantity;

    const userId = user._id;
    let candy_name = user.candy_name;
    let descri = user.descri;
    let price = user.price;
    //  let quant=user.quantity;
    li.id = userId;

    //Create Button buy1
    const buy1btn = document.createElement('button');
    buy1btn.className = 'btn';
    const buy1text = document.createTextNode('BUY-1');
    buy1btn.appendChild(buy1text);
    li.appendChild(buy1btn);
    Uilist.appendChild(li);

    //updating Quantity of item via PUT method

    buy1btn.onclick = () => {
        let newQuantity = user.quantity;

        if (newQuantity > 0) {
            newQuantity--;
        }
        axios.put(`https://crudcrud.com/api/e8dcf670562f4ad1b98277f32d57b50e/Sellerapp/${userId}`, {
            candy_name,
            descri,
            price,
            quantity: newQuantity
        })
            .then((response) => {
                console.log(response);

            })
            .catch((err) => console.log(err))
       location.reload();
        // li = document.getElementById(newQuantity);
    }



    //Create Button buy2
    const buy2btn = document.createElement('button');
    buy2btn.className = 'btn';
    const buy2text = document.createTextNode('BUY-2');
    buy2btn.appendChild(buy2text);
    li.appendChild(buy2btn);
    Uilist.appendChild(li);

    buy2btn.onclick = () => {
        let newQuantity = user.quantity;
        if (newQuantity > 1) {
            newQuantity = newQuantity - 2;
        }
        axios.put(`https://crudcrud.com/api/e8dcf670562f4ad1b98277f32d57b50e/Sellerapp/${userId}`, {
            candy_name,
            descri,
            price,
            quantity: newQuantity
        })
            .then((response) => {
                console.log(response);
                // showItems(response.data);
            })
            .catch((err) => console.log(err))
            location.reload();
            // li = document.getElementById(newQuantity);
    }

}


