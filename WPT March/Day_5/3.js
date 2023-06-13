function likeme(){
    let href=document.querySelector("#id1");
    //get the existing value
    let existingValue =href.innerHTML;

    // increament operation
    let newValue = parseInt(existingValue)+1;

    // Set the new Value
    href.innerHTML=newValue;
}
function dislikeme(){
    let href=document.querySelector("#id2");
    //get the existing value
    let existingValue =href.innerHTML;

    // increament operation
    let newValue = parseInt(existingValue)+1;

    // Set the new Value
    href.innerHTML=newValue;
}