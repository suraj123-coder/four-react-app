function addNewTweet() {
    let ref = document.querySelector("#id1");
    let bodyRef = document.querySelector("body");
    bodyRef.innerHTML = bodyRef.innerHTML + ref.innerHTML;
  }