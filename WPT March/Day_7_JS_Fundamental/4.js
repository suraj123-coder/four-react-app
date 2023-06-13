function hello(p1){
    console.log(p1);
}

// Calling the function, passing string param
let str="hello world";
hello(str);

// Calling the function, passing number param
let id=100;
hello(id);

// Calling the function, passing boolean param
let active=true;
hello(active);

// Passing fucntion as param to another function, is known as callback function
// Acheieve Async programming.
// Calling the function, passing function as param

let sumfn =(n1,n2)=>{
    return n1+n2;
};

hello(sumfn);