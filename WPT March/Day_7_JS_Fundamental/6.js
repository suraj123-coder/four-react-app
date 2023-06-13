function hello(fn){
    console.log(fn);
};
// the function which is passed as param, is callback fn.

hello(()=>{});

hello((n1,n2)=>{
    return n1+n2;
});