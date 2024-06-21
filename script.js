document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
      window.location.href = "/admin/admin.html";
    } else {
      alert(
        "Usuário ou senha incorretos!\nDica\nUsuário: admin\nSenha: admin "
      );
    }
  });
});
