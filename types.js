// variable types
var myVar = 'myVar'; // nicht mehr verwenden - Variable im Function Scope
let myLeet = 'myLet'; // variable im Block Scope
const myConst = 'myConst'; // Konstante im Block Scope - DAS IST DAS WAS IHR NUTZEN WOLLT (in 80% der Fälle)

// ACHTUNG ANTIPATTERN voraus
function hoisting() {
  // intern: var myHoisting = undefined;
  console.log('value', myHoisting);
  var myHoisting = 'myValue';
  console.log('value', myHoisting);
}
hoisting();
// ANTIPATTERN wieder vorbei

// primitives (by-value)
// https://developer.mozilla.org/de/docs/Glossary/einfache_datenelemente
let myString = 'hallo "Welt"'; // gleichwertig mit ""
let myString2 = "hallo 'Welt'"; // gleichwertig mit ''
let myString3 = `hallo Welt`; // Template Strings, erlauben Zeilenumbrüche + Variablenevaluation
let myTplString = `${myString2} ${myString3}`;

let myNumber = 4;
let myNumber2 = 4.2;
let myBoolean = true;
let myNull = null; // kein Wert - das gehört euch
let myUndefined = undefined; // kein Wert - das gehört der Engine (nur für Vergleiche verwenden)
let mySymbol = Symbol();

const o = {
  [mySymbol]: 'foo',
};

console.log(o[mySymbol]);

let myByValue = 'original';

function modify(val) {
  val = 'modification';
  console.log(val);
}
modify(myByValue);
console.log(myByValue);

// composites (by-reference)
const myProp = 'firstname';
const myObj = {
  [myProp]: 'Klaus',
  lastname: 'Müller',
};
const myObj2 = new Object(); // macht fast keiner

console.log(myObj.firstname);
console.log(myObj[myProp]);

const myArr = [1, 2, 3];

const result = myArr.map((a) => a * a).reduce((prev, curr) => prev + curr, 0);

const mySet = new Set();
const myMap = new Map();

const myReference = { name: 'Klaus' };
// ANTIPATTERN: referenz modifizieren
function modify2(value) {
  value.name = 'Otto';
  console.log(value.name);
}
modify2(myReference);
console.log(myReference.name);

function modify3(value) {
  const clone = { ...value };
  // Array const clone = [... value];
  clone.name = 'Maria';
  console.log(clone.name);
}

// Kopieren von Objekten
// - https://github.com/immutable-js/immutable-js
// - https://github.com/immerjs/immer
// - https://github.com/kolodny/immutability-helper

// to use this: npm install immutability-helper
const update = require('immutability-helper');

const myCopy = update(myObj, { firstname: { $set: 'Claudia' } });

console.log(myCopy);
