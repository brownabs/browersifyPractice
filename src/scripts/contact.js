/*
    Author: Abbey
    Name: contact.js
    Purpose: Produces a new contact component with a factory function that displays a person's name, phone number and address
*/

const contactHTML = {
    createContactHTML: function (newEntry) {
        return `
        <section>
            <h3>${newEntry.name}</h3>
            <div>Phone Number: ${newEntry.phone}</div>
            <div>Address: ${newEntry.address}</div>
        </section>
        </hr>
    `
    }
}

export default contactHTML