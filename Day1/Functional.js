//Exercises Level 1
//Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  
    eat(food) {
      console.log(`${this.name} is eating ${food}.`);
    }
  
    move(destination) {
      console.log(`${this.name} is moving to ${destination}.`);
    }
  }
  
//Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
      super(name, age, color, legs);
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} is barking.`);
    }
  
    fetch(object) {
      console.log(`${this.name} is fetching ${object}.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color, legs, furType) {
      super(name, age, color, legs);
      this.furType = furType;
    }
  
    meow() {
      console.log(`${this.name} is meowing.`);
    }
  
    scratch() {
      console.log(`${this.name} is scratching.`);
    }
  }

  let bulldog = new Dog("Bulldog", 4, "brown", 4, "Bulldog");
let poodle = new Dog("Poodle", 3, "white", 4, "Poodle");
let siamese = new Cat("Siamese", 2, "gray", 4, "Siamese");
let persian = new Cat("Persian", 2, "white", 4, "Persian");

bulldog.bark(); // Bulldog is barking
poodle.fetch("ball"); // Poodle is fetching ball
siamese.meow(); // Siamese is meowing
persian.scratch(); // Persian is scratching

//Level 2
//Override the method you create in Animal class

class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
      super(name, age, color, legs);
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
    // other methods
  }
  
  class Cat extends Animal {
    constructor(name, age, color, legs, furType) {
      super(name, age, color, legs);
      this.furType = furType;
    }
  
    speak() {
      console.log(`${this.name} meows.`);
    }
    
  }
  