/*
    Author: Abbey
    Name: printToDom.js
    Purpose: Function that will print any HTML elements to the DOM
*/
const printToDom = contact => {
    const contactDomElement = document.querySelector("#contactList")

    contactDomElement.innerHTML += contact
}

export default printToDom