function fooBar(num) {
  let counter = -1;

  while (counter < 10) {
    console.log("count is " + counter);
    counter += 2;
  }
  return num;
}

fooBar(2);

if (new Date().getMonth() === 20) {
  localStorage.removeItem("user");
}

document.getElementsByTagName("button")[0].addEventListener("click", () => {
  alert("hi");
});
