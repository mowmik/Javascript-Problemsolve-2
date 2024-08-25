// 1 no answer {Destructuring}
const person = {
    name: "Mowmik Saroar",
    age: 23
}
const {name,age} = person;
console.log(name,age);


// 2 no answer {Module}
import { circle } from "./module.js";
circle();


// 3 no answer {Classes}
class Rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    calculateArea(){
        return this.height * this.width;
    }
}
const Area = new Rectangle(12,10);
console.log(Area.calculateArea());


// 4 no answer {Getter and Setter}
const Person = {
    firstName: "Jubayer",
    lastName: "Ahmed",
    fullname: "",
    get fullName(){
        return this.firstName+" "+this.lastName;
    },
    set Fname(fullname){
       this.fullname = fullname;
    }
}
Person.Fname = "Mowmik Saroar";
console.log(Person.fullName + "\n" + Person.fullname);



// 5 no answer {class Expressions}
let Circle = class{
    constructor(r){
        this.radius = r;
    }
    circumference(){
        let res = 2 * Math.PI * this.radius;
        return res.toFixed(2);
    }
}
const radius = new Circle(2);
console.log(radius.circumference());



// 6 no answer {Computed Properties}
let firstName = "fname";
let lastName = "lname";
let profession = "prof";
const com = {
    [firstName]: "John",
    [lastName]: "Due",
    [profession]: "programmer"
}
console.log(`My name is ${com.fname} ${com.lname} and I'm a ${com.prof}`);


// 7 no answer {Inheritance}
class dog {

    constructor(animalName){
        this.animalName = animalName;
    }
    result(){
        return `This animal name is ${this.animalName}`
    }
}

class Animal extends dog {

    constructor(animalName,animalOld){
        super(animalName);
        this.animalOld = animalOld;
    }
    show(){
        return `${this.result()} and ${this.animalName} is ${this.animalOld} years old.` 
    }
}

const animalName1 = new Animal("dog",25);
console.log(animalName1.show());



// 8 no answer {new target operator} 
class Shapes {
    constructor(name) {
      if (!new.target.name) {
          throw 'Must use new operator';
        }
        console.log(this.name = name)
    }
}
let mowmik = new Shapes("mowmik");



// 9 no answer {static}
class MathUtil {
   static square(x){
    return x * x;
   }
}
console.log(MathUtil.square(5));



// 10 no answer {symbol}
const sym = Symbol();
const obj = {
    [sym] : "John Due"
}
console.log(obj[sym]);



