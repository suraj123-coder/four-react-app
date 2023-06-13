function AddNewMessage(){
    let divref =document.querySelector("#parent");

    let existingValue =divref.innerHTML;

    let updatedValue =existingValue + newValue;

    divref.innerHTML=updatedValue;
}