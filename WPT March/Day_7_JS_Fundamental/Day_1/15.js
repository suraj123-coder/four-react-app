function sum(n1,n2){
    let result =n1+n2;
    return result;
}

// Overloading
// UnConventional UseCase
let output1 = sum();
console.log(output1);    //NaN

let output2=sum(10);
console.log(output2);    //NaN

let output3 = sum(10,20);
console.log(output3);     //30

let output4 = sum(10,20,60);
console.log(output4);     //30
