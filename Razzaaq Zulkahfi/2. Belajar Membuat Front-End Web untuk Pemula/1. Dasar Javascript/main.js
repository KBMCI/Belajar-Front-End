"use strict";

/* Use Strict / Strict mode digunakan sbg gerbang dimana js modern ditetapkan. diletakkan di atas code */
/*
Keuntungan JS modern:
1. Bisa supports classes dan modules
2. struktur bahasa tingkat lanjut
/* 
pas pake developer tools buat ngejalanin code, itu dalam keadaan ga pake "use strict".
Solusi: Tulis ulang strictnya. shift+enter buat baris baru
*/

/* ini digunakan 
buat komen dgn baris yg beda 
biasanya dipake buat disable code temporarily */

/* let = var  = mendeklarasikan variabel */
let negara1 = "Indonesia",
  negara2 = "Malaysia",
  negara3 = "Thailand";
// alert(negara1);
// [negara2, negara3].forEach(alert);

// penggunaan use strict tidak mengizinkan menulis tanpa variabel, kalau ga pake US bisa

/* Const = final variabel */
const namaTetap = "Razzaaq";
// namaTetap = "Udin"; akan eror

/*UPPERCASE CONSTATS (used as aliases for “hard-coded” values)*/
const COLOR_RED = "#F00";
// Ketika mau gunain warna merah
let color = COLOR_RED;
// Lebih mudah ketimbang nulis #F00

/*  TYPE DATA */
// alert("string" / 2); // NaN, tanda error dlm operasi hitung

/* BIG INT */
// Max number is +- (2^53 -1). lebih dari itu biasanya pake BIG INT untuk cryptography or microsecond-precision timestamps.
// n di akhir menandakan itu bigint
const bigint = 1234567890123456789012345678901234567890n;
// jarang digunakan

/* String */
// A string may consist of zero characters (be empty), one character or many of them.
// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.

const NAMA = "Razzaaq";
// pakai ${..} untuk embed an variabel/expression
let contohBackticks = `Hello nama saya ${NAMA} umur ${10 + 10}!`;
alert(contohBackticks);

/* BOOLEAN */
let isGreater = 4 > 1;
alert(isGreater);
let argentinaLose = true;
let franceWin = false;

/* NULL */
// null bukan berarti dia mempresentasikan non-existing object atau null pointer, tetapi lebih ke tidak diketahui, kosong
let prestasiIndonesia = null;

/* UNDEFINED */
// valuenya ga di isi
let tembak;
alert(tembak);

/* TYPE OF OPERATOR */
// mereturn typdata dari data yg diinputkan
typeof 0; //number
typeof true; //boolean
typeof Math; // "object"
typeof Symbol("id"); // "symbol"

/* PROMPT */
// menyediakan input user
// par 1 = text, par2 = isian user
let negaraPildun = prompt(
  "Siapakah yang akan menjadi juara pildun?",
  "Isi Negara Anda"
);
alert(`Semoga ${negaraPildun} juara !!`);

/* CONFIRM */
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel

let isWinner = confirm("Yakin Juara?");
alert(isWinner);

/* UBAH TYPE DATA */
let str = "123";
let num = Number(str);
str = String(num);

// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false

// alert( Boolean("hello") ); // true
// alert( Boolean("") ); // false
let password;
let role = prompt("Masukkan Role Anda!", "");
if (role == "admin") {
  password = prompt("Masukkan Password!", "");
  if (password == "TheMaster") alert("Welcome!");
  else if (password !== "") alert("Canceled");
  else alert("Wrong Password");
} else alert("i dont know you");
