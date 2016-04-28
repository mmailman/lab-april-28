'use strict';

// LAB: SORTING AND CAMPY SCI-FI

// Be sure to read all the comments!
// That's where the instructions are!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs. */
function Blob(){
}
// TODO: Next, create an instance of Blob named blob.
var blob = new Blob();
 /*TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/
var totalPopulation = 1000;
var hour = 0;
while (totalPopulation > 0){
  hour++;
  totalPopulation -= hour;
  // console.log(totalPopulation);
}
console.log('Hours it took to eat Dowington: ' + hour);
console.log(totalPopulation);

var hoursSpentInDowington = 45; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  var hoursSpent = 0;
  if(population === 0){
    return 0;
  } else {
    while (population > 0){
      hoursSpent++;
      population -= peoplePerHour;
      peoplePerHour++;
    }
    return hoursSpent;
  }
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
console.log(blob.hoursToOoze(8406000, 273));

assert(blob.hoursToOoze(1000, hoursSpentInDowington) === 19, 'The time for blob to eat Dowington\'s sister town of 1000 people should be 20 hours.');

var harrisburg = 49188;
assert(blob.hoursToOoze(harrisburg, hoursSpentInDowington) > 10, 'It should take blob 273 Hours to eat Harrisburg');

var nyc = 8406000;
assert(blob.hoursToOoze(nyc, 273) === 3837, 'After eating Harrisburg, blood took 3837 Hours to eat New York City');

//*********************************************************
// PROBLEM 2: Universal Translator
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing (homePlanet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
  console.log(hello[this.language]);
  return hello[sb.language];

    //TODO: put this on the SentientBeing prototype
};

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
function Human() {
  SentientBeing.call(this, 'Earth', 'federation standard');
}
Human.prototype = Object.create(SentientBeing.prototype);

function Klingon() {
  SentientBeing.call(this, 'Qo\'noS', 'klingon');
}
Klingon.prototype = Object.create(SentientBeing.prototype);

function Romulan() {}
Romulan.prototype = new SentientBeing('Romulus','romulan');

//var person = new Romulan();
//console.log(person);
assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert((new Klingon()).sayHello(new Human()) === 'hello', 'the human should hear hello');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert((new Romulan()).sayHello(new Human()) === 'hello', 'the human should hear hello');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH', 'the klingon should hear nuqneH');

//*********************************************************
// PROBLEM 3: Sorting
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: Sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

    if(a.charAt(a.length - 1) < b.charAt(b.length - 1)){
      return -1;
    }else if(a.charAt(a.length - 1) > b.charAt(b.length - 1)){
      return 1;
    }else {
      return 0;
    }
  }
  return stringArray.sort(byLastLetter);
}

// Warn if overriding existing method
if(Array.prototype.equals){
  console.warn('Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there\'s a framework conflict or you\'ve got double inclusions in your code.');
}
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array){
    return false;
  }

  // compare lengths - can save a lot of time
  if (this.length != array.length){
    return false;
  }

  for (var i = 0, l = this.length; i < l; i++) {
  // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i])){
        return false;
      }
    }else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, 'equals', {enumerable: false});

var strArray = ['Aardvark', 'Bad', 'Cat'];
assert(lastLetterSort(strArray).equals(['Bad', 'Aardvark', 'Cat']), 'The string array should be sorted by last letter, Bad, Aardvark, Cat.');
var strArray2 = ['Chill', 'Bob', 'Sleep'];
assert(lastLetterSort(strArray2).equals(['Bob', 'Chill', 'Sleep']), 'The string array should be sorted by last letter, Sleep, Chill, Bob.');

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach(function(number){
    sum += number;
  });
  return sum;
}
var numArray = [1,2,3,4,5];
var numArray2 = [6,7,8,9,10];
assert(sumArray(numArray) === 15, 'The sum of this array should equal 15.');
assert(sumArray(numArray2) === 40, 'The sum of this array should equal 40.');

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    return sumArray(a) - sumArray(b);
  });
}

var multiArray = [[1,2],[5,6],[3,4]];
sumSort(multiArray);
// console.log(multiArray);
var multiArray2 = [[7,8],[9,10],[11,12]];
sumSort(multiArray2);

// console.log(multiArray.toString());

assert(multiArray.toString() === '1,2,3,4,5,6', 'multiArray should be sorted to [[1,2],[3,4],[5,6]]');
assert(multiArray2.toString() === '7,8,9,10,11,12', 'The array should be sorted to [[7,8],[9,10],[11,12]]');
