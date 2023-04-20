function SaveToLocalStorage(event) {
    event.preventDefault();
    const name1 = event.target.username.value
    const email = event.target.emailId.value
    const phone = event.target.phonenumber.value
    localStorage.setItem('name', name1)
    localStorage.setItem('email', email)
    localStorage.setItem('phone', phonenumber)

}