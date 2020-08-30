abstract class Animal {
     name;
     breed;

     makeSound(){

     }
}
class Dog extends Animal{

     constructor(name){
          super();
          this.name = name;
     }
}

class Cat extends Animal{
     constructor(name){
          super();
          this.name = name;
     }
}

let dog1 = new Dog('Dog 1');
let cat1 = new Cat('Cat 1');