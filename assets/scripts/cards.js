function addCard(el) {
    // get beast id
    const beastId = el.id.substring(3);
    
    if (document.getElementById("card-" + beastId) === null) {

                
             // get beast data from array
    let beast = beasts.find(beast => beast.name === beastId);
    
    // clone card template
    let template = document.getElementById('card-template');
    let clonedCard = template.content.cloneNode(true);

    // change name & phone
    clonedCard.querySelector('h2').innerText = beast.name;
    clonedCard.querySelector('p').innerText = beast.phone;
    clonedCard.getElementById('CARD_ID').id = 'card-' + beastId;

    
    // display card
    let cardsDisplay = document.getElementById('card-display');
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

    let beast = beasts.find(beast => beast.name === beastName)
    beasts.splice(beast, 1);
    
    // also remove li element from sidebar from DOM
    const itemRemove = document.getElementById("li-" + beastName);
    const contactsArray = document.getElementById("contacts");
    contactsArray.removeChild(itemRemove);
   
}
// TASK
function callBeast(callBtn) {
   
    let beastId = callBtn.parentNode.id.substring(5);

    let beast = beasts.find(beast => beast.name === beastId);
    beasts.splice(beast.index, 1);
  
    alert(`CALLING: ${beast.phone}`);

}