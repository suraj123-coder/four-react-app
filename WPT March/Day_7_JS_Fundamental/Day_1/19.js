// Orderd Parameter : Positional Param

function register(id, email, mobile, address, aadhar, pan, city, locality){
  console.log(id);
  console.log(email);
  console.log(mobile);
  console.log(address);
  console.log(aadhar);
  console.log(pan);
  console.log(city);
  console.log(locality);
}
let id = 100;
let email = "abcd@abcd.com";
let mobile = "32323232";
let address = "kharghar";
let aadhar = "12121SSA121";
let pan = "ASDFDF";
let city = "navi mumbai";
let locality = "belpada";

register(id, email, mobile, address, aadhar, pan, city, locality);

// incorrect, mobile and email in wrong order
// incorrect, address and aashdar is also in wrong order / position
register(id, mobile, email, aadhar, address, pan, city, locality);