function saveToLocalStorage(event) {
    event.preventDefault();

    const name = document.getElementById('username').value;
    const email = document.getElementById('emailId').value;
    const phone = document.getElementById('phonenumber').value;

    let userObj = {
        name,
        email,
        phone
    };

    localStorage.setItem(email, JSON.stringify(userObj));
    showUserOnScreen(userObj);
}

function showUserOnScreen(userObj) {
    const parentElement = document.getElementById('listofitems');
    const listItem = document.createElement('li');
    listItem.innerText = `${userObj.name} - ${userObj.email} - ${userObj.phone}`;

    const deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = 'Delete';
    deleteButton.onclick = () => {
        localStorage.removeItem(userObj.email);
        parentElement.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    parentElement.appendChild(listItem);
}
