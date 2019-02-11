(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
    `;
  }
};
var _default = contactHTML;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
    Author: Abbey
    Name: contactCollection.js
    Purpose: A contactCollection component that loads existing contacts from storage, and saves new ones. 
             Each new contact should have an auto-generated identifier.
    Explanation: Wrote an API object that contains two objects with functions, one to get the data, the other to post
*/
const APIObject = {
  getContactList: function () {
    return fetch("http://localhost:8088/contact").then(response => response.json());
  },
  postNewContact: function (object) {
    //try running this without the object populated
    return fetch("http://localhost:8088/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    });
  }
};
var _default = APIObject;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Author: Abbey
    Name: contactForm.js
    Purpose: contactForm component that, when filled out and a submit button is pressed, adds a new contact 
             to storage. It should import the ContactCollection component.
    Explanation: create function that will assign values of input fields in the form to a new object contact
                 then (after importing) applies the API object.postNewContact method to (contact) argument
*/
const createContactForm = function () {
  document.querySelector("#submit").addEventListener("click", () => {
    const name = document.querySelector("#nameInput").value;
    const phone = document.querySelector("#phoneNumberInput").value;
    const address = document.querySelector("#addressInput").value;
    const contact = {
      name: name,
      phone: phone,
      address: address
    };

    _contactCollection.default.postNewContact(contact);
  });
  return createContactForm;
};

var _default = createContactForm;
exports.default = _default;

},{"./contactCollection":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection"));

var _contact = _interopRequireDefault(require("./contact"));

var _printToDom = _interopRequireDefault(require("./printToDom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Author: Abbey
    Name: contactList.js
    Purpose: A ContactList component that displays all contacts. It should import the Contact component and 
            the ContactCollection component.
*/
const contactList = function () {
  _contactCollection.default.getContactList().then(contact => {
    console.log(contact);
    contact.forEach(newEntry => {
      const html = _contact.default.createContactHTML(newEntry);

      (0, _printToDom.default)(html);
    });
  });
};

var _default = contactList;
exports.default = _default;

},{"./contact":1,"./contactCollection":2,"./printToDom":6}],5:[function(require,module,exports){
"use strict";

var _contactForm = _interopRequireDefault(require("./contactForm"));

var _contactList = _interopRequireDefault(require("./contactList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Author: Abbey
    Name: main.js
    Purpose: Entry point of my application
*/
(0, _contactForm.default)();
(0, _contactList.default)();

},{"./contactForm":3,"./contactList":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
    Author: Abbey
    Name: printToDom.js
    Purpose: Function that will print any HTML elements to the DOM
*/
const printToDom = contact => {
  const contactDomElement = document.querySelector("#contactList");
  contactDomElement.innerHTML += contact;
};

var _default = printToDom;
exports.default = _default;

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvY29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL3ByaW50VG9Eb20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7O0FBTUEsTUFBTSxXQUFXLEdBQUc7QUFDaEIsRUFBQSxpQkFBaUIsRUFBRSxVQUFVLFFBQVYsRUFBb0I7QUFDbkMsV0FBUTs7a0JBRUUsUUFBUSxDQUFDLElBQUs7aUNBQ0MsUUFBUSxDQUFDLEtBQU07NEJBQ3BCLFFBQVEsQ0FBQyxPQUFROzs7S0FKckM7QUFRSDtBQVZlLENBQXBCO2VBYWUsVzs7Ozs7Ozs7Ozs7QUNuQmY7Ozs7Ozs7QUFRQSxNQUFNLFNBQVMsR0FBRztBQUNkLEVBQUEsY0FBYyxFQUFFLFlBQVk7QUFDeEIsV0FBTyxLQUFLLENBQUMsK0JBQUQsQ0FBTCxDQUNGLElBREUsQ0FDRyxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEZixDQUFQO0FBRUgsR0FKYTtBQUtkLEVBQUEsY0FBYyxFQUFFLFVBQVUsTUFBVixFQUFrQjtBQUFFO0FBQ2hDLFdBQU8sS0FBSyxDQUFDLCtCQUFELEVBQWtDO0FBQzFDLE1BQUEsTUFBTSxFQUFFLE1BRGtDO0FBRTFDLE1BQUEsT0FBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FGaUM7QUFLMUMsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFmO0FBTG9DLEtBQWxDLENBQVo7QUFPSDtBQWJhLENBQWxCO2VBZ0JlLFM7Ozs7Ozs7Ozs7O0FDZmY7Ozs7QUFUQTs7Ozs7Ozs7QUFXQSxNQUFNLGlCQUFpQixHQUFHLFlBQVk7QUFDbEMsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxnQkFBbEMsQ0FBbUQsT0FBbkQsRUFBNEQsTUFBTTtBQUM5RCxVQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxLQUFsRDtBQUNBLFVBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixFQUE0QyxLQUExRDtBQUNBLFVBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLEVBQXdDLEtBQXhEO0FBRUEsVUFBTSxPQUFPLEdBQUc7QUFDWixNQUFBLElBQUksRUFBRSxJQURNO0FBRVosTUFBQSxLQUFLLEVBQUUsS0FGSztBQUdaLE1BQUEsT0FBTyxFQUFFO0FBSEcsS0FBaEI7O0FBS0EsK0JBQUksY0FBSixDQUFtQixPQUFuQjtBQUNILEdBWEQ7QUFhQSxTQUFPLGlCQUFQO0FBQ0gsQ0FmRDs7ZUFpQmUsaUI7Ozs7Ozs7Ozs7O0FDckJmOztBQUNBOztBQUNBOzs7O0FBVEE7Ozs7OztBQVdBLE1BQU0sV0FBVyxHQUFHLFlBQVk7QUFDNUIsNkJBQUksY0FBSixHQUNLLElBREwsQ0FDVSxPQUFPLElBQUk7QUFDYixJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksT0FBWjtBQUNBLElBQUEsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsUUFBUSxJQUFJO0FBQ3hCLFlBQU0sSUFBSSxHQUFHLGlCQUFZLGlCQUFaLENBQThCLFFBQTlCLENBQWI7O0FBQ0EsK0JBQVcsSUFBWDtBQUNILEtBSEQ7QUFJSCxHQVBMO0FBUUgsQ0FURDs7ZUFXZSxXOzs7Ozs7QUNoQmY7O0FBQ0E7Ozs7QUFQQTs7Ozs7QUFTQTtBQUNBOzs7Ozs7Ozs7O0FDVkE7Ozs7O0FBS0EsTUFBTSxVQUFVLEdBQUcsT0FBTyxJQUFJO0FBQzFCLFFBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBMUI7QUFFQSxFQUFBLGlCQUFpQixDQUFDLFNBQWxCLElBQStCLE9BQS9CO0FBQ0gsQ0FKRDs7ZUFNZSxVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLypcbiAgICBBdXRob3I6IEFiYmV5XG4gICAgTmFtZTogY29udGFjdC5qc1xuICAgIFB1cnBvc2U6IFByb2R1Y2VzIGEgbmV3IGNvbnRhY3QgY29tcG9uZW50IHdpdGggYSBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgZGlzcGxheXMgYSBwZXJzb24ncyBuYW1lLCBwaG9uZSBudW1iZXIgYW5kIGFkZHJlc3NcbiovXG5cbmNvbnN0IGNvbnRhY3RIVE1MID0ge1xuICAgIGNyZWF0ZUNvbnRhY3RIVE1MOiBmdW5jdGlvbiAobmV3RW50cnkpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aDM+JHtuZXdFbnRyeS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8ZGl2PlBob25lIE51bWJlcjogJHtuZXdFbnRyeS5waG9uZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+QWRkcmVzczogJHtuZXdFbnRyeS5hZGRyZXNzfTwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvaHI+XG4gICAgYFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdEhUTUwiLCIvKlxuICAgIEF1dGhvcjogQWJiZXlcbiAgICBOYW1lOiBjb250YWN0Q29sbGVjdGlvbi5qc1xuICAgIFB1cnBvc2U6IEEgY29udGFjdENvbGxlY3Rpb24gY29tcG9uZW50IHRoYXQgbG9hZHMgZXhpc3RpbmcgY29udGFjdHMgZnJvbSBzdG9yYWdlLCBhbmQgc2F2ZXMgbmV3IG9uZXMuIFxuICAgICAgICAgICAgIEVhY2ggbmV3IGNvbnRhY3Qgc2hvdWxkIGhhdmUgYW4gYXV0by1nZW5lcmF0ZWQgaWRlbnRpZmllci5cbiAgICBFeHBsYW5hdGlvbjogV3JvdGUgYW4gQVBJIG9iamVjdCB0aGF0IGNvbnRhaW5zIHR3byBvYmplY3RzIHdpdGggZnVuY3Rpb25zLCBvbmUgdG8gZ2V0IHRoZSBkYXRhLCB0aGUgb3RoZXIgdG8gcG9zdFxuKi9cblxuY29uc3QgQVBJT2JqZWN0ID0ge1xuICAgIGdldENvbnRhY3RMaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0XCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfSxcbiAgICBwb3N0TmV3Q29udGFjdDogZnVuY3Rpb24gKG9iamVjdCkgeyAvL3RyeSBydW5uaW5nIHRoaXMgd2l0aG91dCB0aGUgb2JqZWN0IHBvcHVsYXRlZFxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvY29udGFjdFwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqZWN0KVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQVBJT2JqZWN0IiwiLypcbiAgICBBdXRob3I6IEFiYmV5XG4gICAgTmFtZTogY29udGFjdEZvcm0uanNcbiAgICBQdXJwb3NlOiBjb250YWN0Rm9ybSBjb21wb25lbnQgdGhhdCwgd2hlbiBmaWxsZWQgb3V0IGFuZCBhIHN1Ym1pdCBidXR0b24gaXMgcHJlc3NlZCwgYWRkcyBhIG5ldyBjb250YWN0IFxuICAgICAgICAgICAgIHRvIHN0b3JhZ2UuIEl0IHNob3VsZCBpbXBvcnQgdGhlIENvbnRhY3RDb2xsZWN0aW9uIGNvbXBvbmVudC5cbiAgICBFeHBsYW5hdGlvbjogY3JlYXRlIGZ1bmN0aW9uIHRoYXQgd2lsbCBhc3NpZ24gdmFsdWVzIG9mIGlucHV0IGZpZWxkcyBpbiB0aGUgZm9ybSB0byBhIG5ldyBvYmplY3QgY29udGFjdFxuICAgICAgICAgICAgICAgICB0aGVuIChhZnRlciBpbXBvcnRpbmcpIGFwcGxpZXMgdGhlIEFQSSBvYmplY3QucG9zdE5ld0NvbnRhY3QgbWV0aG9kIHRvIChjb250YWN0KSBhcmd1bWVudFxuKi9cblxuaW1wb3J0IEFQSSBmcm9tIFwiLi9jb250YWN0Q29sbGVjdGlvblwiXG5cbmNvbnN0IGNyZWF0ZUNvbnRhY3RGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVJbnB1dFwiKS52YWx1ZVxuICAgICAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVOdW1iZXJJbnB1dFwiKS52YWx1ZVxuICAgICAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRyZXNzSW5wdXRcIikudmFsdWVcblxuICAgICAgICBjb25zdCBjb250YWN0ID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHBob25lOiBwaG9uZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcbiAgICAgICAgfVxuICAgICAgICBBUEkucG9zdE5ld0NvbnRhY3QoY29udGFjdClcbiAgICB9XG4gICAgKVxuICAgIHJldHVybiBjcmVhdGVDb250YWN0Rm9ybVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0Rm9ybVxuXG4iLCIvKlxuICAgIEF1dGhvcjogQWJiZXlcbiAgICBOYW1lOiBjb250YWN0TGlzdC5qc1xuICAgIFB1cnBvc2U6IEEgQ29udGFjdExpc3QgY29tcG9uZW50IHRoYXQgZGlzcGxheXMgYWxsIGNvbnRhY3RzLiBJdCBzaG91bGQgaW1wb3J0IHRoZSBDb250YWN0IGNvbXBvbmVudCBhbmQgXG4gICAgICAgICAgICB0aGUgQ29udGFjdENvbGxlY3Rpb24gY29tcG9uZW50LlxuKi9cblxuaW1wb3J0IEFQSSBmcm9tIFwiLi9jb250YWN0Q29sbGVjdGlvblwiO1xuaW1wb3J0IGNvbnRhY3RIVE1MIGZyb20gXCIuL2NvbnRhY3RcIlxuaW1wb3J0IHByaW50VG9Eb20gZnJvbSBcIi4vcHJpbnRUb0RvbVwiO1xuXG5jb25zdCBjb250YWN0TGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBBUEkuZ2V0Q29udGFjdExpc3QoKVxuICAgICAgICAudGhlbihjb250YWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRhY3QpXG4gICAgICAgICAgICBjb250YWN0LmZvckVhY2gobmV3RW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBjb250YWN0SFRNTC5jcmVhdGVDb250YWN0SFRNTChuZXdFbnRyeSlcbiAgICAgICAgICAgICAgICBwcmludFRvRG9tKGh0bWwpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0TGlzdCIsIi8qXG4gICAgQXV0aG9yOiBBYmJleVxuICAgIE5hbWU6IG1haW4uanNcbiAgICBQdXJwb3NlOiBFbnRyeSBwb2ludCBvZiBteSBhcHBsaWNhdGlvblxuKi9cblxuaW1wb3J0IGNvbnRhY3RGb3JtIGZyb20gXCIuL2NvbnRhY3RGb3JtXCJcbmltcG9ydCBjb250YWN0TGlzdCBmcm9tIFwiLi9jb250YWN0TGlzdFwiXG5cbmNvbnRhY3RGb3JtKClcbmNvbnRhY3RMaXN0KCkiLCIvKlxuICAgIEF1dGhvcjogQWJiZXlcbiAgICBOYW1lOiBwcmludFRvRG9tLmpzXG4gICAgUHVycG9zZTogRnVuY3Rpb24gdGhhdCB3aWxsIHByaW50IGFueSBIVE1MIGVsZW1lbnRzIHRvIHRoZSBET01cbiovXG5jb25zdCBwcmludFRvRG9tID0gY29udGFjdCA9PiB7XG4gICAgY29uc3QgY29udGFjdERvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RMaXN0XCIpXG5cbiAgICBjb250YWN0RG9tRWxlbWVudC5pbm5lckhUTUwgKz0gY29udGFjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBwcmludFRvRG9tIl19
