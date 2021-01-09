function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };

var Person = function(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log('My Name is ' + this.name);
}

var Teacher = function(name, subject){
    Person.call(this, name);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false,
    writable: true,
});

Teacher.prototype.teach = function(){
    console.log(this.name + ' teaches ' + this.subject);
}

var soikat = new Person('Soikat');
var aslam = new Teacher('Aslam', 'Math');
//soikat.sayName();
//aslam.sayName();
//aslam.teach();

/* 
    Example with inherits method
*/

var Musician = function(name, instrument){
    //Person.call(this, name);
    // this is cleaner as we don't have to remember the Parent class name
    Musician.super_.call(this, name);
    this.instrument = instrument;
}

inherits(Musician, Person);

Musician.prototype.play = function(){
    console.log(this.name + ' plays ' + this.instrument);
}



var sumon = new Musician('Sumon', 'Drums');
sumon.sayName();
sumon.play();