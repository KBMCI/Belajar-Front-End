/**
 * Objects itu bisa nyimpen dua values atau lebih
 * Membuat dengan {...}
 * Property/ nama/ identifier memiliki value
 * Property value shorthand memudahkan kita dalam menulis value sama dengan nama propertinya
 * tidak ada aturan dalam penulisan nama property
 * Property which is doesn't exist, will display undefined. "in" for check properties exist or not with return true or false
 * user.address?.street itu adalah contoh optional-chaining dimana digunakan untuk property yang bersifat opsional seperti pada alamat. return undefined/null
 *
 *
 *
 *
 */

// 2 Create an object without a value
// let user = new Objects(); "object constructor"
let user2 = {}; // object literal"

let askMoney = prompt("Pilih mata uang!", "rupiah");

// Create an object with property
let user3 = {
  name: "Razzaaq",
  age: 20,
  "Sekolah Dasar": "Brawijaya",
  [askMoney]: 40000,
};

// Call one of two properties
alert(user3.name);
alert(user3.rupiah);
// set
user2["Seperti Binatang"] = true;
// get
alert(user2["Seperti Binatang"]);
// delete
delete user2["Seperti Binatang"];
alert(user2["Seperti Binatang"]);

// Display result of prompt from []
let ask = prompt("Apa yg ingin kamu ketahui?", "age");
alert(user3[ask]); //20

// mengambil property name
let fruit = prompt("buah?", "pisang");
let bag = {};
// take property name from the fruit variable
bag[fruit] = 5;

// check with "in"
alert("age" in user3);

// check all properties of user3
for (let kunci in user3) {
  alert(kunci);
}

// Optional-Chaining with function
let userAdmin = {
  admin() {
    alert("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.(); //function admin
userGuest.admin?.(); //nothing happens

// Optional-Chaining with brackets
let key = "firstname";
let user1 = {
  firstName: "Bagas",
};
let user2 = null;
alert(user1?.[key]); // Bagas
alert(user2?.[key]); // undefined
delete user?.name; // delete if user.name if user exist
