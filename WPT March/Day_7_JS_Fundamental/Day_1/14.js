let list1=[];
let list2=[1,2,3];

let list=["delhi","culcutta","mumbai"];

// iterate each element of list
for(i=0;i<list.length;i++){
    let item=list[i];
    console.log(item);
}

console.log("###########");
// 2. cleaner , advance for loop
for(let item of list){
    console.log(item);
}

console.log("##############");
// 3. in context of java, lamda and stream
// forEach :: Collection / List
// forEach :: lamda :: () => {}
// JAVA :: () -> {}
// JS :: () => {}
// list.stream().forEach((item) -> System.out.println(item));
list.forEach((item) => console.log(item));