// Change Text Content Dynamically
const dynamicTextElement = document.getElementById('dynamicText');
function changeText() {
    dynamicTextElement.textContent = 'The text has been changed by JavaScript!';
}
setTimeout(changeText, 2000); // Change text after 2 seconds

// Modify CSS Styles via JavaScript
const styleButton = document.getElementById('styleButton');
function changeStyle() {
    dynamicTextElement.style.color = 'blue';
    dynamicTextElement.style.fontWeight = 'bold';
    styleButton.style.backgroundColor = 'green';
    styleButton.style.color = 'white';
}
styleButton.addEventListener('click', changeStyle);

// Add or Remove an Element when a button is clicked
const addElementButton = document.getElementById('addElementButton');
const removeElementButton = document.getElementById('removeElementButton');
const elementContainer = document.getElementById('elementContainer');
const myList = document.getElementById('myList');
let itemCount = myList.children.length + 1;

function addListItem() {
    const newListItem = document.createElement('li');
    newListItem.textContent = `Added Item ${itemCount}`;
    myList.appendChild(newListItem);
    itemCount++;
}

function removeLastListItem() {
    if (myList.children.length > 0) {
        myList.removeChild(myList.lastElementChild);
        itemCount--;
        if (itemCount < 1) itemCount = 1; // Prevent itemCount from going too low
    } else {
        alert('No more items to remove!');
    }
}

addElementButton.addEventListener('click', addListItem);
removeElementButton.addEventListener('click', removeLastListItem);