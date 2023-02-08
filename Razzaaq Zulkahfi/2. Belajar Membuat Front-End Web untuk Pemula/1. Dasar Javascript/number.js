/**
 * Number
 *
 */

function readNumber() {
  let a = +prompt("Masukkan angka", "");
  if (Number.isFinite(a)) {
    alert(`read: ${a}`);
  } else {
    readNumber(a);
  }
}

readNumber();
