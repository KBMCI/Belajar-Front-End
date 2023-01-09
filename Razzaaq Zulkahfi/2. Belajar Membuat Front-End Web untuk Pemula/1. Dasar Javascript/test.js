/* QUESTION MARK */

// let result;
// result = a + b < 4 ? "Below" : "Over";

// let message =
//   login == "Employee"
//     ? "Hello"
//     : login == "Director"
//     ? "Greetings"
//     : login == ""
//     ? "No login"
//     : "";
// The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code.

let password;
let role = prompt("Masukkan Role Anda!", "");
if (role == "admin") {
  password = prompt("Masukkan Password!", "");
  if (password == "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === "null") {
    alert("Canceled");
  } else {
    alert("Wrong Password");
  }
} else alert("i dont know you");
