// tests/main.test.ts

import { vi } from "vitest";

import {
  EuropeanCat,
  Animal,
  ChartreuxCat,
  NewfoundlandDog,
  MoonMoonDog,
  Chickadee,
  Blackbird,
  Tuna,
  Shark,
  photograph,
  meow,
  bark,
  fly,
  swim,
  stroke,
  feed,
} from "~/src/main";

describe("Animal kingdom", () => {
  it("EuropeanCat should be 4-legged, black, meow, and be fed", () => {
    const cat = new EuropeanCat();
    expect(cat.name).toBe("European cat");
    expect(cat.legs).toBe(4);
    expect(cat.color).toBe("black");

    // Test meow output
    const spy = vi.spyOn(console, "log");
    meow(cat);
    expect(spy).toHaveBeenCalledWith("European cat says: Meow!");
    spy.mockRestore();

    // Test feed output
    const feedSpy = vi.spyOn(console, "log");
    feed(cat);
    expect(feedSpy).toHaveBeenCalledWith(
      "Feeding a black animal: European cat.",
    );
    feedSpy.mockRestore();
  });

  it("ChartreuxCat should be 4-legged, not black, and meow", () => {
    const cat = new ChartreuxCat();
    expect(cat.name).toBe("Chartreux cat");
    expect(cat.legs).toBe(4);
    expect(cat).not.toHaveProperty("color");

    // meow
    const spy = vi.spyOn(console, "log");
    meow(cat);
    expect(spy).toHaveBeenCalledWith("Chartreux cat says: Meow!");
    spy.mockRestore();
  });

  it("NewfoundlandDog should be 4-legged, black, bark, and be fed", () => {
    const dog = new NewfoundlandDog();
    expect(dog.name).toBe("Newfoundland dog");
    expect(dog.legs).toBe(4);
    expect(dog.color).toBe("black");

    const barkSpy = vi.spyOn(console, "log");
    bark(dog);
    expect(barkSpy).toHaveBeenCalledWith("Newfoundland dog says: Woof!");
    barkSpy.mockRestore();

    const feedSpy = vi.spyOn(console, "log");
    feed(dog);
    expect(feedSpy).toHaveBeenCalledWith(
      "Feeding a black animal: Newfoundland dog.",
    );
    feedSpy.mockRestore();
  });

  it("MoonMoonDog should be 4-legged, not black, and bark", () => {
    const dog = new MoonMoonDog();
    expect(dog.name).toBe("Moon Moon dog");
    expect(dog.legs).toBe(4);
    expect(dog).not.toHaveProperty("color");

    const barkSpy = vi.spyOn(console, "log");
    bark(dog);
    expect(barkSpy).toHaveBeenCalledWith("Moon Moon dog says: Woof!");
    barkSpy.mockRestore();
  });

  it("Blackbird should be black and fly", () => {
    const bird = new Blackbird();
    expect(bird.name).toBe("Blackbird");
    expect(bird.color).toBe("black");

    const flySpy = vi.spyOn(console, "log");
    fly(bird);
    expect(flySpy).toHaveBeenCalledWith("Blackbird is flying.");
    flySpy.mockRestore();

    const feedSpy = vi.spyOn(console, "log");
    feed(bird);
    expect(feedSpy).toHaveBeenCalledWith("Feeding a black animal: Blackbird.");
    feedSpy.mockRestore();
  });

  it("Chickadee can fly but is not black", () => {
    const bird = new Chickadee();
    expect(bird.name).toBe("Chickadee");
    expect(bird).not.toHaveProperty("color");

    const flySpy = vi.spyOn(console, "log");
    fly(bird);
    expect(flySpy).toHaveBeenCalledWith("Chickadee is flying.");
    flySpy.mockRestore();
  });

  it("Tuna and Shark can swim", () => {
    const tuna = new Tuna();
    const shark = new Shark();

    const swimSpy = vi.spyOn(console, "log");
    swim(tuna);
    expect(swimSpy).toHaveBeenCalledWith("Tuna is swimming.");
    swim(shark);
    expect(swimSpy).toHaveBeenCalledWith("Shark is swimming.");
    swimSpy.mockRestore();
  });

  it("All 4-legged animals can be stroked", () => {
    const cat = new EuropeanCat();
    const dog = new NewfoundlandDog();
    const strokeSpy = vi.spyOn(console, "log");
    stroke(cat);
    expect(strokeSpy).toHaveBeenCalledWith(
      "Stroking a four-legged animal with 4 legs.",
    );
    stroke(dog);
    expect(strokeSpy).toHaveBeenCalledWith(
      "Stroking a four-legged animal with 4 legs.",
    );
    strokeSpy.mockRestore();
  });

  it("All animals can be photographed", () => {
    const animal = new Animal("Gazelle");
    const photoSpy = vi.spyOn(console, "log");
    photograph(animal);
    expect(photoSpy).toHaveBeenCalledWith("Photographing Gazelle.");
    photoSpy.mockRestore();
  });
});
