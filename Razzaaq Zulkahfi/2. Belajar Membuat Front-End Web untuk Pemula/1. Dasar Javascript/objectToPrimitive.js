/**
 * Object --> Boolean --> true
 * Object bisa diubah menjadi numeric dan string
 * Mempersingkat Objects atau matematika function
 * Sting object digunakan untuk console.log(obj)
 *
 *
 */

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },

  // same as
  /**
   * obj[Symbol.toPrimitive] = function(hint){
   *
   * }
   */
};

console.log(user);
console.log(+user);
console.log(user + 500);

// cara lain
let user2 = {
  nama: "Bagas",
  uang: 1000,

  toString() {
    return this.nama;
  },

  // sbg default
  valueOf() {
    return this.uang;
  },
};
