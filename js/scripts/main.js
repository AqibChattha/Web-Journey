const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "../../assets/images/js-on-a-chip.jpg") {
        myImage.setAttribute("src", "../../assets/images/person-using-computer-to-create-actions.png");
    } else {
        myImage.setAttribute("src", "../../assets/images/js-on-a-chip.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Current user is : ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Current user is : ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};


const list = document.createElement('ul');
const info = document.createElement('p');
const addItem = document.createElement('button');
info.textContent = 'Below is a dynamic list. Click anywhere on the image to add a new list item. Click an existing list item to change its text to something else.';
addItem.textContent = 'Add new item'

document.body.appendChild(info);
document.body.appendChild(addItem);
document.body.appendChild(list);

addItem.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}