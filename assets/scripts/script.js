
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
    
    if (document.querySelector("#card-" + beastId) === null) {

                
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
    clonedCard.querySelector('#CARD_ID').id = 'card-' + beastId;

    
    // display card
    let cardsDisplay = document.querySelector('#card-display');
    cardsDisplay.appendChild(clonedCard);
}

}
      
// TASK:
function closeCard(closeButton) {
    // Delete from DOM
    closeButton.parentNode.parentNode.removeChild(closeButton.parentNode);
}

// TASK:
function deleteCard(deleteBtn) {
    // do same as closeCard
    closeCard(deleteBtn);
    //Delete from beasts array
    cardId = deleteBtn.parentNode.id;
    beastName = cardId.substring(5);

    let beastIndex;
    for (let i = 0; i < beasts.length; i++) {
        if (beasts[i].name === beastName) {
            beastIndex = i;
            break;
        }
    }
    beasts.splice(beastIndex, 1);
    
    // also remove li element from sidebar from DOM
    const itemRemove = document.querySelector("#li-" + beastName);
    const contactsArray = document.querySelector("#contacts");
    contactsArray.removeChild(itemRemove);
   
}
// TASK
function callBeast(callBtn) {
   

    Id = callBtn.parentNode.id;
    let beastsId = Id.substring(5);

    let callId;
    for (let i = 0; i<beasts.length; i++) {
        if (beasts[i].name === beastsId) {
            callId = i;
        }
        else {

        }

    }

    alert(`CALLING: ${beasts[callId].phone}`);

}
