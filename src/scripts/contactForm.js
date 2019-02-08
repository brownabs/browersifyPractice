/*
    Author: Abbey
    Name: contactForm.js
    Purpose: contactForm component that, when filled out and a submit button is pressed, adds a new contact 
             to storage. It should import the ContactCollection component.
    Explanation: create function that will assign values of input fields in the form to a new object contact
                 then (after importing) applies the API object.postNewContact method to (contact) argument
*/

import API from "./contactCollection"

const createContactForm = function () {
    document.querySelector("#submit").addEventListener("click", () => {
        const name = document.querySelector("#nameInput").value
        const phone = document.querySelector("#phoneNumberInput").value
        const address = document.querySelector("#addressInput").value

        const contact = {
            name: name,
            phone: phone,
            address: address
        }
        API.postNewContact(contact)
    }
    )
    return createContactForm
}

export default createContactForm

