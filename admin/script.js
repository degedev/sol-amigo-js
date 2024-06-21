document.addEventListener("DOMContentLoaded", function () {
  const userForm = document.getElementById("userForm");
  const userList = document.getElementById("userList");
  const clearFormButton = document.getElementById("clearForm");
  const clearAllButton = document.getElementById("clearAll");
  const searchInput = document.getElementById("search");

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
    addUserToList(user);

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
   users.forEach(addUserToList);
  }

  function addUserToList(user) {
    const li = document.createElement("li");
    li.textContent = `Data: ${user.date}, Nome: ${user.username}, E-mail: ${user.email}`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.addEventListener("click", function () {
      deleteUser(user);
      userList.removeChild(li);
    });
    li.appendChild(deleteButton);
    userList.appendChild(li);
  }

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const items = userList.getElementsByTagName("li");

    Array.from(items).forEach(function (item) {
      const text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });

  clearAllButton.addEventListener("click", function () {
    if (confirm("Tem certeza de que deseja excluir todos os itens?")) {
      localStorage.removeItem("users");
      userList.innerHTML = "";
    }
  });
  function deleteUser(userToDelete) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.filter(
      (user) =>
        !(
          user.username === userToDelete.username &&
          user.email === userToDelete.email &&
          user.date === userToDelete.date
        )
    );
    localStorage.setItem("users", JSON.stringify(users));
  }
});