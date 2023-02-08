/**
 * method adalah function yang menjadi property dari sebuah object
 * Constructor adalah new function() yang digunakan untuk menduplikat object dengan isi yang sama
 */

let user = {
  name: "Razzaaq",
  age: "20",
  sayYes() {
    alert(this.name);
  },
};

// craate method with funtion expression
user.sayHi = function () {
  alert("hallo");
};

// user.sayHi();

// created method with function declare

function sayNo() {
  alert("No");
}

user.sayNo = sayNo;

// created method with shorthand

// user.sayYes();
// create calculator

/*
let calculator = {
  read() {
    this.oprandLeft = +prompt("Masukkan angka a", "");
    this.operandRight = +prompt("Masukkan angka b", "");
  },

  sum() {
    return this.operandRight + this.oprandLeft;
  },

  mul() {
    return this.operandRight * this.oprandLeft;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

*/
// Play ledder
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    alert(this.step);
  },
};

// Constructor accumulator
function Accumulator(value) {
  this.values = value;
  this.ayams = ayam;

  // methods in constructor
  this.read = function () {
    // no need return value if use "This". Already implicitly returned
    this.values += +prompt("Tambahkan: ", 0);
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

alert(accumulator.values);
