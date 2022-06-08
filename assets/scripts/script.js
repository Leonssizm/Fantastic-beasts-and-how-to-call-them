
function openAddForm() {
    let addModalBackdrop = document.querySelector('#add-modal-backdrop');
    addModalBackdrop.style.display = "flex";

}
function closeAddForm() {
    let addModalBackdrop = document.querySelector('#add-modal-backdrop')
    addModalBackdrop.style.display = "none"
}

function addBeast() {
    const nameInput = document.querySelector('#name-input').value;

    let listTemplate = document.querySelector('#list-template');
    let clonedList = listTemplate.content.cloneNode(true);
    clonedList.querySelector('li').innerText = nameInput;

    let contactsDisplay = document.querySelector('#contacts');
    contactsDisplay.appendChild(clonedList);
}
function closeCard() {
    let closeCard = document.querySelector('#cards');
    closeCard.style.display = "none";
    console.dir(closeCard)
    
}

function appendTemplateToBody(){
    let template = document.querySelector('#card-template');
    let clonedCard = template.content.cloneNode(true);
    

    let cardsDisplay = document.querySelector('#card-display');
    cardsDisplay.appendChild(clonedCard);
}

function deleteCard(){
    closeCard();
    let clonedList = document.querySelector("li");
    let clonedListElement = clonedList;
    clonedList.style.display = "none";
}

// modifying the name used in the cards according to the name that user provides in the user input.

/* under construction
function modifyCardName () {

    
    let nameInput = document.querySelector('#name-input').value;
    let givenName = document.querySelector("card-name");
    

}
*/ 


