/**
 * Symbol untuk data unik
 * Symbol gak bisa auto convert to String
 * penambahhan property pakai symbol, tidak dapat di overwritten
 * Symbol tidak akan terlihat pada for .. in, object.keys(user)
 * Symbol dapat dicopy menggunakan Object.assign(dest, src obj)
 * Symbol.for(key) : Auto buat jika tidak ada symbolnya, dan re
 * Symbol.keyFor("variabelnnya") : menampilkan nama/description
 *
 *
 */

// local symbol
let id = Symbol("desc_id");

// ubah symbol ke String
id.toString();
console.log(typeof id);
console.log(id.description);

// buat object, penambahan property
let address = Symbol("alamat");
let user = {
  nama: "Razzaaq",
  // penambahan property Symbol pada object literal
  [address]: "jln Hassanudin",
};

// calon property menggunakan symbol
let age = Symbol("umur");
user[age] = 500;

// Global Symbols (symbol.for)
let idAgain = Symbol.for("id_desc");
console.log(idAgain);

// Get symbol by name (global.symbol)
console.log(Symbol.keyFor(idAgain));
