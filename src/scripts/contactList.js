/*
    Author: Abbey
    Name: contactList.js
    Purpose: A ContactList component that displays all contacts. It should import the Contact component and 
            the ContactCollection component.
*/

import API from "./contactCollection";
import contactHTML from "./contact"
import printToDom from "./printToDom";

const contactList = function () {
    API.getContactList()
        .then(contact => {
            console.log(contact)
            contact.forEach(newEntry => {
                const html = contactHTML.createContactHTML(newEntry)
                printToDom(html)
            })
        })
}

export default contactList