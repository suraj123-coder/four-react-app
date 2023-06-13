// un-Orderd Parameter
// with default value
function register({
    id,
    email,
    mobile,
    age = 21,
    address = "",
    aadhar = "",
    pan = "",
    city = "",
    locality = "",
  }) {
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
  
  // ORder not matter
  register({ mobile, id, email });