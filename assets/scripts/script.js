

function openAddForm() {
    let addModalBackdrop = document.querySelector('#add-modal-backdrop')
    addModalBackdrop.style.display = "flex"

}
function closeAddForm() {
    let addModalBackdrop = document.querySelector('#add-modal-backdrop')
    addModalBackdrop.style.display = "none"
}

function addBeast() {
    const nameInput = document.querySelector ('#name-input').value

    let newElement = document.createElement('li');
    newElement.classList.add('list-group-item')
    newElement.textContent = nameInput;
    
    const contactsList = document.querySelector('#contacts')
    contactsList.appendChild(newElement)
}