let schedule = {};

schedule["Buah"] = 5;
delete schedule["Buah"];

function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}

/*
alert(isEmpty(schedule));
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sum(obj) {
  let result = 0;
  for (let prop in obj) {
    result += +obj[prop];
  }

  alert(result);
}

/*
sum(salaries);
*/

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      let result = obj[key] * 2;
      obj[key] = result;
    }
  }
}

/*
multiplyNumeric(menu);
*/

for (let keys in menu) {
  alert(menu[keys]);
}

// Duplicate Object
let copy = {};
for (let keyss in menu) {
  copy[keyss] = menu[keyss];
}

let luas = {
  luasnya: 999,
};

// copy property from another object into the object
// (tmpt object yang mau di copy, object yang dicopy)
Object.assign(copy, luas, { width: 111 });
// simple copy object, same reference
let copySimple = Object.assign({}, menu);

// nested object
let menuNested = {
  width: 200,
  height: 300,
  title: "My menu",
  amount: {
    left: 130,
    right: 28,
  },
};

// alert(menuNested.amount.left); //130

// copy object with different reference the object
let clone = structuredClone(menuNested);
menuNested.amount.left = 66;

// interlinked objects
function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);
