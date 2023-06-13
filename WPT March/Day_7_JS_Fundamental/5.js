function hello(p1) {
    console.log(p1);
  }
  
  // Calling the function, passing string param
  hello("helloworld");
  
  // Calling the function, passing number param
  hello(100);
  
  // Calling the function, passing boolean param
  hello(true);
  
  // Passing fucntion as param to another function, is known as callback function
  // Acheieve Async programming.
  // Calling the function, passing function as param

  // simplest callback
hello(() => {});
hello((n1, n2) => {
  return n1 + n2;
});

hello(function () {});
hello(function (n1, n2) {
  return n1 + n2;
});