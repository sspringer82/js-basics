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
let myString3 = `hallo Welt`; //

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
