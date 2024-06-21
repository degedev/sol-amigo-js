document.addEventListener("DOMContentLoaded", function () {
  const userForm = document.getElementById("userForm");
  const clearFormButton = document.getElementById("clearForm");

  loadUsers();

  userForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    const user = {
      username: username,
      email: email,
      date: new Date().toLocaleString(),
    };

    addUserToLocalStorage(user);

    userForm.reset();
  });

  clearFormButton.addEventListener("click", function () {
    userForm.reset();
  });

  function addUserToLocalStorage(user) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }

  function loadUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
  }
});
