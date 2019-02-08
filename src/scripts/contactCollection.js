/*
    Author: Abbey
    Name: contactCollection.js
    Purpose: A contactCollection component that loads existing contacts from storage, and saves new ones. 
             Each new contact should have an auto-generated identifier.
    Explanation: Wrote an API object that contains two objects with functions, one to get the data, the other to post
*/

const APIObject = {
    getContactList: function () {
        return fetch("http://localhost:8088/contact")
            .then(response => response.json())
    },
    postNewContact: function (object) { //try running this without the object populated
        return fetch("http://localhost:8088/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        })
    }
}

export default APIObject