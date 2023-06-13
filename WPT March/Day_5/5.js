function AddNewMessage(){
    let divRef =document.querySelector("#parent");
    let inputRef =document.querySelector("#id1");
    let message =inputRef.value;

    let existingValue =divRef.innerHTML;
    let newValue = `<h1>${message}</h1>`;
    let updatedValue =existingValue + newValue;

    divRef.innerHTML=updatedValue;
}