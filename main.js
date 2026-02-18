// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Alex Draesner: Portfolio";


const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/3d-pager.png") {
    myImage.setAttribute("src", "images/website-code.png");
  } else {
    myImage.setAttribute("src", "images/3d-pager.png");
  }
});

