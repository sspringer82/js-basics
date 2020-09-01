// named functions
function greet(name: string = 'Klaus'): string {
  return `Hello ${name}`;
}

console.log(greet()); // Hello Klaus
console.log(greet(undefined)); // Hello Klaus
console.log(greet('Maria')); // Hello Maria

// ...theOthers rest parameters
function add(a: number, b: number, ...theOthers: number[] | Array<Number>) {
  return a + b + arguments[2];
}

// add(1); weil zu wenige parameter - in plain JS ist b === undefined
add(1, 1);
add(1, 1, 1);

// anonymous functions
const subtract = function (a: number, b: number): number {
  return a - b;
};
console.log('subtract', subtract(10, 2));

// iife - erzeugt einen neuen function scope
const iifeResult = (function (a, b) {
  const result = a * b;
  console.log(result);
  return result;
})(4, 5);
// console.log(
//   (function (a, b) {
//     return a * b;
//   })(4, 5),
// );

// Methoden
class MyFunctionClass {
  subtract = function (a: number, b: number): number {
    // nicht so schön wegen property mit function objekt
    return a - b;
  };
  add(a: number, b: number): number {
    // bevorzugt
    return a + b;
  }
}

const myFunctionObject = {
  add(a: number, b: number): number {
    // bevorzugt
    return a + b;
  },
  subtract: function (a: number, b: number): number {
    // nicht so schön wegen property mit function objekt
    return a - b;
  },
};

// arrow functions
const arrowAdd = (a: number, b: number) => {
  return a + b;
};
console.log(arrowAdd(1, 2));

// statement ist implizites return
const arrowAdd2 = (a: number, b: number) => a + b;

// in javascript: parameterklammern bei 1 parameter optional
// const pow = a => a * a;
// TS minimalversion:
const pow = (a: number) => a * a;

/* funktioniert nicht weil this ist nicht die instanz der klasse
class Foo {
  name = 'Rüdiger';
  renameAfter1Second() {
    setTimeout(function () {
      this.name = 'Hans-Peter';
      console.log(this.name);
      console.log(this);
    }, 1000);
  }
}*/

// Arrow function hat this immer vom umgebenden Kontext
class Foo {
  name = 'Rüdiger';
  renameAfter1Second() {
    setTimeout(() => {
      this.name = 'Hans-Peter';
      console.log(this.name);
      console.log(this);
    }, 1000);
  }
}

const foo = new Foo();
foo.renameAfter1Second();
