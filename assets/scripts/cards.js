function addCard(el) {
    // get beast id
    const beastId = el.id.substring(3);
  
    if (document.getElementById('card-' + beastId) === null) {
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
      cardsWrapper.appendChild(clonedCard);
    }
  }
  
  function closeCard(closeButton) {
    cardsWrapper.removeChild(closeButton.parentNode.parentNode);
  }
  
  function deleteCard(deleteBtn) {
    // do same as closeCard
    closeCard(deleteBtn);
    //Delete from beasts array
    cardId = deleteBtn.parentNode.parentNode.id;
    beastName = cardId.substring(5);
  
    let beast = beasts.find(beast => beast.name === beastName);
    beasts.splice(beast, 1);
    // also remove li element from sidebar from DOM
    const itemRemove = document.getElementById('li-' + beastName);
    const contactsArray = document.getElementById('contacts');
    contactsArray.removeChild(itemRemove);
  }
  
  function callBeast(callBtn) {
    let beastId = callBtn.parentNode.parentNode.id.substring(5);
  
    let beast = beasts.find(beast => beast.name === beastId);
  
    alert(`CALLING: ${beast.phone}`);
  }
  