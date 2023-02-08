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

/*========================================================
let password;
let role = prompt("Masukkan Role Anda!", "");
// if (role == "admin") {
//   password = prompt("Masukkan Password!", "");
//   if (password == "TheMaster") {
//     alert("Welcome!");
//   } else if (password === "" || password === null) {
//     alert("Canceled");
//   } else {
//     alert("Wrong Password");
//   }
// } else alert("i dont know you");


switch (role) {
  case "admin":
    password = prompt("Masukkan Password", "");
    switch (password) {
      case "The Master":
        alert("Welcome!");
        break;
      case "":
      case null:
        alert("Canceled");
        break;
      default:
        alert("Wrong Password");
        break;
    }

    break;
  // If there is no break then the execution continues with the next case without any checks.

  default:
    alert("i don't know you!");
}

function showMessage1() {
  let message = "Valar Morgulis, " + role; //Variabel lokal
  alert(message);
}

showMessage1();
function textPengganti() {
  alert("Pesannya Kosong bro");
}
function showMessage(from, text = textPengganti()) {
  //Ini namanya parameter

  // from = "XXXX " + from + " XXXX";
  alert((from ?? "Kosong oi") + ": " + text);
}
showMessage("Razzaaq", "Halo sobat FE"); //ini namanya argumen;
showMessage();

function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}

========================================================*/

// function pow(x, n) {
//   let result = x;
//   for (let i = 1; i < n; i++) {
//     result = result * x;
//   }

//   return alert(result);
// }

// pow(3, 3);

function ask(question, ya, tidak) {
  if (confirm(question)) {
    ya();
  } else {
    tidak();
  }
}

function showYa() {
  alert("Kamu sehat, yeay");
}

function showTidak() {
  alert("Kamu mengambaikan kesehatanmu");
}

// showYa() mereturn valuenya
// showYa menjalankan fungsi aslinya

ask("Apakah kamu sehat?", showYa, showTidak);

let age = +prompt("umur-nya berapa?", "");

let welcome;

// menggunakan function declaration untuk fungsi yang kondisional

if (age > 18 && age < 25) {
  welcome = function () {
    alert("anda Dewasa");
  };
} else if (age > 25) {
  welcome = function () {
    alert("anda Belia");
  };
} else {
  welcome = function () {
    alert("anda Masih anak anak");
    ask("udah dapet izin dari ortu?", showYa, showTidak);
  };
}

welcome();

// Arrow Function
let getTwoYearsLater = (oldAge) =>
  alert(`Umur anda 2 tahun lagi ${oldAge + 2}`);

getTwoYearsLater(age);

// task
function ask2(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

ask(
  "Do You agree?",
  () => alert("You agreed"),
  () => alert("You canceled the execution.")
);
