
// 6. CLASSES DOESN'T EXISTS
class Cadorna {
    constructor() {
        console.log('constructing');
    }
}

let c = new Cadorna();

// debugger;

// 5. PROTOYPE AND __PROTO__


// prototype only for functions



// 4. PROTOTYPE and NEW!!!

// function myFunc (name) {
//     this.names = name;
// }

// myFunc.prototype.talk = function () {
//     console.log(this.name);
// }

// myFunc.prototype.name = 'default name';


// let myObj = new myFunc('name in the consturctor');
// console.log('name : ' + myObj.name);
// console.log('names : ' + myObj.names);
// console.log('talk : ' + myObj.talk);
// console.log('##########################');

// function myNew (strName, myFunc) {
//     let returnValue = {};
//     returnValue.names = strName;
//     Object.setPrototypeOf(returnValue, myFunc.prototype);
//     myFunc.apply(returnValue, [myFunc, strName]); 
//     return returnValue;
// }


// let myObj2 = new myNew('custom new', myFunc);
// console.log('name : ' + myObj2.name);
// console.log('names : ' + myObj2.names);
// console.log('talk : ' + myObj2.talk);
// let sarasa = {...myFunc};

// sarasa.talk();




// 3. Object.setProrotypeOf chain of prototypes
// const Animal = {
//     talk: function() {console.log('I am an animal and my name is ' + this.name)}
// }

// const AnimalB = {
//     talkB: function() {console.log('I am anotehr animal. My name is not important')}
// }

// let cat = {
//     name: 'CAT!!'
// }



// Object.setPrototypeOf(AnimalB, Animal);
// Object.setPrototypeOf(cat, AnimalB);

// // cat.prototype = Animal;

// console.log(cat);

// cat.talk();
// cat.talkB();






// 1. BIND

// const myObj = {
//     uno: 1,
//     dos: function() { return 2 }
// }

// function printUno() {
//     console.log(this.uno);
// }

// console.log(myObj.uno);
// console.log(myObj.dos());

// const printUnoBinded = printUno.bind(myObj);

// printUnoBinded();

// 2. HIGHER ORDER FUNCTIONS
// function cadorna() {
//     console.log('value : ' + this.uno);
// }


// let sarasa = {
//     uno: 1,
//     cadorna // Another way
// }

// sarasa.cadorna();
