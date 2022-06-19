function handleModal(action) {
    addModalBackdrop.style.display = action === 'show' ? 'flex' : 'none';
  }
  
  function addBeast(btn) {
    // get input values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('number').value;
  
    // add to beasts array
    const newBeast = {
      name: name,
      phone: phone
    };
    beasts.push(newBeast);
  
    // prepare element
    let clonedList = listTemplate.content.cloneNode(true);
    clonedList.querySelector('li').innerText = name;
    clonedList.querySelector('li').id = 'li-' + name;
  
    // append element to DOM
    contactsDisplay.appendChild(clonedList);
  
    handleModal('hide');
  }