// Annonymous function
// Assigning a function to a variable!
// We can call annonymous function
let sumfn= function(n1,n2){
    let output=n1+n2;
    return output;
};

// Arrow Function => / ->
// Assigning the function to a variable
let sumfn1=(n1,n2)=>{
    let output=n1+n2;
    return output;
};

//calling the annonymous function
let result=sumfn(10,20);
console.log(result);

//calling the arrow function
let result1=sumfn1(10,30);
console.log(result1);