function SaveToLocalStorage(event) {
    event.preventDefault()
    const name1 = event.target.username.value
    const email = event.target.emailId.value
    const phone = event.target.phonenumber.value
    // localStorage.setItem('name', name1)
    //  localStorage.setItem('email', email)
    //  localStorage.setItem('phone', phone)

    let myObj = {
        name1,
        email,
        phone,
    }
    localStorage.setItem(obj.email, JSON.stringify(myObj))
    showUserOnScreen(myObj)


}
function showUserOnScreen() {
    const ParentElement = document.getElementById('listofitems')
    ParentElement.innerHTML = pare.innerHTML + $(obj.name) - $(obj.emailId) - $(obj.phonenumber)
    const deleteButton = document.createElement('input')
    deleteButton.type = "button"
    deleteButton.value = 'Delete'
    deleteButton.onclick = () => {
        localStorage.removeItem(obj.email)
        ParentElement = removeChild(childElement)
    }
    childElement = appedChild(deleteButton)
    ParentElement.appendChild(childItem)
}

