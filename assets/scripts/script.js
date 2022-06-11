
let beasts = [
    { name: "fox", phone: "598 999 999"  },
    { name: "bear", phone: "598 111 222" }
];


function firstVisit(nme) {
    for (let i = 0; i < beasts.length; i++) {

        // prepare element
        let listTemplate = document.querySelector('#list-template');
        let clonedList = listTemplate.content.cloneNode(true);
        clonedList.querySelector('li').innerText = beasts[i].name;
        clonedList.querySelector('li').id = "li-" + beasts[i].name;

        // append element to DOM
        let contactsDisplay = document.querySelector('#contacts');
        contactsDisplay.appendChild(clonedList);
    }
}

firstVisit();


function openAddForm() {
    let addModalBackdrop = document.querySelector('#add-modal-backdrop');
    addModalBackdrop.style.display = "flex";
}

function closeAddForm() {
    let addModalBackdrop = document.querySelector('#add-modal-backdrop')
    addModalBackdrop.style.display = "none"
}



function addBeast() {
    // get input values
    const name = document.querySelector('#name-input').value;
    const phone = document.querySelector('#number-input').value;

    // add to beasts array
    const newBeast = {
        name: name,
        phone: phone,
    }
    beasts.push(newBeast);

    // prepare element
    let listTemplate = document.querySelector('#list-template');
    let clonedList = listTemplate.content.cloneNode(true);
    clonedList.querySelector('li').innerText = name;
    clonedList.querySelector('li').id = 'li-' + name;

    // append element to DOM
    let contactsDisplay = document.querySelector('#contacts');
    contactsDisplay.appendChild(clonedList);
}





function addCard(el) {
    // get beast id
    const beastId = el.id.substring(3);
    
    // TASK
    // BUG FIX:
    // check if card with that id already exists
    // if card does not exist with id card-{beastId} and do everything we are already doing
    // else do nothing

    // get beast data from array
    let beast;
    for (let i = 0; i < beasts.length; i++) {
        if (beasts[i].name === beastId) {
            beast = beasts[i];
        }

    }
    
    // clone card template
    let template = document.querySelector('#card-template');
    let clonedCard = template.content.cloneNode(true);

    // change name & phone
    clonedCard.querySelector('h2').innerText = beast.name;
    clonedCard.querySelector('p').innerText = beast.phone;

    
    // display card
    let cardsDisplay = document.querySelector('#card-display');
    cardsDisplay.appendChild(clonedCard);

    
    
}


// TASK:
function closeCard(closeButton) {
    // Delete from DOM
    
    closeButton.parentNode.parentNode.removeChild(closeButton.parentNode);
    
    
  
    // Remove from beasts array
    

    /*
    let closeCard = document.querySelector('#cards');
    closeCard.style.display = "none";
    console.dir(closeCard)
    */

}

// TASK:
function deleteCard(deleteBtn) {
    // do same as closeCard
    closeCard(deleteBtn);
    // also remove li element from sidebar from DOM
   
}
// TASK
function callBeast() {
    alert(`CALLING: ${beasts[0].phone}`);
}