outer: for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");

    if (!input) break outer; // outer bertindak sebagai label, bisa juga digunain buat continue
  }
}

let i = 0;
while (++i < 5) {
  // menghasilkan 1 ke 4. karena i dimulai dari 1 tanpa mereturn nilai lama
}
while (++i < 5) {
  // menghasilkan 1 ke 5. Karena i dimulai dari 0 dgn me return nilai lama
}

let angka;
do {
  angka = prompt("Masukkan angka lebih dari 100", "");
} while (angka <= 100 && angka);

nextPrime: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  alert(i);
}
