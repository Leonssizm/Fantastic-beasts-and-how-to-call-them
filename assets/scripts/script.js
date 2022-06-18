// Global Variables

let addModalBackdrop = document.getElementById('add-modal-backdrop'); 
let listTemplate = document.getElementById('list-template');
let contactsDisplay = document.querySelector('#contacts');

let beasts = [
    { name: "Aku", phone: "598 666 666"  },
    { name: "Hexagonal Starfish", phone: "598 111 222" }
];


function firstVisit() {
    beasts.forEach(beast => {
        // prepare element
        let clonedList = listTemplate.content.cloneNode(true);
        clonedList.querySelector('li').innerText = beast.name;
        clonedList.querySelector('li').id = "li-" + beast.name;

        // append element to DOM
        contactsDisplay.appendChild(clonedList);
        
    });
}

firstVisit();




