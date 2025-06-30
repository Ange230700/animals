// src\main.ts

// Interfaces for extra capabilities
export interface FourLegged {
  legs: number; // This property tells us the animal has four legs.
}

export interface BlackAnimal {
  color: "black"; // Only animals whose color property is exactly "black" will implement this.
  name: string;
}

// Base Animal class
export class Animal {
  constructor(public name: string) {}
}

// =====================
// Cat classes
// =====================

// All cats are animals and are four-legged.
export class Cat extends Animal implements FourLegged {
  legs = 4;
}

// European cat is black.
export class EuropeanCat extends Cat implements BlackAnimal {
  color: "black" = "black" as const;
  constructor() {
    super("European cat");
  }
}

// Chartreux cat is not black.
export class ChartreuxCat extends Cat {
  constructor() {
    super("Chartreux cat");
  }
}

// =====================
// Dog classes
// =====================

// All dogs are animals and are four-legged.
export class Dog extends Animal implements FourLegged {
  legs = 4;
}

// Newfoundland dog is black.
export class NewfoundlandDog extends Dog implements BlackAnimal {
  color: "black" = "black" as const;
  constructor() {
    super("Newfoundland dog");
  }
}

// Moon Moon dog is not black.
export class MoonMoonDog extends Dog {
  constructor() {
    super("Moon Moon dog");
  }
}

// =====================
// Bird classes
// =====================

export class Bird extends Animal {}

// Chickadee (not black)
export class Chickadee extends Bird {
  constructor() {
    super("Chickadee");
  }
}

// Blackbird is black.
export class Blackbird extends Bird implements BlackAnimal {
  color: "black" = "black" as const;
  constructor() {
    super("Blackbird");
  }
}

// =====================
// Fish classes
// =====================

export class Fish extends Animal {
  constructor(
    name: string,
    public color?: string,
  ) {
    super(name);
  }
  // (Additional fish behavior could go here)
}

export class Tuna extends Fish {
  constructor() {
    super("Tuna");
  }
}

export class Shark extends Fish {
  constructor() {
    super("Shark");
  }
}

// =====================
// Insect classes
// =====================

export class Insect extends Animal {
  constructor(
    name: string,
    public color?: string,
  ) {
    super(name);
  }
  // (Additional insect behavior could go here)
}

export class Maggot extends Insect {
  constructor() {
    super("Maggot");
  }
}

// =====================
// Action Functions
// =====================

// 1. All animals can be photographed.
export function photograph(animal: Animal): void {
  console.log(`Photographing ${animal.name}.`);
}

// 2. All cats can meow.
export function meow(cat: Cat): void {
  console.log(`${cat.name} says: Meow!`);
}

// 3. All dogs can bark.
export function bark(dog: Dog): void {
  console.log(`${dog.name} says: Woof!`);
}

// 4. All birds can fly.
export function fly(bird: Bird): void {
  console.log(`${bird.name} is flying.`);
}

// 5. All fish can swim.
export function swim(fish: Fish): void {
  console.log(`${fish.name} is swimming.`);
}

// 6. All 4-legged animals can be stroked.
export function stroke(animal: FourLegged): void {
  console.log(`Stroking a four-legged animal with ${animal.legs} legs.`);
}

// =====================
// Example Usage (optional)
// =====================

const europeanCat = new EuropeanCat();
const chartreuxCat = new ChartreuxCat();
const newfoundlandDog = new NewfoundlandDog();
const moonMoonDog = new MoonMoonDog();
const chickadee = new Chickadee();
const blackbird = new Blackbird();
const tuna = new Tuna();
const shark = new Shark();
const maggot = new Maggot();

photograph(europeanCat); // All animals can be photographed.
meow(europeanCat); // Cats can meow.
stroke(europeanCat); // EuropeanCat is 4-legged.
feed(europeanCat); // EuropeanCat is black.

photograph(chartreuxCat);
meow(chartreuxCat);
stroke(chartreuxCat);
// feed(chartreuxCat); // Not black, won't work.

photograph(newfoundlandDog);
bark(newfoundlandDog);
stroke(newfoundlandDog);
feed(newfoundlandDog);

photograph(moonMoonDog);
bark(moonMoonDog);
stroke(moonMoonDog);
// feed(moonMoonDog); // Not black, won't work.

photograph(chickadee);
fly(chickadee);

photograph(blackbird);
fly(blackbird);
feed(blackbird);

photograph(tuna);
swim(tuna);

photograph(shark);
swim(shark);

photograph(maggot);

// =====================
// Update feed to use animal param
// =====================
export function feed(animal: BlackAnimal): void {
  const animalName = animal.name ?? "unknown animal";
  console.log(`Feeding a black animal: ${animalName}.`);
}
