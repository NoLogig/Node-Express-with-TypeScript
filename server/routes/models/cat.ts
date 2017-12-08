export interface ICat {
  id: number,
  name: string,
  weight: number,
  age: number
}

export const Cats: Array<ICat> = [
  {
    id: 1,
    name: "Luke Cage",
    weight: 10,
    age: 1
  },
  {
    id: 2,
    name: "Spider-Man",
    weight: 18,
    age: 4
  }
];

export const catsData = [
  {
    id: 1,
    name: "Luke Cage",
    aliases: ["Carl Lucas", "Power Man", "Mr. Bulletproof", "Hero for Hire"],
    gender: "male",
    height: {
      ft: 6,
      in: 3
    }
  },
  {
    id: 2,
    name: "Spider-Man",
    aliases: ["Dr. Peter Benjamin Parker", "Spidey", "Web-Sligner", "Spider-X-Man"],
    gender: "male",
    height: {
      ft: 5,
      in: 10
    }
  }
];

